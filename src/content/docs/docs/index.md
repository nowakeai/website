---
title: nowake.ai Docs
description: Documentation entry point for nowake.ai infrastructure tools.
project: nowake-ai
category: overview
audience: platform-engineer
status: preview
last_verified: 2026-05-29
source_repo: nowakeai/website
source_path: DOCS_SITE_PLAN.md
sidebar:
  order: 1
---

This documentation site collects public, task-oriented documentation for nowake.ai projects while keeping each project repository as the source of truth.

## Projects

[kube-insight](/docs/kube-insight/) is an AIOps infrastructure component for retained Kubernetes evidence: sanitized history, facts, edges, observations, an embedded Web UI, and query surfaces for humans and agents.

[svc-lb-mux](/docs/svc-lb-mux/) is an operations-first Kubernetes controller that lets multiple application-facing `LoadBalancer` Services share one provider-managed Layer 4 load balancer, including channel-driven external-dns aggregation.

[BetterNAT](/docs/betternat/) is a self-owned, observable egress gateway for high-volume AWS private subnet workloads where NAT Gateway processing fees become a visible cost problem.

## Getting Started

Start with the project overview that matches the system you are evaluating:

- Use [kube-insight](/docs/kube-insight/) when you need retained Kubernetes state for investigation, automation, or agent workflows.
- Use [svc-lb-mux](/docs/svc-lb-mux/) when cloud provider load balancer count, cost, or port management is becoming operationally painful.
- Use [BetterNAT](/docs/betternat/) when private subnet workloads move enough public internet traffic that managed NAT processing fees deserve an explicit cost and operations tradeoff.

## Agent And UI Workflows

kube-insight now publishes both agent paths:

- [Built-in Web UI Agent](/docs/kube-insight/guides/builtin-webui-agent/) for running the agent loop inside kube-insight with server-side credentials.
- [External Agent Skill](/docs/kube-insight/guides/external-agent-skill/) for connecting Codex, Claude, or another MCP-capable agent to the evidence service.
- [Agent SQL Workflows](/docs/kube-insight/guides/agent-sql-workflows/) for schema-first retained-evidence investigations.

## Operations

The docs prioritize install paths, validation commands, GitOps guidance, provider limits, troubleshooting flows, and realistic expected output.

Key kube-insight operations pages now include [Configuration](/docs/kube-insight/operations/configuration/), [Processing Model](/docs/kube-insight/operations/processing-model/), [Troubleshooting Workflows](/docs/kube-insight/operations/troubleshooting-workflows/), [Validated Troubleshooting Scenarios](/docs/kube-insight/operations/validated-troubleshooting-scenarios/), and the [Service-Mux History Case Report](/docs/kube-insight/operations/service-mux-history-case-report/).

svc-lb-mux operations docs include [GitOps](/docs/svc-lb-mux/operations/gitops/), [Troubleshooting](/docs/svc-lb-mux/operations/troubleshooting/), and [Pressure Testing](/docs/svc-lb-mux/operations/pressure-testing/).

BetterNAT operations docs include [Observability](/docs/betternat/operations/observability/), [Operations Guide](/docs/betternat/operations/operations-guide/), [Rollback](/docs/betternat/operations/rollback/), [Failure Modes](/docs/betternat/operations/failure-modes/), and [Current Limits](/docs/betternat/roadmap/).

## Security

Public docs should state trust boundaries, sanitization behavior, permissions, sensitive data handling, and current gaps near the commands or configuration they affect.

kube-insight security docs include current [Sanitization And Retention](/docs/kube-insight/security/sanitization-and-retention/) behavior plus roadmap design notes for [Kubernetes RBAC Inheritance](/docs/kube-insight/security/kubernetes-rbac-inheritance/) and [Agent SQL RBAC Filtering](/docs/kube-insight/security/agent-rbac-sql-filtering/).

BetterNAT security docs include [IAM Policy](/docs/betternat/security/iam-policy/) and [Security Hardening](/docs/betternat/security/security-hardening/) for the alpha AWS appliance model.

## Source Model

Project-specific docs remain canonical in each project repository. The website keeps those repositories as submodules under `vendor/`, and `npm run sync:docs` copies only the explicitly listed public docs from `docs.sources.json` into Starlight content before local dev, CI checks, and production builds.
