# Website Copy Deck

This file collects reusable copy for the nowake.ai website.

The current direction is org-first, open-source, and technical. AI should be present as part of the route, but not visually or verbally dominant.

## Organization Headline Options

### Recommended

Open-source tools that reduce operational noise and surface the work that matters.

### Alternatives

Build production systems that surface the work teams need to see.

Practical open-source infrastructure tools for cloud-native operations.

A technical lab for less operational noise, clearer evidence, and safer automation.

## Organization Subheadline

nowake.ai uses AI-assisted workflows and automation to help teams cut through alerts, manual maintenance, access reviews, capacity work, and recovery tasks so teams can preserve evidence and focus on what truly needs attention.

## Chinese Pair

用开源工具降低运维噪声，让真正重要的工作浮出水面。

nowake.ai 通过 AI-assisted workflows 和自动化技术，帮助团队从告警、手工维护、访问审计、容量管理和恢复任务中识别重点，保留证据，并把精力集中在真正重要的事情上。

## Short Organization Description

nowake.ai is an open-source technical lab building practical infrastructure operations tools for Kubernetes and cloud-native systems.

## Long Organization Description

nowake.ai is an open-source organization exploring AI-native operations through practical infrastructure tools.

We work on retained evidence, Kubernetes-native automation, access and auditability, and alert intelligence. The goal is not opaque autonomy. The goal is to reduce operational noise across alerts, manual maintenance, access, safety, capacity, and recovery, while providing tools that engineers can inspect, trust, and control.

## Home: Why nowake.ai

Production systems keep changing, but operational context is often temporary. Events expire, resources move, ownership is scattered, and repeated work still needs careful human judgment.

nowake.ai builds open-source tools for that gap: keeping useful evidence, reducing noise across alerts and manual operations, surfacing important work, and removing bounded repetition without hiding control from engineers.

## Home: What We Build

### Infrastructure Evidence

Tools that retain operational history and make past system state easier to query and verify.

### Kubernetes-Native Automation

Controllers and workflows that reduce repeated infrastructure work while preserving familiar Kubernetes patterns.

### Access And Auditability

Directions for safer temporary access, operation records, and accountable production changes.

### Alert Intelligence

AI-assisted alert handling that should reduce notification noise, learn from context and history, and surface the cases that deserve attention without becoming a black box.

## Active Project Copy

### kube-insight

Kubernetes evidence and operational memory.

kube-insight captures sanitized list/watch history, extracts facts, changes, and topology, and exposes query surfaces for investigation.

### svc-lb-mux

Kubernetes-native LoadBalancer consolidation.

svc-lb-mux lets many application-facing `LoadBalancer` Services share one provider-managed Layer 4 load balancer, reducing cloud load balancer count, quota pressure, provisioning time, and recurring cost.

## Labs / Planned Direction Copy

Use direction labels instead of unlaunched project names on the homepage.

### Alert Intelligence

Assist alert triage and notification routing by reducing notification noise and surfacing meaningful cases with history, feedback, and operational context.

### Access And Audit

Make temporary infrastructure access easier to grant, review, and explain.

### Capacity Automation

Help infrastructure capacity changes become more predictable and less manual.

### Dependency Recovery

Encode known workload dependency recovery patterns into Kubernetes-native automation.

## kube-insight Page Copy

kube-insight is the current flagship project from nowake.ai.

It records Kubernetes evidence once, shapes it for investigation, and serves it through inspectable query surfaces. Instead of relying only on current cluster state, kube-insight keeps retained proof, extracted facts, topology edges, and time windows that can be used by engineers, scripts, and AI-assisted tools.

## Open Source Principles

Open source first.

Evidence before automation.

Operator control before autonomy.

Least privilege before convenience.

Auditability before magic.

Boring reliability over AI spectacle.

## CTA Copy

Learn more about nowake.ai

Explore kube-insight

View Projects

Read the Docs

Open GitHub

Read Notes

## Footer / Culture Copy

Good night. Sleep tight.

For nowake.ai, that is a culture note, not an automation promise: less operational noise, better context, fewer low-value interruptions, and tools that help responsible teams focus on what truly matters.

## Footer Copy

### Footer Mission

Open-source tools for reducing operational noise across Kubernetes and cloud-native infrastructure.

### Footer Columns

Projects:

- kube-insight
- svc-lb-mux
- Projects
- Roadmap

Resources:

- Docs
- Notes
- GitHub
- Releases

Principles:

- Evidence before automation
- Operator control
- Least privilege
- Auditability before magic

Labs:

- Alert intelligence
- Access and audit
- Capacity automation
- Dependency recovery

### Footer Culture

Good night. Sleep tight.

Not a promise to hide problems. A culture note about less operational noise, better context, and more focus on the work that matters.

### Footer Meta

Built in the open by nowake.ai.

Apache-2.0 where applicable.

## Phrases To Avoid

Avoid phrases that imply operators are avoiding responsibility:

- for engineers who would rather sleep
- never wake up your team
- replace your on-call engineer
- fully autonomous production operations

Avoid AI claims that are too broad or hard to verify:

- AI will solve your incidents
- autonomous infrastructure without humans
- magic AI operations
- zero on-call

Prefer phrases that emphasize accountable operations:

- reduce low-value interruption
- preserve evidence
- inspectable tools
- operator-controlled automation
- safer AI-assisted workflows
- operational noise reduction
- important work over busywork
- focus on meaningful work
