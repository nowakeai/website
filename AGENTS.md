# Website Agent Instructions

## Dependency Policy

The `website/` directory is the nowake.ai site repository.

This site currently has no legacy compatibility burden.

When adding or upgrading tools, frameworks, libraries, runtimes, or build dependencies, prefer the latest stable version by default.

Do not pin to older major versions for compatibility unless there is a clear, documented reason, such as:

- the latest stable version is incompatible with the target runtime or hosting platform;
- the latest stable version has a known blocking bug or security issue;
- a project-specific integration explicitly requires an older version.

If an older dependency version is chosen, document the reason near the dependency change or in the relevant project notes.

## Project Page Content Rules

When creating or revising a project page, follow `PROJECT_PAGE_STANDARD.md`. Project pages must share nowake.ai visual language, but each project needs a page structure tailored to its own product shape; do not reuse one fixed page template across projects.

When creating or revising architecture diagrams, flow diagrams, topology maps, or animated technical SVGs, follow `SVG-DESIGN.md`. Hero-critical project diagrams should be handcrafted SVG unless there is a documented reason to use Mermaid, an image, or an HTML-only diagram.

For every project page, do both jobs well:

- Explain the project principle clearly enough that a new visitor can understand how it works.
- Put the core product selling points near the top, in concise and concrete language.

Do not let architecture explanation bury the value proposition. Project pages should make the main benefit obvious before deeper implementation details.

Current emphasis:

- `kube-insight`: treat it as a foundational AIOps infrastructure component with large future surface area. Its page can use more eye-catching, forceful copy, but the claims must stay grounded in concrete retained-evidence workflows, performance proof, and current shipped capabilities. Highlight that it is agent-friendly, supports multiple operating/storage modes, and can be dramatically faster than broad live `kubectl` investigation workflows because it queries retained, pre-extracted evidence.
- `svc-lb-mux`: treat it as a narrow, original, operations-first tool for teams that need to expose many TCP/UDP services through provider L4 load balancers while caring about cost, quota, IP, forwarding rule, or port pressure. Its copy should be plain and specific: make the use case, user, product advantage, provider limits, and migration path obvious before controller internals.
