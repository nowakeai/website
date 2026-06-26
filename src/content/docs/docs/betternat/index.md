---
title: BetterNAT
description: Self-hosted, highly available, observable egress gateway for AWS and GCP private workloads.
project: betternat
category: overview
audience: platform-engineer
status: preview
last_verified: 2026-06-26
source_repo: nowakeai/betternat
source_path: docs/README.md
sidebar:
  order: 1
---

BetterNAT is a self-hosted, highly available, observable egress gateway for private workloads where managed NAT processing fees, route ownership, and failover visibility matter.

For v0.2, start with Terraform modules:

- AWS: `source = "nowakeai/betternat/aws"`, `version = "~> 0.2"`
- GCP: `source = "nowakeai/betternat/google"`, `version = "~> 0.2"`

The provider resources still exist, but they are advanced primitives: `betternat_aws_gateway` and `betternat_gcp_gateway`.

Use this section for the module-first install path, cost model, existing VPC adoption, configuration, IAM, security hardening, observability, day-2 operations, rollback, failure modes, and current limits.

## Start Here

- [Getting Started](/docs/betternat/getting-started/)
- [GCP Quick Start](/docs/betternat/getting-started-gcp/)
- [Cost Model](/docs/betternat/concepts/cost-model/)
- [Existing VPC Install](/docs/betternat/guides/existing-vpc-install/)
- [Configuration](/docs/betternat/reference/configuration/)
- [Project page](/projects/betternat/)
- [GitHub repository](https://github.com/nowakeai/betternat)

## Operate And Secure

- [Observability](/docs/betternat/operations/observability/)
- [Operations Guide](/docs/betternat/operations/operations-guide/)
- [Rollback](/docs/betternat/operations/rollback/)
- [Failure Modes](/docs/betternat/operations/failure-modes/)
- [IAM Policy](/docs/betternat/security/iam-policy/)
- [Security Hardening](/docs/betternat/security/security-hardening/)
- [Current Limits](/docs/betternat/roadmap/)

## Source Boundary

This overview is owned by the website. The other pages in this section are generated from the pinned `vendor/betternat` submodule using `docs.sources.json`, so the project repository remains the documentation source of truth.
