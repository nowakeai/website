#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const args = new Set(process.argv.slice(2));
const check = args.has("--check");
const prune = args.has("--prune");
const dryRun = args.has("--dry-run") || check;
const cwd = process.cwd();
const manifestPath = path.join(cwd, "docs.sources.json");
const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
const defaults = manifest.defaults ?? {};
const changed = [];
const missing = [];
const stale = [];
const validationErrors = [];
const linkErrors = [];
const structureErrors = [];

const allowedCategories = new Set([
  "overview",
  "concept",
  "guide",
  "reference",
  "operations",
  "provider",
  "troubleshooting",
  "architecture",
  "security",
  "roadmap",
]);
const allowedStatuses = new Set(["stable", "preview", "draft", "roadmap"]);

const normalizePath = (value) => value.split(path.sep).join("/");
const stripFrontmatter = (text) => text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
const stripFirstHeading = (text) => text.replace(/^# .+\r?\n+/, "");
const isRelativePath = (value) =>
  typeof value === "string" && value.length > 0 && !path.posix.isAbsolute(value);
const isRelativeSafePath = (value) =>
  isRelativePath(value) &&
  !normalizePath(path.posix.normalize(value)).startsWith("../") &&
  normalizePath(path.posix.normalize(value)) !== "..";

function yamlScalar(value) {
  if (typeof value === "boolean") return value ? "true" : "false";
  const str = String(value);
  if (/^[A-Za-z0-9_./:@# -]+$/.test(str) && !str.includes(": ")) return str;
  return JSON.stringify(str);
}

function yamlArray(values) {
  return `[${values.map((value) => yamlScalar(value)).join(", ")}]`;
}

function frontmatter(project, page) {
  const merged = {
    title: page.title,
    description: page.description,
    project: project.project,
    category: page.category,
    audience: page.audience ?? project.audience ?? defaults.audience,
    status: page.status ?? project.status ?? defaults.status,
    last_verified: page.last_verified ?? project.last_verified ?? defaults.last_verified,
    source_repo: project.source_repo,
    source_path: page.source,
  };
  if (page.applies_to) merged.applies_to = page.applies_to;
  if (page.agent_friendly) merged.agent_friendly = true;
  if (page.sidebar) merged.sidebar = page.sidebar;

  const lines = ["---"];
  for (const [key, value] of Object.entries(merged)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) lines.push(`${key}: ${yamlArray(value)}`);
    else lines.push(`${key}: ${yamlScalar(value)}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

function routeForTarget(project, target) {
  const withoutExt = target.replace(/(^|\/)index\.mdx?$/, "$1").replace(/\.mdx?$/, "");
  const suffix = withoutExt ? `${withoutExt}/` : "";
  return `/docs/${project.project}/${suffix}`;
}

function githubUrl(project, sourcePath) {
  const branch = project.source_branch ?? defaults.source_branch ?? "main";
  return `https://github.com/${project.source_repo}/blob/${branch}/${sourcePath}`;
}

function rewriteLinks(text, project, page, sourceToTarget) {
  const sourceDir = path.posix.dirname(page.source);
  return text.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (match, label, href) => {
    if (/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(href)) return match;
    const [rawPath, hash = ""] = href.split("#");
    const resolved = normalizePath(path.posix.normalize(path.posix.join(sourceDir, rawPath)));
    const target = sourceToTarget.get(resolved);
    if (target) {
      return `[${label}](${routeForTarget(project, target)}${hash ? `#${hash}` : ""})`;
    }
    return `[${label}](${githubUrl(project, resolved)}${hash ? `#${hash}` : ""})`;
  });
}

async function listMarkdownFiles(dir) {
  const files = [];
  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    return files;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listMarkdownFiles(full)));
    else if (/\.mdx?$/.test(entry.name)) files.push(full);
  }
  return files;
}

function validateManifest() {
  if (manifest.schemaVersion !== 1) validationErrors.push("docs.sources.json: schemaVersion must be 1");
  if (!Array.isArray(manifest.projects)) {
    validationErrors.push("docs.sources.json: projects must be an array");
    return;
  }

  const projectNames = new Set();
  for (const project of manifest.projects) {
    const prefix = `project ${project.project ?? "<missing>"}`;
    for (const field of ["project", "source_repo", "localPath", "targetRoot"]) {
      if (typeof project[field] !== "string" || project[field].length === 0) {
        validationErrors.push(`${prefix}: ${field} is required`);
      }
    }
    if (projectNames.has(project.project)) validationErrors.push(`${prefix}: duplicate project id`);
    projectNames.add(project.project);
    if (!isRelativePath(project.localPath)) validationErrors.push(`${prefix}: localPath must be a relative path`);
    if (!isRelativeSafePath(project.targetRoot)) validationErrors.push(`${prefix}: targetRoot must be a safe relative path`);
    if (!Array.isArray(project.pages)) {
      validationErrors.push(`${prefix}: pages must be an array`);
      continue;
    }

    const targets = new Set();
    const sources = new Set();
    for (const page of project.pages) {
      const pagePrefix = `${prefix} page ${page.target ?? page.source ?? "<missing>"}`;
      for (const field of ["source", "target", "title", "description", "category"]) {
        if (typeof page[field] !== "string" || page[field].length === 0) {
          validationErrors.push(`${pagePrefix}: ${field} is required`);
        }
      }
      const status = page.status ?? project.status ?? defaults.status;
      if (!allowedCategories.has(page.category)) validationErrors.push(`${pagePrefix}: unsupported category ${page.category}`);
      if (!allowedStatuses.has(status)) validationErrors.push(`${pagePrefix}: unsupported status ${status}`);
      if (!isRelativeSafePath(page.source)) validationErrors.push(`${pagePrefix}: source must be a safe relative path`);
      if (!isRelativeSafePath(page.target)) validationErrors.push(`${pagePrefix}: target must be a safe relative path`);
      if (!/\.mdx?$/.test(page.target)) validationErrors.push(`${pagePrefix}: target must end in .md or .mdx`);
      if (sources.has(page.source)) validationErrors.push(`${pagePrefix}: duplicate source ${page.source}`);
      if (targets.has(page.target)) validationErrors.push(`${pagePrefix}: duplicate target ${page.target}`);
      sources.add(page.source);
      targets.add(page.target);
    }
  }
}

function docsLinksFromMarkdown(output) {
  return [
    ...output.matchAll(/\[[^\]]+\]\((\/docs\/[^)#\s]*)(#[^)\s]+)?\)/g),
    ...output.matchAll(/href=["'](\/docs\/[^"'#\s]*)(#[^"'\s]+)?["']/g),
  ];
}

function validateDocsLinks(file, output, knownRoutes) {
  for (const match of docsLinksFromMarkdown(output)) {
    const href = match[1].endsWith("/") ? match[1] : `${match[1]}/`;
    if (!knownRoutes.has(href)) linkErrors.push(`${file}: unresolved docs link ${match[1]}`);
  }
}

function validateMarkdownStructure(file, output) {
  const body = stripFrontmatter(output);
  let inFence = false;
  let fenceMarker = "";
  const h1Lines = [];

  body.split(/\r?\n/).forEach((line, index) => {
    const fence = line.match(/^\s*(```+|~~~+)/);
    if (fence) {
      const marker = fence[1][0];
      if (!inFence) {
        inFence = true;
        fenceMarker = marker;
      } else if (marker === fenceMarker) {
        inFence = false;
        fenceMarker = "";
      }
      return;
    }
    if (!inFence && /^#\s+/.test(line)) h1Lines.push(index + 1);
  });

  if (h1Lines.length > 0) {
    structureErrors.push(`${file}: content body must not contain H1 headings outside code fences (lines ${h1Lines.join(", ")})`);
  }
}

validateManifest();
if (validationErrors.length > 0) {
  console.error("Invalid docs source manifest:");
  for (const error of validationErrors) console.error(`- ${error}`);
  process.exit(1);
}

const knownRoutes = new Set(["/docs/"]);
for (const project of manifest.projects ?? []) {
  knownRoutes.add(`/docs/${project.project}/`);
  for (const page of project.pages) knownRoutes.add(routeForTarget(project, page.target));
}

for (const project of manifest.projects ?? []) {
  const projectRoot = path.resolve(cwd, project.localPath);
  const targetRoot = path.resolve(cwd, project.targetRoot);
  const sourceToTarget = new Map(project.pages.map((page) => [normalizePath(page.source), normalizePath(page.target)]));
  const expectedTargets = new Set(project.pages.map((page) => normalizePath(page.target)));

  const existing = await listMarkdownFiles(targetRoot);
  for (const file of existing) {
    const rel = normalizePath(path.relative(targetRoot, file));
    if (rel === "index.md" || rel === "index.mdx") continue;
    if (!expectedTargets.has(rel)) stale.push(path.relative(cwd, file));
  }

  for (const page of project.pages) {
    const sourcePath = path.resolve(projectRoot, page.source);
    const targetPath = path.resolve(targetRoot, page.target);
    const targetLabel = path.relative(cwd, targetPath);

    let source;
    try {
      source = await fs.readFile(sourcePath, "utf8");
    } catch (error) {
      missing.push(`${project.project}: ${page.source}`);
      continue;
    }

    const body = rewriteLinks(stripFirstHeading(stripFrontmatter(source)).trimStart(), project, page, sourceToTarget);
    const output = `${frontmatter(project, page)}${body.endsWith("\n") ? body : `${body}\n`}`;
    validateDocsLinks(targetLabel, output, knownRoutes);
    validateMarkdownStructure(targetLabel, output);

    let current = null;
    try {
      current = await fs.readFile(targetPath, "utf8");
    } catch (error) {
      // Missing targets are created below unless this is a check run.
    }

    if (current !== output) {
      changed.push(targetLabel);
      if (!dryRun) {
        await fs.mkdir(path.dirname(targetPath), { recursive: true });
        await fs.writeFile(targetPath, output);
      }
    }
  }
}

const allContentDocs = await listMarkdownFiles(path.resolve(cwd, "src/content/docs"));
for (const file of allContentDocs) {
  const label = path.relative(cwd, file);
  const output = await fs.readFile(file, "utf8");
  validateDocsLinks(label, output, knownRoutes);
  validateMarkdownStructure(label, output);
}

if (prune && stale.length > 0 && !dryRun) {
  for (const file of stale) await fs.unlink(path.resolve(cwd, file));
}

if (missing.length > 0) {
  console.error("Missing source docs:");
  for (const item of missing) console.error(`- ${item}`);
  process.exitCode = 1;
}

if (linkErrors.length > 0) {
  console.error("Invalid docs links:");
  for (const item of linkErrors) console.error(`- ${item}`);
  process.exitCode = 1;
}

if (structureErrors.length > 0) {
  console.error("Invalid docs markdown structure:");
  for (const item of structureErrors) console.error(`- ${item}`);
  process.exitCode = 1;
}

if (stale.length > 0) {
  const mode = prune && !dryRun ? "removed" : "found";
  console.error(`Docs sync ${mode} ${stale.length} stale file(s):`);
  for (const file of stale) console.error(`- ${file}`);
  if (check || !prune) process.exitCode = 1;
}

if (changed.length > 0) {
  const mode = dryRun ? "would update" : "updated";
  console.log(`Docs sync ${mode} ${changed.length} file(s):`);
  for (const file of changed) console.log(`- ${file}`);
  if (check) process.exitCode = 1;
} else if (missing.length === 0 && stale.length === 0 && linkErrors.length === 0 && structureErrors.length === 0) {
  console.log("Docs sync is up to date.");
}
