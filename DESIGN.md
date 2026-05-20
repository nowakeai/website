# nowake.ai Design Guide

This guide defines the visual language for nowake.ai websites and future project Web UIs.

The current source of truth is the Astro implementation under `website/src/`. The chosen direction is:

> Open Index information structure + Cloud Index palette.

The system should feel like an open-source infrastructure portal: calm, technical, credible, and easy to scan. It should not feel like an AI SaaS landing page, a deep console-only tool, or a marketing site.

## Core Principles

1. Content first.
   Pages should explain real infrastructure work clearly before adding visual decoration.

2. Open-source infrastructure, not generic SaaS.
   Use practical navigation, project states, docs links, GitHub links, roadmap directions, and engineering notes.

3. AI is a method, not the visual identity.
   AI can appear in copy as AI-assisted workflows or AI-native operations, but avoid agent-heavy visuals, magic claims, and futuristic decoration.

4. Calm signal over noise.
   The interface should surface important information through hierarchy, spacing, and restrained accent color.

5. Inspectable and accountable.
   Visual patterns should reinforce evidence, auditability, least privilege, operator control, and open source.

## Brand Mood

Use these words as the target:

- calm
- technical
- open
- credible
- precise
- useful
- cloud-native
- evidence-oriented

Avoid these moods:

- neon
- cyberpunk
- toy-like
- sales-heavy
- AI-magic
- opaque autonomy
- decorative dashboard overload

## Design Tokens

Use a three-layer token model: primitive values, semantic aliases, then component tokens.

### Primitive Tokens

```css
:root {
  --nw-color-blue-50: #eef3fa;
  --nw-color-blue-100: #e6eefb;
  --nw-color-blue-200: #dbe1ea;
  --nw-color-blue-300: #d3dce9;
  --nw-color-blue-700: #245aae;

  --nw-color-ink-900: #171b24;
  --nw-color-slate-600: #626a78;
  --nw-color-slate-500: #596577;

  --nw-color-white: #ffffff;
  --nw-color-bg: #f7f8fb;
  --nw-color-green-700: #277b63;
  --nw-color-amber-700: #946514;

  --nw-shadow-blue-soft: rgba(29, 53, 93, 0.08);
}
```

### Semantic Tokens

```css
:root {
  --color-page: var(--nw-color-bg);
  --color-surface: var(--nw-color-white);
  --color-surface-soft: var(--nw-color-blue-50);
  --color-surface-raised: var(--nw-color-white);

  --color-text: var(--nw-color-ink-900);
  --color-text-muted: var(--nw-color-slate-600);
  --color-text-subtle: var(--nw-color-slate-500);

  --color-border: var(--nw-color-blue-200);
  --color-border-strong: var(--nw-color-blue-300);

  --color-accent: var(--nw-color-blue-700);
  --color-accent-soft: var(--nw-color-blue-100);
  --color-signal: var(--nw-color-green-700);
  --color-warn: var(--nw-color-amber-700);

  --shadow-surface: 0 20px 60px var(--nw-shadow-blue-soft);
}
```

### Component Tokens

```css
:root {
  --button-primary-bg: var(--color-text);
  --button-primary-text: var(--nw-color-white);
  --button-secondary-bg: var(--color-surface);
  --button-secondary-text: var(--color-text);
  --button-secondary-border: var(--color-border);

  --card-bg: var(--color-surface);
  --card-border: var(--color-border);
  --card-shadow: var(--shadow-surface);

  --footer-bg: var(--color-surface-soft);
  --footer-border: var(--color-border-strong);
  --footer-text: var(--color-text);
  --footer-muted: var(--color-text-subtle);
}
```

## Typography

Primary font:

- `Geist`
- fallback: `ui-sans-serif, system-ui, sans-serif`

Monospace font:

- `IBM Plex Mono`
- use for section labels, status labels, technical file-like labels

Serif accent font:

- `Newsreader`
- use sparingly for culture notes such as `Good night. Sleep tight.`

Rules:

- Letter spacing is `0` by default.
- Do not use negative letter spacing.
- Do not scale font size with viewport width.
- Use restrained headings inside cards and panels.
- Hero type should be prominent but not oversized.

Recommended scale:

```css
body {
  font-family: "Geist", ui-sans-serif, system-ui, sans-serif;
  color: var(--color-text);
  letter-spacing: 0;
}

.eyebrow {
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.875rem;
  font-weight: 650;
  text-transform: uppercase;
  color: var(--color-accent);
}

.hero-title {
  max-width: 64rem;
  font-size: 2.25rem;
  line-height: 1.05;
  font-weight: 650;
}

@media (min-width: 640px) {
  .hero-title { font-size: 3rem; }
}

@media (min-width: 1024px) {
  .hero-title { font-size: 3.75rem; }
}

.section-title {
  font-size: 1.875rem;
  line-height: 1.2;
  font-weight: 650;
}
```

## Layout

### Page Width

Use `max-width: 80rem` (`max-w-7xl`) for primary site content.

Standard section padding:

- mobile: `px-5 py-14` or `px-5 py-16`
- desktop: `lg:px-8 lg:py-16`

### Page Structure

Default homepage order:

1. Header
2. Hero
3. Why nowake.ai
4. What we build
5. Active Projects
6. Labs / Planned Directions
7. Principles
8. Docs / Notes / Contribute
9. Footer

### Section Treatment

Use alternating but quiet backgrounds:

- main page background: `--color-page`
- white sections for high-content blocks
- soft blue sections for roadmap/footer/supporting content

Do not use floating page sections as decorative cards. Cards are for repeated items, project summaries, panels, and grouped content.

## Header

Header should be sticky, translucent, and calm.

Rules:

- Left: logo mark + `nowake.ai`
- Center/right navigation: `Projects`, `Roadmap`, `Docs`, `Notes`
- Right desktop CTA: GitHub button with GitHub mark
- Do not repeat `GitHub` inside the desktop menu if the GitHub button is visible.
- Mobile: horizontal scroll nav with `Projects`, `Roadmap`, `Docs`, `Notes`
- Header height should remain compact.

Current placeholder logo:

- Use Lucide `moon-star` until an official mark exists.
- Place the icon inside a 40px square with `--color-text` background and white icon.

Header example:

```html
<header class="sticky top-0 z-50 border-b bg-[var(--color-page)]/90 backdrop-blur">
  <nav class="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
    <a class="flex min-h-[44px] items-center gap-3" href="/">
      <span class="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-text)] text-white">
        <i data-lucide="moon-star" class="h-5 w-5"></i>
      </span>
      <span class="text-lg font-semibold">nowake.ai</span>
    </a>
  </nav>
</header>
```

## Hero

Current preferred homepage headline:

> Less operational noise. More important work.

Hero copy can explain the fuller mission below the headline.

Rules:

- Keep the H1 short.
- Use the H1 for the core promise, not the full explanation.
- Put detailed scope in supporting copy.
- Use a technical panel on the right when useful.
- Do not use a marketing hero card or abstract AI artwork.

Hero panel pattern:

- white surface
- 1px blue-gray border
- technical label in monospace
- rows of operational noise sources
- icons from Lucide

Good hero support copy:

> nowake.ai uses AI-assisted workflows and automation to help teams cut through alerts, manual maintenance, access reviews, capacity work, and recovery tasks so teams can preserve evidence and focus on what truly needs attention.

## Components

### Buttons

All buttons and important links must have at least 44px height.

Primary button:

- background: `--color-text`
- text: white
- radius: `6px`
- padding: `12px 16px`
- font size: `14px`
- font weight: `650`

Secondary button:

- background: white
- text: `--color-text`
- border: `--color-border`
- same sizing as primary

Interaction:

```css
.pressable {
  transition: transform 180ms ease-out, box-shadow 180ms ease-out, border-color 180ms ease-out;
}

.pressable:hover { transform: translateY(-1px); }
.pressable:active { transform: translateY(0) scale(0.99); }
```

Do not use oversized pill buttons. Use compact rounded rectangles with 6px radius.

### Cards

Default card:

- background: white
- border: `1px solid --color-border`
- radius: `8px`
- padding: `20px` or `24px`
- optional shadow: `0 20px 60px rgba(29, 53, 93, 0.08)`

Use cards for:

- project summaries
- repeated feature groups
- docs/notes/contribute entries
- technical panels

Do not put cards inside cards unless the inner items are semantically repeated subitems in a technical panel.

### Soft Panels

Use soft panels for roadmap and planned direction content:

- background: `--color-surface-soft`
- border: `--color-border-strong`
- radius: `8px`
- padding: `24px` to `32px`

### Badges

Badges should be small and functional.

Examples:

- `Active / flagship`
- `kubernetes`
- `controller`
- `inspectable`

Style:

- radius: `6px`
- padding: `4px 8px`
- text: `12px`
- use accent-soft, green-soft, or white backgrounds

### Icons

Use Lucide line icons for UI and conceptual labels.

Preferred icons:

- brand placeholder: `moon-star`
- projects: `box`, `folder-open`
- docs: `book-open`
- notes: `notebook-pen`
- contribution: `git-pull-request-arrow`
- evidence: `archive`, `database-zap`
- automation: `workflow`, `repeat-2`, `wrench`
- access/security: `shield-check`, `key-round`
- signal/noise: `filter`, `bell-ring`, `activity`

Use a GitHub mark SVG for GitHub buttons. Lucide does not provide the GitHub logo in the current CDN package.

## Footer

Footer should use the same soft blue as roadmap panels.

Rules:

- background: `--footer-bg`
- border top: `--footer-border`
- logo mark: `moon-star`
- include the culture line `Good night. Sleep tight.`
- clarify that it is a culture note, not a promise to hide problems
- include columns for Projects, Resources, Principles, Labs

Footer should not be dark by default in this direction.

## Content Guidelines

### Voice

Use direct, practical, engineering-oriented language.

Prefer:

- reduce operational noise
- surface important work
- preserve evidence
- inspectable tools
- operator-controlled automation
- auditability before magic
- AI-assisted workflows

Avoid:

- AI will solve incidents
- replace your operator
- never wake your team
- fully autonomous production
- magic AI operations
- zero on-call
- engineers who would rather sleep

### Sleep Language

`Good night. Sleep tight.` is allowed as culture and naming story.

It must not be the main homepage claim and must not imply operators avoid responsibility.

Good support phrase:

> A culture note about better context, not a promise to hide problems.

## Page Patterns

### Project Page

Use the same header/footer and tokens.

Recommended sections:

1. Project hero with status badge
2. Problem
3. Approach
4. Architecture or workflow panel
5. Practical value
6. Quickstart / docs
7. GitHub / releases

For kube-insight, emphasize retained evidence, facts, topology, query surfaces, safety filtering, and AI-assisted workflows as one use case.

### Projects Index

Use status groups:

- Active: concrete project name and links
- Early: public project name only if repository exists
- Labs / Planned: direction labels only

Do not list unlaunched project names.

### Notes

Notes should feel like engineering notes, not marketing articles.

Suitable topics:

- operational memory
- Kubernetes evidence
- safe automation
- AI-assisted operations boundaries
- release notes
- design records

## Accessibility

Required:

- All interactive targets at least 44px high.
- Use visible focus rings with accent blue.
- Preserve `prefers-reduced-motion`.
- Do not depend on color alone for status.
- Maintain readable contrast on soft blue backgrounds.
- Avoid horizontal overflow on mobile.
- Keep mobile navigation accessible even when desktop nav is hidden.

Focus style:

```css
a:focus-visible,
button:focus-visible {
  outline: 3px solid rgba(36, 90, 174, 0.92);
  outline-offset: 3px;
}
```

## Implementation Notes

For production:

- Keep tokens in `src/styles/tokens.css`.
- Keep global layout and interaction rules in `src/styles/global.css`.
- Do not rely on Tailwind CDN.
- Keep tokens as the single source of truth.
- Avoid hardcoded colors outside token files and small one-off SVG marks.
- Use shared components for Header, Footer, Button, Card, Badge, SectionHeader, ProjectCard, and SoftPanel.

Suggested files for a real site:

```text
src/styles/tokens.css
src/components/Header.astro
src/components/Footer.astro
src/components/Button.astro
src/components/Card.astro
src/components/Badge.astro
src/components/SectionHeader.astro
src/components/ProjectCard.astro
src/components/SoftPanel.astro
```

## Review Checklist

Before shipping any nowake.ai page, check:

- The page uses the Cloud Index palette.
- The header uses `moon-star` or the official nowake.ai mark.
- The header has no duplicate GitHub menu item when a GitHub button exists.
- The H1 is short and not oversized.
- AI is present as method, not as spectacle.
- Footer is soft blue, not black.
- Cards have 8px radius or less.
- No card is nested inside a decorative card.
- Mobile has no horizontal overflow.
- Interactive elements are at least 44px tall.
- Copy does not imply replacing or avoiding responsible operators.
- Planned work uses direction labels unless a public repo exists.

