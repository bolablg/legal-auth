# ADR 0001: Separate the shared legal center from product records

- Status: accepted
- Date: 2026-08-20

## Context

The public site was initially rendered as a StackBridge microsite. That made the root homepage and OAuth policy URLs appear to describe only StackBridge, even though the intended owner is BOLABLG.com and the site must support multiple current and future applications.

## Decision

Use a two-layer information architecture:

1. The root layer is the BOLABLG.com Legal & Account Center. It owns the general overview, privacy foundation, terms foundation, account help, and product directory.
2. The product layer is registry-driven under `/products/<slug>/`. Each product may add an overview, data and security notice, privacy notice, terms addendum, and account help.

Global documents describe the shared baseline and explicitly defer product-specific practices to the relevant product record. Product pages link back to the shared documents so users can understand both layers without losing context.

## Consequences

- Google OAuth can use stable general URLs without presenting StackBridge as the owner of every future product.
- New BOLABLG.com applications can be added through configuration and shared components.
- Product owners must keep their data notice aligned with the actual authentication, hosting, storage, analytics, and support providers.
- The legal copy remains a starter template and still requires owner/legal review before production reliance.
