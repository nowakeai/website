# nowake.ai Website Plan

This document defines the first-version website plan for nowake.ai.

The source decision record is [website-decisions.zh.md](website-decisions.zh.md).

## Website Goals

The website should make nowake.ai understandable in under one minute:

- nowake.ai is an open-source organization exploring AI-native operations.
- The work is broader than alert handling and broader than one product.
- The organization builds practical infrastructure tools for Kubernetes and cloud-native operations.
- AI is part of the method, but the site should not feel like an AI SaaS landing page.
- Users should know where to find projects, docs, GitHub, and engineering notes.

The site should feel like a technical open-source lab with strong engineering taste: distinctive, calm, useful, and credible.

## Primary Audiences

- SREs and platform engineers running Kubernetes and cloud infrastructure.
- Developers responsible for production services.
- Engineers evaluating AI-assisted operations without wanting opaque automation.
- Open-source contributors interested in infrastructure, Kubernetes, operations, and automation.

## Information Architecture

### Home `/`

Purpose:

- Explain the organization mission.
- Establish the nowake.ai route and tone.
- Introduce project families without turning the homepage into a product page.
- Point users to Projects, kube-insight, docs, notes, and GitHub.

Sections:

1. Hero: organization headline, short subheadline, and CTAs.
2. Why nowake.ai: operational complexity, missing context, repeated careful work.
3. What we build: evidence/memory, Kubernetes-native automation, access/audit/safety, alert intelligence.
4. Active Projects: kube-insight and svc-lb-mux.
5. Labs / Planned Directions: directions only, not unlaunched project names.
6. Principles: open source first, evidence before automation, operator control, least privilege, auditability before magic.
7. Docs / GitHub / Contribute entry.

Primary CTA:

- Learn more about nowake.ai

Secondary CTA:

- Explore kube-insight

### Projects `/projects`

Purpose:

- Provide the project index and roadmap in one page.
- Show maturity without over-promising future work.

Project display rules:

- Active: show concrete project name, status, short description, GitHub link, docs link when available.
- Early: show project name only if repository is public; otherwise show direction.
- Labs / Planned: show direction only, not specific unlaunched project names.

First-version content:

- Active: kube-insight, svc-lb-mux.
- Labs / Planned Directions: alert intelligence, access and audit, capacity automation, dependency recovery.
- Roadmap: included on this page, not a separate top-level page.

### kube-insight `/projects/kube-insight`

Purpose:

- Present kube-insight as the current flagship project without making the org homepage become kube-insight marketing.

Sections:

1. Problem: Kubernetes current state is not enough for many investigations.
2. Evidence loss: events expire, resources change, topology shifts.
3. Approach: retained sanitized history, facts, topology, changes, query surfaces.
4. Practical value: retained proof, faster queries, safer read surfaces, security filtering.
5. Quickstart and docs links.
6. GitHub and release links.

Tone:

- Treat kube-insight as an infrastructure evidence layer.
- Mention AI-assisted workflows only as one use case.
- Emphasize measurable and inspectable benefits.

### Notes `/blog` or `/notes`

Purpose:

- Publish engineering notes, design records, roadmap updates, and technical essays.

Content style:

- Engineering notes, not marketing posts.
- Suitable themes: operational memory, Kubernetes evidence, safe automation, AI-assisted operations boundaries, release notes, design records.

Naming:

- Prefer `/notes` if the tone should be more technical and less marketing.
- Use `/blog` only if future publishing cadence is broader.

### Docs `docs.nowake.ai`

Purpose:

- Separate documentation entry.

First version:

- Main site links to `docs.nowake.ai`.
- Do not migrate all repository docs into the organization homepage.

### About

No standalone About page in the first version.

About content should appear in:

- Home page lower sections.
- Footer.
- Future notes or organization page if needed.

## Navigation

First-version navigation:

- Home
- Projects
- Docs
- Notes
- GitHub

Avoid first-version navigation items that make the site feel too commercial:

- Solutions
- Platform
- Enterprise
- Pricing
- Contact Sales

## Content Strategy

### AI Weight

AI should be present but not visually or verbally dominant.

Use:

- AI-assisted operations
- AI-native operations as the long-term direction
- inspectable tools
- operator-controlled automation
- auditable workflows

Avoid:

- AI magic
- fully autonomous operations
- replacing operators
- heavy AI agent framing on the homepage
- hard-to-measure AI claims

### Sleep / NoWake Story

“Good night. Sleep tight.” can be used as culture and naming story, especially in footer/About-style copy.

It should not be the main homepage headline, and should not imply engineers avoid responsibility.

### Planned Work

Do not list specific names for planned projects on the homepage unless public repositories exist.

Use direction labels:

- Alert intelligence
- Access and audit
- Capacity automation
- Dependency recovery

## Visual Direction

The site should feel closer to:

- Technical lab
- Open-source infrastructure project
- Cloud-native tool brand

Useful references:

- shadcn dark mode restraint
- Supabase-style clean technical palette
- Strong content layout and typography before decorative effects

Use:

- A distinct but restrained color palette.
- Deep/light mode pairing.
- Clear technical diagrams where useful.
- Cards and panels for information grouping, not decorative card nesting.
- Lucide-style line icons.

Avoid:

- Heavy AI aesthetic.
- Neon cyberpunk.
- Generic SaaS landing-page composition.
- Pure documentation-site plainness.
- Cute, toy-like, or overly playful visuals.

## Implementation Direction

First visual exploration can remain static HTML under `website/prototypes/`.

For the real site, recommended stack remains Astro unless a later decision changes the product scope.

Reasons:

- Static output works well with Cloudflare Pages.
- Markdown/MDX is suitable for notes and project pages.
- The main site is content-first.
- React can be added only where interaction is needed.

Future product Web UIs should not be forced into Astro. They can use Vite + React or another app stack while sharing the nowake.ai visual language and frontend standards.

## Hosting Direction

Recommended first choice: Cloudflare Pages.

Reasons:

- The domain is already managed in Cloudflare.
- Git-based deploys fit this repository.
- Preview deployments will help compare design variants.
- Custom domain setup is straightforward.

Fallback: GitHub Pages.

## First Build Milestone

Before building the real site:

1. Finalize homepage content and page structure from this plan.
2. Create new visual prototypes with reduced AI SaaS feel.
3. Choose one visual direction.
4. Convert the chosen direction into the real static site.

The next prototype round should not reuse the previous AI-heavy direction. It should start from the content structure above and search for a more unique nowake.ai style.
