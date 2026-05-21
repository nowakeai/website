---
title: svc-lb-mux
description: Kubernetes LoadBalancer consolidation for operations teams that need shared Layer 4 exposure.
project: svc-lb-mux
category: overview
audience: platform-engineer
status: preview
last_verified: 2026-05-20
source_repo: nowakeai/svc-lb-mux
source_path: docs/README.md
sidebar:
  order: 1
---

`svc-lb-mux` lets many application-facing `LoadBalancer` Services share one provider-managed Layer 4 load balancer while preserving Kubernetes-native service ownership.

Use this section for install and validation commands, mux and channel service concepts, provider-specific notes, GitOps guidance, troubleshooting, and pressure-test scope.

## Current Public Entry Points

- [Getting Started](/docs/svc-lb-mux/getting-started/)
- [Mux And Channel Services](/docs/svc-lb-mux/concepts/mux-and-channel-services/)
- [GKE Provider Notes](/docs/svc-lb-mux/providers/gke/)
- [Project page](/projects/svc-lb-mux/)
- [GitHub repository](https://github.com/nowakeai/svc-lb-mux)

## Source Boundary

This overview is owned by the website. The other pages in this section are generated from the pinned `vendor/svc-lb-mux` submodule using `docs.sources.json`, so the project repository remains the documentation source of truth.
