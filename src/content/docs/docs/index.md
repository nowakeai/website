---
title: nowake.ai Docs
description: Documentation entry point for nowake.ai infrastructure tools.
project: nowake-ai
category: overview
audience: platform-engineer
status: preview
last_verified: 2026-05-28
source_repo: nowakeai/website
source_path: DOCS_SITE_PLAN.md
sidebar:
  order: 1
---

This documentation site collects public, task-oriented documentation for nowake.ai projects while keeping each project repository as the source of truth.

## Projects

[kube-insight](/docs/kube-insight/) is an AIOps infrastructure component for retained Kubernetes evidence: sanitized history, facts, edges, observations, an embedded Web UI, and query surfaces for humans and agents.

[svc-lb-mux](/docs/svc-lb-mux/) is an operations-first Kubernetes controller that lets multiple application-facing `LoadBalancer` Services share one provider-managed Layer 4 load balancer, including channel-driven external-dns aggregation.

## Getting Started

Start with the project overview that matches the system you are evaluating:

- Use [kube-insight](/docs/kube-insight/) when you need retained Kubernetes state for investigation, automation, or agent workflows.
- Use [svc-lb-mux](/docs/svc-lb-mux/) when cloud provider load balancer count, cost, or port management is becoming operationally painful.

## Operations

The docs prioritize install paths, validation commands, GitOps guidance, provider limits, troubleshooting flows, and realistic expected output.

## Security

Public docs should state trust boundaries, sanitization behavior, permissions, sensitive data handling, and current gaps near the commands or configuration they affect.

## Agent-friendly Docs

Agent-oriented pages should include stable nouns, schemas, commands, failure signals, and expected outputs so future agents can reason from the same operational evidence as human operators.

## Source Model

Project-specific docs remain canonical in each project repository. The website keeps those repositories as submodules under `vendor/`, and `npm run sync:docs` copies only the explicitly listed public docs from `docs.sources.json` into Starlight content before local dev, CI checks, and production builds.
