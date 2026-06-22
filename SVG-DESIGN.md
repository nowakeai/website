# SVG Design Guide

This guide defines the shared SVG diagram language for nowake.ai project pages,
docs, and technical explainers. Use it with `DESIGN.md`; this file only covers
architecture diagrams, flow diagrams, topology maps, and animated technical
graphics.

## Purpose

SVG diagrams should make the product architecture visible before copy has to
explain it. They are not decorative illustrations. A good nowake.ai diagram
shows real components, ownership boundaries, data paths, control paths, failure
or rollback paths, and the operating tradeoff a user must understand.

Use handcrafted SVG for hero-critical diagrams instead of Mermaid screenshots,
HTML box diagrams, or static images. Mermaid is still acceptable inside docs for
source-maintained low-fidelity diagrams, but public project pages should use
SVG when the diagram affects product positioning.

## Design Principles

- Show the real topology. Prefer concrete nouns such as `private subnet`,
  `route table`, `agent`, `DynamoDB lease`, `controller`, `evidence store`, and
  `provider load balancer`.
- Separate planes. Data plane, control plane, storage plane, and human/operator
  actions must use distinct line styles.
- Keep value and mechanism together. Cost, speed, quota, or risk claims can
  appear near the diagram, but the diagram itself must still show how the
  system works.
- Avoid fake complexity. Do not add extra nodes, clouds, or lines that do not
  map to product behavior.
- Stay readable at 360px width. If labels cannot fit on mobile, simplify the
  diagram or move details into the adjacent text.

## Visual Tokens

Map diagram colors to the site token system. Inline SVG should use CSS custom
properties so project pages inherit the current theme.

```css
--svg-bg: var(--color-surface);
--svg-bg-soft: var(--color-surface-soft);
--svg-surface: #ffffff;
--svg-ink: var(--color-text);
--svg-muted: var(--color-text-muted);
--svg-border: var(--color-border-strong);
--svg-border-soft: var(--color-border);
--svg-accent: var(--color-accent);
--svg-signal: var(--color-signal);
--svg-warn: var(--color-warn);
--svg-data: #2563eb;
--svg-control: #10845b;
--svg-risk: #b76a00;
--svg-neutral: #7b8493;
```

Use color as reinforcement, not as the only encoding. Pair color with labels,
legend text, stroke style, or arrow shape.

## Typography

- Use `Geist` for component labels and short descriptions.
- Use `IBM Plex Mono` for protocol names, resource IDs, metrics, region names,
  route targets, and code-like labels.
- Do not use negative letter spacing.
- Prefer 12-16px labels in SVG viewBox coordinates.
- Keep node labels to one or two short lines. Move explanatory copy outside the
  SVG when it becomes paragraph text.

## Layout

- Use a stable `viewBox`; do not hardcode `width` or `height` on inline SVG.
- Use a 16px or 24px internal grid for nodes and lanes.
- Use `rx="8"` or less for infrastructure nodes unless the element is a
  circular status indicator.
- Group nodes by ownership boundary: `AWS account`, `cluster`, `VPC`,
  `public subnet`, `private subnet`, `operator`, `repository`, or `control
  store`.
- Keep arrows orthogonal or gently curved. Avoid tangled diagonal lines.
- Reserve the top-left or bottom-left for a compact legend when line styles are
  not obvious.

## Line Styles

- Data plane: solid `--svg-data`, medium stroke, arrow marker.
- Control plane: dashed `--svg-control`, medium stroke, arrow marker.
- Storage or durable state: solid `--svg-accent`, thinner stroke.
- Risk, rollback, fallback, or failure path: dashed `--svg-risk`.
- Background grouping boundaries: thin `--svg-border-soft`.

## Animation

Animation is allowed when it clarifies flow. It must be subtle and must never be
required to understand the diagram.

- Use CSS animation on inline SVG for page-integrated diagrams.
- Animate `opacity`, `transform`, or `stroke-dashoffset` first; avoid expensive
  path morphing on complex diagrams.
- Use a short flow pulse for active data or control paths.
- Respect `prefers-reduced-motion: reduce` and disable animation there.
- Do not use looping animation on more than two or three paths in one diagram.

## Interaction

Most project-page SVGs should be readable without interaction. When interaction
is useful:

- Add `<title>` inside focusable or hoverable node groups.
- Use `tabindex="0"` on interactive groups and provide a visible focus style.
- Keep hover effects to stroke, fill, opacity, or a small translate transform.
- Put deeper explanations in adjacent HTML, not hidden-only tooltips.

## Accessibility

Every meaningful SVG diagram must include:

```html
<svg role="img" aria-labelledby="diagram-title diagram-desc" viewBox="0 0 ...">
  <title id="diagram-title">Short diagram title</title>
  <desc id="diagram-desc">Plain-language summary of the architecture.</desc>
</svg>
```

For complex diagrams, also provide nearby text that lists the core path in
reading order. Do not rely on color alone to distinguish line types.

## File Strategy

- Keep first-use project hero diagrams inline in the Astro page while the design
  is still being refined.
- Move repeated diagram primitives into `src/components/diagrams/` once two or
  more pages use the same node, lane, legend, marker, or animation pattern.
- Store standalone reusable assets under `src/assets/diagrams/` only when the
  same SVG must be embedded outside Astro.
- Do not export diagrams as PNG unless a social preview or external platform
  requires raster output.

## Migration Plan

1. BetterNAT: replace the hero proof panel with an AWS egress architecture SVG
   and convert remaining page diagrams away from HTML boxes where useful.
2. svc-lb-mux: create a provider load-balancer, multiplexer, and backend-service
   topology diagram showing port/IP/quota pressure.
3. kube-insight: create an agent-to-evidence-store flow diagram showing retained
   evidence, query paths, and AI/operator consumption.
4. Docs pages: replace high-value Mermaid or prose-only diagrams with SVG only
   when the diagram is stable enough to maintain by hand.

## Review Checklist

- The diagram explains the product mechanism, not just its benefit.
- Data, control, and state paths are visually distinct.
- Labels fit on mobile and desktop.
- The SVG has `role`, `title`, and `desc`.
- Animation is optional, subtle, and reduced-motion safe.
- Styling uses site tokens or documented SVG tokens.
- The diagram can be maintained by editing coordinates and labels directly.
