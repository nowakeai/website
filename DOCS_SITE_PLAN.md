# nowake.ai Docs Site Plan

This document plans the first nowake.ai documentation site for `kube-insight` and `svc-lb-mux`.

The goal is to keep project documentation close to each project repo while rendering it through a unified nowake.ai docs experience.

## Goals

1. Define how nowake.ai project docs should be arranged.
2. Build a docs site that can render `kube-insight` and `svc-lb-mux` documentation under one visual and navigation system.
3. Preserve each project repo as the source of truth for project-specific docs.
4. Make docs useful for humans and future agents: clear tasks, commands, expected outputs, failure modes, limits, and next links.

## Non-goals For The First Version

- Do not migrate every historical design note into the public docs site.
- Do not build full versioned documentation yet. Add versioning after releases and compatibility matrices become a real user need.
- Do not make docs a separate framework/repo. Keep it inside `website/` for now.
- Do not publish development checklists, old closeout notes, or internal scratch docs as first-class public docs unless they are rewritten for users.

## Recommended Rendering Stack

Use Astro Starlight inside the existing `website/` repo.

Reasons:

- The website is already Astro.
- Starlight is purpose-built for docs and supports Markdown/MDX, navigation, search, SEO, code highlighting, and accessible docs layouts.
- The docs can share nowake.ai deployment, CI, and Cloudflare Pages hosting.
- Custom Astro components can be added later for project diagrams, version badges, provider matrices, benchmark tables, and agent workflows.

Target routes:

```text
/docs/
/docs/kube-insight/
/docs/svc-lb-mux/
```

Optional later route:

```text
docs.nowake.ai -> /docs/
```

## Source Of Truth Model

First version:

- Keep canonical project docs in each project repo under `docs/`.
- Curate a public copy into `website/src/content/docs/<project>/`.
- Keep source metadata in frontmatter so a reader can jump back to the owning repo.

Later version:

- Add a sync script that pulls selected docs from `kube-insight` and `svc-lb-mux` into `website`.
- Validate frontmatter, links, headings, and public/private doc boundaries in CI.

## Standard Document Frontmatter

Every rendered docs page should include frontmatter like this:

```yaml
---
title: Getting Started
description: Install and validate the project in a real environment.
project: kube-insight
category: guide
audience: platform-engineer
status: stable
last_verified: 2026-05-20
source_repo: nowakeai/kube-insight
source_path: docs/quickstart.md
---
```

Required fields:

- `title`
- `description`
- `project`
- `category`
- `audience`
- `status`
- `source_repo`
- `source_path`

Recommended fields:

- `last_verified` for docs with commands, benchmarks, provider behavior, or install steps.
- `applies_to` for provider-specific or backend-specific pages.
- `agent_friendly: true` for pages intended to be consumed by AIOps agents or coding agents.

## Common Docs Structure

Each project does not need identical docs, but every public project should map its docs into these categories when possible:

```text
overview/        What the project is and when to use it
getting-started/ Shortest useful path
concepts/        Product concepts and mental model
guides/          Task-oriented tutorials
reference/       CLI, config, API, Helm values, schemas
operations/      Deployment, GitOps, upgrades, provider notes
troubleshooting/ Failure modes and diagnostic flows
architecture/    System design and control/data flow
security/        Permissions, sensitive data, trust boundaries
roadmap/         Known limits and future direction
```

A small tool like `svc-lb-mux` should stay compact. A larger platform component like `kube-insight` can have deeper sections.

## Writing Standard

Each public doc page should answer:

1. What problem does this page solve?
2. Who should read it?
3. What prerequisites are required?
4. What commands or configuration should the reader apply?
5. What output should they expect?
6. What common failures should they check?
7. What are the current limits?
8. Where should they go next?

Rules:

- Prefer task-oriented docs over abstract references for first-time users.
- Put provider/version limits near the relevant commands, not only at the end.
- Keep old design notes out of the public path unless rewritten into current docs.
- Use explicit command blocks and expected-output blocks.
- Avoid claims like “works everywhere” unless the project has validated provider coverage.
- For agent-facing docs, include stable nouns, schemas, commands, and failure signals.

## kube-insight First Version

Product shape: AIOps infrastructure component and Kubernetes retained-evidence system.

Docs tone:

- More ambitious than a small utility.
- Emphasize the missing Kubernetes infrastructure history layer.
- Explain how retained versions, facts, edges, and observations support humans, scripts, and agents.
- Keep performance claims tied to measured agent-style investigation workflows.

Recommended first public docs tree:

```text
/docs/kube-insight/
  index.md
  getting-started.md
  concepts/
    retained-evidence.md
    data-model.md
  guides/
    investigate-expired-events.md
    trace-service-topology.md
    agent-sql-workflows.md
  reference/
    configuration.md
    filters-and-extractors.md
    storage-modes.md
  operations/
    storage-backends.md
    performance-validation.md
  security/
    sanitization-and-retention.md
    rbac-roadmap.md
  architecture/
    system-architecture.md
    ingestion-and-extraction.md
  roadmap.md
```

Initial source mapping:

| Docs site page | Source | Notes |
| --- | --- | --- |
| `index.md` | `kube-insight/docs/README.md` + project page copy | Rewrite as docs landing page. |
| `getting-started.md` | `kube-insight/docs/quickstart.md` | Keep task-oriented. |
| `concepts/retained-evidence.md` | `requirements/product-brief.md`, `data/data-model.md` | Explain missing infra history layer. |
| `concepts/data-model.md` | `data/data-model.md` | User-facing subset only. |
| `guides/investigate-expired-events.md` | `workflows/real-world-cases.md`, `validated-troubleshooting-scenarios.md` | Use one concrete case. |
| `guides/trace-service-topology.md` | `workflows/service-mux-history-case-report.md` | Good practical case for graph/evidence. |
| `guides/agent-sql-workflows.md` | `workflows/agent-sql-cookbook.md` | Mark agent-friendly. |
| `reference/configuration.md` | `configuration/configuration.md` | Include filters/extractors pointers. |
| `reference/filters-and-extractors.md` | `configuration/processing-model.md` | Highlight sanitization and redaction. |
| `reference/storage-modes.md` | `validation/storage-mode-comparison.md`, `data/multi-backend-roadmap.md` | Separate shipped vs roadmap. |
| `operations/performance-validation.md` | `validation/storage-mode-comparison.md` | Keep measurement scope explicit. |
| `security/sanitization-and-retention.md` | `security/security-retention.md` | User-facing security doc. |
| `security/rbac-roadmap.md` | `security/kubernetes-rbac-inheritance.md`, `security/agent-rbac-sql-filtering.md` | Clearly mark future behavior. |
| `architecture/system-architecture.md` | `architecture/system-architecture.md` | Keep diagrams. |
| `architecture/ingestion-and-extraction.md` | `ingestion/ingestion-and-extraction.md` | Current system shape only. |
| `roadmap.md` | `roadmap/roadmap.md` | Trim open questions. |

Do not publish these as first-class docs in the first pass:

- `docs/dev/*`
- old MVP closeout/checklist docs
- raw research notes unless summarized into user-facing docs

## svc-lb-mux First Version

Product shape: narrow, original, operations-first Kubernetes LoadBalancer consolidation tool.

Docs tone:

- Plain and specific.
- Directly explain when the tool is useful and when it is not.
- Keep provider limits visible.
- Optimize for platform/SRE readers who need to install, validate, and avoid GitOps/provider mistakes.

Recommended first public docs tree:

```text
/docs/svc-lb-mux/
  index.md
  getting-started.md
  concepts/
    mux-and-channel-services.md
  guides/
    expose-first-channel.md
    migrate-existing-loadbalancer-service.md
    automatic-port-allocation.md
  providers/
    gke.md
    aws-nlb.md
  operations/
    gitops.md
    troubleshooting.md
    pressure-testing.md
  architecture/
    controller-design.md
  roadmap.md
```

Initial source mapping:

| Docs site page | Source | Notes |
| --- | --- | --- |
| `index.md` | `svc-lb-mux/docs/README.md` + project page copy | Rewrite around exact use case. |
| `getting-started.md` | `docs/getting-started.md` | Keep install + validation flow. |
| `concepts/mux-and-channel-services.md` | `docs/channel-services.md` | Explain mux/channel model. |
| `guides/expose-first-channel.md` | `docs/getting-started.md`, `docs/tutorials.md` | Copyable first task. |
| `guides/migrate-existing-loadbalancer-service.md` | `docs/tutorials.md` | Important practical adoption path. |
| `guides/automatic-port-allocation.md` | `docs/channel-services.md`, `docs/tutorials.md` | Explain auto allocation without overselling default range. |
| `providers/gke.md` | `docs/gke-lb-setup.md` | Mark GKE-specific limits clearly. |
| `providers/aws-nlb.md` | `docs/aws-nlb-setup.md` | Mark as provider guide. |
| `operations/gitops.md` | `docs/gitops.md` | Must be prominent. |
| `operations/troubleshooting.md` | `docs/troubleshooting.md` | Keep symptom -> check -> fix format. |
| `operations/pressure-testing.md` | `docs/gke-pressure-test-report.md` | GKE-specific validation, not generic proof. |
| `architecture/controller-design.md` | `docs/controller.md` | User-facing subset. |
| `roadmap.md` | `ROADMAP.md` | Current limits and follow-up work. |

## Navigation Design

Top docs landing:

```text
nowake.ai/docs
  Start here
  Projects
    kube-insight
    svc-lb-mux
  Common topics
    Getting started
    Operations
    Security
    Agent-friendly docs
```

kube-insight sidebar:

```text
Overview
Getting Started
Concepts
  Retained Evidence
  Data Model
Guides
  Expired Events
  Service Topology
  Agent SQL Workflows
Reference
  Configuration
  Filters And Extractors
  Storage Modes
Operations
  Performance Validation
Security
Architecture
Roadmap
```

svc-lb-mux sidebar:

```text
Overview
Getting Started
Concepts
  Mux And Channel Services
Guides
  Expose First Channel
  Migrate Existing LoadBalancer Service
  Automatic Port Allocation
Providers
  GKE
  AWS NLB
Operations
  GitOps
  Troubleshooting
  Pressure Testing
Architecture
Roadmap
```

## Implementation Phases

### Phase 1: Docs Site Shell

- Add Astro Starlight to `website`.
- Add `/docs` route and shared docs landing page.
- Apply nowake.ai branding enough to feel connected to the main site.
- Configure search and sidebars.
- Keep existing marketing/project pages unchanged.

Acceptance criteria:

- `npm run build` passes.
- `/docs`, `/docs/kube-insight`, and `/docs/svc-lb-mux` render locally.
- CI passes in `nowakeai/website`.

### Phase 2: Curated First Docs Import

- Create curated MD/MDX copies under `website/src/content/docs/`.
- Add frontmatter to every page.
- Rewrite docs that are currently project-internal into public docs.
- Keep source links back to GitHub.

Acceptance criteria:

- Each project has an overview, getting started, concepts, one or more guides, operations, troubleshooting, and roadmap.
- kube-insight has at least one agent-friendly workflow doc.
- svc-lb-mux has provider-specific GKE/AWS docs and GitOps guidance.

### Phase 3: Documentation Standardization In Project Repos

- Add `DOCS_STANDARD.md` or update `AGENTS.md` in each project repo.
- Require public docs frontmatter for new docs.
- Split public docs from dev notes.
- Add docs lint checks for broken links and required frontmatter.

Acceptance criteria:

- New project docs follow the same metadata and category rules.
- Dev scratch docs no longer appear as public docs by accident.

### Phase 4: Sync Automation

- Add `scripts/sync-project-docs.ts` or equivalent.
- Define a manifest such as `docs.manifest.json` in each project.
- Copy only listed public docs into `website/src/content/docs`.
- Preserve source metadata and edit links.

Acceptance criteria:

- Website docs can be refreshed from project repos with one command.
- CI fails if listed docs are missing, have bad frontmatter, or contain broken local links.

### Phase 5: Versioning And Release Docs

Add only when needed:

- Versioned docs per release.
- Compatibility matrices.
- Migration guides.
- Archived docs for old major versions.

## Open Decisions

- Whether docs should live only under `nowake.ai/docs` or also use `docs.nowake.ai`.
- Whether the first version should manually curate docs or immediately implement sync automation. Recommendation: manual curate first.
- How aggressively to rewrite kube-insight research/design docs into public user docs. Recommendation: rewrite, do not raw-publish.
- Whether Cloudflare Pages preview deployments should include docs search indexing.

## Immediate Next Tasks

1. Add Starlight to `website`.
2. Create `/docs` landing page and sidebars.
3. Curate first docs for `svc-lb-mux` because the doc set is smaller and easier to validate.
4. Curate first docs for `kube-insight`, starting with quickstart, retained evidence concepts, agent SQL workflows, performance validation, and security/retention.
5. Add source links and last-verified metadata.
6. Build locally, then push to `nowakeai/website` and verify Cloudflare Pages.
