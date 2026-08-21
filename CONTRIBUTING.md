# Contributing to legal-auth

Thank you for helping improve this public legal and authentication foundation. Keep changes focused, accessible, product-configurable, and easy to review. The root site serves BOLABLG.com broadly; StackBridge is only the first configured product.

## Setup

1. Install Node.js 20.9 or newer.
2. Run `npm ci`.
3. Copy `.env.example` to `.env.local` if you need to override the linked workspace URL.
4. Run `npm run dev`.

## Checks

Run these before opening a pull request:

```bash
npm run lint
npm run build
```

## Pull requests

- Use a short feature branch based on `dev-bola`; promote reviewed work through `staging` and then `main`.
- Explain the user-facing change and include screenshots for visual changes.
- Keep the public site unauthenticated; do not add product dashboard secrets or user data.
- Treat Clerk production as an external shared identity service. Do not add Clerk credentials or change `clerk.bolablg.com` DNS from this repository.
- Keep general policy language separate from product-specific data practices.
- Do not change the legal pages to make claims about providers, tracking, retention, or rights unless those claims have been verified by the owner.
- When adding a product, update the registry, data notice, product routes, and documentation together.
- Check keyboard navigation, visible focus states, reduced-motion behavior, and mobile layouts.

## Publishing

The site is intended for Vercel. Production should use the `main` branch after review. The proposed custom domain is `legal.bolablg.com`; `clerk.bolablg.com` must remain assigned to Clerk. Add new products through `lib/products.ts` and verify their product-scoped routes before publishing. The legal documents are starter templates and require owner/legal review before production reliance.
