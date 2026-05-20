# nowake.ai Website

This directory contains the source of truth for the nowake.ai organization website.

The site will be deployed from this repository, and both planning documents and page implementation should live under `website/`.

## Current Stage

We are building the first public version of the nowake.ai organization website.

The implementation is an Astro static site under `src/`, using the visual language defined in `DESIGN.md`.

## Documents

- [Design Guide](DESIGN.md): nowake.ai visual language, design tokens, components, and implementation rules.
- [Organization Strategy](content/org-strategy.md): nowake.ai positioning, project map, and long-term direction.
- [Site Plan](content/site-plan.md): website goals, information architecture, hosting direction, and implementation phases.
- [Copy Deck](content/copy-deck.md): reusable homepage and project copy.

## Development

```bash
npm install
npm run dev
```

Build for static hosting:

```bash
npm run build
```

## Working Principle

nowake.ai should not be presented as a narrow alerting product or as a way for operators to avoid responsibility.

The organization should be framed as an open-source effort to build AI-native infrastructure operations tools for serious production teams: tools that preserve memory, expose context, support safe automation, and help humans and AI agents collaborate with clear boundaries.
