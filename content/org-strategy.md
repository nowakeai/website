# nowake.ai Organization Strategy

## Positioning

nowake.ai is an open-source technical lab for AI-native operations and practical cloud-native infrastructure tools.

The organization builds tools that make production systems easier to understand, operate, and improve. AI matters to the long-term route, but the organization should not be presented as an AI SaaS company. The stronger framing is open, inspectable infrastructure work: evidence, automation, auditability, reducing operational noise across alerts, manual maintenance, access, safety, capacity, and recovery.

## Core Narrative

Production operations often starts from incomplete context: the system changed, evidence moved on, and engineers need to reconstruct what happened from scattered tools.

nowake.ai explores a better operating model:

- Keep useful operational evidence close to the systems that produce it.
- Turn infrastructure state and history into inspectable context.
- Remove bounded, repetitive operational work with Kubernetes-native tools.
- Reduce operational noise across alerts, manual maintenance, access, safety, capacity, and recovery so important work is easier to identify.
- Keep automation operator-controlled, least-privilege, and auditable.
- Treat AI as assistance over clear data and boundaries, not magic.

## One-Line Summary

nowake.ai builds open-source tools that reduce operational noise and surface the work that matters.

## Website Hero Direction

Primary English:

> Open-source tools that reduce operational noise and surface the work that matters.

Supporting English:

> nowake.ai uses AI-assisted workflows and automation to help teams cut through alerts, manual maintenance, access reviews, capacity work, and recovery tasks so teams can preserve evidence and focus on what truly needs attention.

Primary Chinese:

> 用开源工具降低运维噪声，让真正重要的工作浮出水面。

Supporting Chinese:

> nowake.ai 通过 AI-assisted workflows 和自动化技术，帮助团队从告警、手工维护、访问审计、容量管理和恢复任务中识别重点，保留证据，并把精力集中在真正重要的事情上。

## Tone

The tone should be calm, technically credible, and lightly emotional.

Use language that respects operators and SREs as accountable owners of production systems. The promise is not to make infrastructure quiet by hiding problems. The promise is to reduce operational noise across alerts, manual maintenance, access, safety, capacity, and recovery; preserve evidence; and make important work easier to identify and reason about.

Use:

- open-source
- infrastructure
- operations
- Kubernetes
- cloud-native
- AI-assisted
- AI-native as a long-term direction
- evidence
- automation
- auditability
- operator control
- operational noise reduction
- important work over busywork
- focus on meaningful work

Avoid overusing:

- AI agents as the main homepage story
- alerting as the whole category
- sleeping as a literal marketing promise
- fully autonomous operations
- replacing operators
- magic AI language
- unmeasurable AI performance claims
- generic SaaS phrasing

## Project Map

### Active Projects

#### kube-insight

kube-insight is the current flagship project.

It captures sanitized Kubernetes list/watch history, extracts facts, changes, and topology, and exposes query surfaces for investigation. It should be described primarily as a Kubernetes evidence and operational memory layer. AI-assisted workflows are an important use case, but not the only story.

Strategic role:

- Retained evidence for Kubernetes investigations.
- Queryable operational memory.
- Safer read surfaces for humans, scripts, and AI-assisted tools.
- Foundation for future context-aware operations.

#### svc-lb-mux

svc-lb-mux is a Kubernetes controller that lets many application-facing `LoadBalancer` Services share one provider-managed Layer 4 load balancer.

Strategic role:

- Reduces cloud load balancer count, quota pressure, provisioning time, and recurring cost.
- Keeps the familiar Kubernetes Service workflow.
- Demonstrates nowake.ai's practical focus on removing infrastructure friction, not only AI workflows.

### Labs / Planned Directions

Do not list unlaunched project names on the homepage. Use directions instead.

#### Alert Intelligence

AI-assisted alert and notification handling that learns from historical operational decisions and escalates with context.

#### Access And Audit

Temporary infrastructure access, audit trails, and operation reports for safer production work.

#### Capacity Automation

Predictive and policy-driven management of infrastructure capacity, especially Kubernetes persistent volumes.

#### Dependency Recovery

Kubernetes-native recovery patterns for known workload dependency relationships.

## Strategic Pillars

### Evidence

Production infrastructure needs durable evidence beyond current state. Tools should retain useful history and expose it through inspectable interfaces.

### Clarity

Operations should reduce guesswork. Facts, topology, events, ownership, and time windows should be available in forms humans can verify.

### Automation

The first automation targets should be repetitive, bounded, and operationally boring: cost reduction, capacity scaling, known dependency recovery, noise reduction, and evidence collection.

### Signal

Infrastructure should not bury important work under operational noise. Tools should reduce noise from alerts, manual maintenance, access reviews, capacity work, and recovery tasks so the work that deserves attention surfaces earlier and with enough context to act responsibly.

### Safety

Automation and AI-assisted workflows should use least-privilege interfaces, read-only paths where possible, explicit permissions for mutations, and auditable decisions.

### Culture

“Good night. Sleep tight.” is part of the nowake.ai culture and naming story. It should mean less operational noise, better context, fewer low-value interruptions, and more focus for responsible teams, not avoiding ownership.

## Product Family Story

nowake.ai starts with Kubernetes because Kubernetes is where many production teams already feel the cost of missing context, broad permissions, repeated commands, cloud resource friction, and fragile manual workflows.

kube-insight gives systems retained evidence.

svc-lb-mux removes a concrete infrastructure inefficiency.

Future work should connect evidence, automation, access, auditability, capacity, and alert intelligence into a broader AI-native operations route without making unsupported AI promises.
