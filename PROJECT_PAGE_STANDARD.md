# Project Page Standard

This document defines how nowake.ai project pages should be planned, written, and laid out.

Project pages must share the nowake.ai visual language from `DESIGN.md`, but they must not share one fixed layout template. Every project needs a page structure shaped by its own product problem, proof, operating model, and user workflow.

## Core Rule

A project page has two equal jobs:

1. Make the project worth caring about within the first viewport.
2. Explain how it works with enough concrete detail that engineers can trust it.

Do not let architecture, internals, roadmap, or generic open-source language bury the project value proposition.

## Required Page Strategy

Before designing a project page, write down:

- Primary user: who needs this project and in what operational situation.
- Primary pain: what becomes expensive, slow, unsafe, noisy, or impossible without it.
- Primary promise: the simplest accurate sentence that explains the value.
- Proof type: performance numbers, cost model, topology, safety boundary, compatibility matrix, real use cases, or workflow examples.
- Differentiator: what this project does differently from the default Kubernetes/cloud-native path.
- Limits: what should not be over-claimed.

The page layout should follow these answers, not a generic sequence copied from another project page.

## Above The Fold

The first viewport should include:

- Project name and status.
- One short positioning line.
- A concrete hero paragraph that explains the missing system, broken workflow, or expensive default behavior the project addresses.
- Two or three high-signal proof points near the top.
- GitHub and docs actions.
- One project-specific visual, such as a sequence flow, topology diagram, cost consolidation diagram, query path, or compatibility view.

Hero copy should avoid vague claims like "better operations" or "AI-powered infrastructure" unless immediately grounded in a real workflow.

## Differentiated Layouts

Project pages should use distinct layouts based on the product shape:

- Evidence/history products should emphasize retained proof, query paths, performance, use cases, and storage modes.
- Cost/consolidation products should emphasize before/after topology, resource count reduction, provider limits, and migration safety.
- Security/access products should emphasize blast radius, policy inheritance, auditability, and least privilege flows.
- Automation products should emphasize repeated manual work eliminated, control boundaries, rollback behavior, and operator approval points.
- Developer tools should emphasize time-to-first-use, ergonomics, examples, and integration surfaces.

Never copy a full section sequence from another project unless the project has the same product shape.

## Recommended Section Types

Use only the sections that fit the project:

- `Hero`: positioning, proof points, primary visual.
- `Why it matters`: contrast the default painful path with the project path.
- `Proof`: performance benchmark, cost estimate, provider quota impact, safety model, or validation matrix.
- `Use cases`: one or more realistic workflows, with symptom, default limitation, project evidence/path, and outcome.
- `How it works`: architecture, topology, sequence, or control loop diagram.
- `Operating model`: modes, provider compatibility, install path, RBAC/security boundary, GitOps boundary, or runtime tradeoffs.
- `Current limits`: known provider scope, WIP components, deferred validations, or non-goals.
- `Next steps`: repository, docs, quickstart, and contribution path.

Do not include every section by default. Dense pages are acceptable when the project needs proof, but repeated explanation is not.

## Copy Rules

Use concrete nouns and workflows:

- Prefer: "retained Kubernetes resource evidence", "fewer provider L4 load balancers", "read-only SQL/MCP surface", "port claims persisted in ConfigMaps".
- Avoid: "smarter infra", "next-generation platform", "AI magic", "seamless transformation".

Bold only the few phrases that carry the main value. Too much emphasis weakens the page.

If a capability is planned, mark it as future or roadmap language. Do not describe planned behavior as shipped.

## Tone By Product Ambition

The tone should match the project's role in the nowake.ai portfolio:

- Platform infrastructure projects with large future surface area may use more forceful, memorable copy, as long as the claims stay grounded in concrete workflows and proof. These pages should make the reader feel the size of the missing layer or future platform opportunity.
- Narrow operational tools should use plainer copy. Their pages should win by clarity: the exact user, exact scenario, exact constraint, exact benefit, and exact provider/runtime limits should be obvious.
- Originality matters, but it should be explained through the operational problem, not through self-congratulatory language.

## Visual Rules

A project visual must explain something real:

- Flow diagrams need visible direction, nodes, and transitions.
- Topology diagrams need enough labels to show ownership and data/control paths.
- Tables should be used when comparison is the point.
- Cards should not merely restate marketing claims; they should group capabilities, evidence, or decisions.

Use the shared Cloud Index palette and typography, but tune composition to the project domain.

## Proof Standards

Every key claim should be paired with one of:

- Measured number and scope.
- Provider/platform constraint.
- Documented workflow.
- Architecture reason.
- Explicit roadmap qualifier.

For example:

- kube-insight performance claims should say they are agent-style retained-evidence workflows, not universal `kubectl` replacements.
- svc-lb-mux cost/quota claims should explain that many LoadBalancer Services can share one provider-managed L4 load balancer, while provider behavior and limits still matter.

## Current Project Guidance

### kube-insight

Primary page shape: retained evidence and AIOps infrastructure product.

Audience and tone:

- kube-insight is a foundational AIOps component with a large future surface area. Its page can be more eye-catching and forceful than smaller utility pages.
- The copy should frame kube-insight as the missing Kubernetes infrastructure history layer: logs, metrics, and traces already have history systems, but infrastructure state often collapses into the current apiserver snapshot.
- The page should make the future platform value feel large, while staying concrete about what exists today.

The page should emphasize:

- Missing history layer for Kubernetes infrastructure state.
- Retained versions, facts, edges, and observations.
- Human- and agent-friendly query surfaces.
- Performance measured as investigation workflows.
- Storage/operating modes: SQLite, chDB, ClickHouse.
- Use cases where current cluster state is insufficient.
- Sanitization, filters, extractors, and future Kubernetes RBAC inheritance.

### svc-lb-mux

Primary page shape: cloud LoadBalancer consolidation and provider quota relief product.

Audience and tone:

- svc-lb-mux serves a narrower, highly operational need: teams that must expose many TCP/UDP services through provider L4 load balancers and care about cost, quota, IP, forwarding rule, or port pressure.
- The likely direct users are platform/SRE/operations engineers. The copy should be plain, specific, and scenario-driven.
- Originality should be shown through the Kubernetes-native mux/channel model and provider-aware operating details, not through broad platform claims.

The page should emphasize:

- Fewer cloud load balancers for compatible TCP/UDP Services.
- Lower recurring cloud LB cost surface.
- Less forwarding rule, IP, port, and provider quota pressure.
- Familiar Kubernetes Service workflow preserved through channel Services.
- Provider-specific behavior and limits, especially GKE's 100-port mux cap.
- Port ownership, automatic allocation, status mirroring, and GitOps boundaries.
- Migration and compatibility examples, not only controller internals.
