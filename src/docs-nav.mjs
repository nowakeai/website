import fs from "node:fs";
import path from "node:path";

const empty = undefined;
const manifestPath = path.resolve(process.cwd(), "docs.sources.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const projectLabels = {
  betternat: "BetterNAT",
  "kube-insight": "kube-insight",
  "svc-lb-mux": "svc-lb-mux",
};

const groupLabels = {
  root: "Start Here",
  concepts: "Concepts",
  guides: "Guides",
  providers: "Providers",
  reference: "Reference",
  operations: "Operations",
  security: "Security",
  architecture: "Architecture",
  roadmap: "Roadmap",
};

const projectSortKey = (project) => `${String(project.nav_order ?? 999).padStart(4, "0")}:${project.project}`;
const projects = [...manifest.projects].sort((a, b) => projectSortKey(a).localeCompare(projectSortKey(b)));

const groupOrder = [
  "root",
  "concepts",
  "guides",
  "providers",
  "reference",
  "operations",
  "security",
  "architecture",
  "roadmap",
];

const normalize = (value) => {
  if (!value) return "/";
  const [pathname, hash] = value.split("#");
  const cleanPath = pathname === "/" ? "/" : pathname.endsWith("/") ? pathname : `${pathname}/`;
  return hash ? `${cleanPath}#${hash}` : cleanPath;
};

const current = (pathname, href) => !href.includes("#") && normalize(pathname) === normalize(href);

const link = (label, href, pathname) => ({
  type: "link",
  label,
  href,
  isCurrent: current(pathname, href),
  badge: empty,
  attrs: {},
});

const group = (label, entries, collapsed = false) => ({
  type: "group",
  label,
  entries,
  collapsed,
  badge: empty,
});

const routeForTarget = (project, target) => {
  const withoutExt = target.replace(/(^|\/)index\.mdx?$/, "$1").replace(/\.mdx?$/, "");
  const suffix = withoutExt ? `${withoutExt}/` : "";
  return `/docs/${project.project}/${suffix}`;
};

const groupKeyForTarget = (target) => {
  const [first] = target.split("/");
  if (target === "roadmap.md" || target === "roadmap.mdx") return "roadmap";
  if (["concepts", "guides", "providers", "reference", "operations", "security", "architecture"].includes(first)) {
    return first;
  }
  return "root";
};


export const isProjectDocsPath = (pathname) => {
  const match = pathname.match(/^\/docs\/([^/]+)/);
  return Boolean(match && manifest.projects.some((project) => project.project === match[1]));
};

const projectForPathname = (pathname) => {
  const match = pathname.match(/^\/docs\/([^/]+)/);
  if (!match) return undefined;
  return projects.find((project) => project.project === match[1]);
};

export const globalSidebar = [
  {
    label: "Start Here",
    items: [
      { slug: "docs", label: "Docs Home" },
      { label: "Project Pages", link: "/projects" },
    ],
  },
  {
    label: "Projects",
    items: projects.map((project) => ({
      slug: `docs/${project.project}`,
      label: projectLabels[project.project] ?? project.project,
    })),
  },
  {
    label: "Common Topics",
    items: [
      { label: "Getting Started", link: "/docs/#getting-started" },
      { label: "Operations", link: "/docs/#operations" },
      { label: "Security", link: "/docs/#security" },
      { label: "Agent-friendly Docs", link: "/docs/#agent-friendly-docs" },
    ],
  },
];

export const globalRouteSidebar = (pathname) => [
  group("Start Here", [
    link("Docs Home", "/docs/", pathname),
    link("Project Pages", "/projects", pathname),
  ]),
  group(
    "Projects",
    projects.map((project) =>
      link(projectLabels[project.project] ?? project.project, `/docs/${project.project}/`, pathname),
    ),
  ),
  group("Common Topics", [
    link("Getting Started", "/docs/#getting-started", pathname),
    link("Operations", "/docs/#operations", pathname),
    link("Security", "/docs/#security", pathname),
    link("Agent-friendly Docs", "/docs/#agent-friendly-docs", pathname),
  ]),
];

export const projectRouteSidebar = (pathname) => {
  const project = projectForPathname(pathname);
  if (!project) return globalRouteSidebar(pathname);

  const grouped = new Map(groupOrder.map((key) => [key, []]));
  grouped.get("root").push(link("Overview", `/docs/${project.project}/`, pathname));

  for (const page of project.pages) {
    const groupKey = groupKeyForTarget(page.target);
    if (!grouped.has(groupKey)) grouped.set(groupKey, []);
    grouped.get(groupKey).push(link(page.nav_label ?? page.title, routeForTarget(project, page.target), pathname));
  }

  const entries = [];
  for (const key of groupOrder) {
    const links = grouped.get(key) ?? [];
    if (links.length > 0) entries.push(group(groupLabels[key] ?? key, links));
  }

  entries.push(group("All Docs", [link("Docs Home", "/docs/", pathname), link("Project Pages", "/projects", pathname)]));
  return entries;
};
