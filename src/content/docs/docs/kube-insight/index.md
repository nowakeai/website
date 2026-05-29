---
title: kube-insight
description: Retained Kubernetes evidence for human operators, scripts, and AIOps agents.
project: kube-insight
category: overview
audience: platform-engineer
status: preview
last_verified: 2026-05-29
source_repo: nowakeai/kube-insight
source_path: docs/README.md
agent_friendly: true
sidebar:
  order: 1
---

`kube-insight` preserves useful Kubernetes infrastructure history so operators and agents can investigate what changed, what existed before, and how resources relate over time.

Use this section for retained evidence concepts, the data model, facts catalog, ingestion and extraction behavior, storage modes, performance validation, sanitization, the embedded Web UI, MCP/API service mode, and agent workflows.

## Start Here

- [Getting Started](/docs/kube-insight/getting-started/)
- [Built-in Web UI Agent](/docs/kube-insight/guides/builtin-webui-agent/)
- [External Agent Skill](/docs/kube-insight/guides/external-agent-skill/)
- [Agent SQL Workflows](/docs/kube-insight/guides/agent-sql-workflows/)
- [Configuration](/docs/kube-insight/operations/configuration/)
- [Troubleshooting Workflows](/docs/kube-insight/operations/troubleshooting-workflows/)

## Evidence And Cases

- [Real-World Cases](/docs/kube-insight/guides/real-world-cases/)
- [Validated Troubleshooting Scenarios](/docs/kube-insight/operations/validated-troubleshooting-scenarios/)
- [Service-Mux History Case Report](/docs/kube-insight/operations/service-mux-history-case-report/)
- [Facts Catalog](/docs/kube-insight/concepts/facts-catalog/)
- [Performance Validation](/docs/kube-insight/operations/performance-validation/)

## Architecture And Security

- [System Architecture](/docs/kube-insight/architecture/system-architecture/)
- [Technology Stack](/docs/kube-insight/architecture/technology-stack/)
- [Kubernetes RBAC Inheritance](/docs/kube-insight/security/kubernetes-rbac-inheritance/)
- [Agent SQL RBAC Filtering](/docs/kube-insight/security/agent-rbac-sql-filtering/)
- [Roadmap](/docs/kube-insight/roadmap/)

## Source Boundary

This overview is owned by the website. The other pages in this section are generated from the pinned `vendor/kube-insight` submodule using `docs.sources.json`, so the project repository remains the documentation source of truth.
