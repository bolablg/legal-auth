# legal-auth

`legal-auth` is a reusable public legal and authentication-support foundation for BOLABLG.com applications. It gives OAuth providers and users a stable, unauthenticated place to find the shared privacy policy, general terms, account guidance, and product-specific notices.

The site is intentionally broader than any one application. StackBridge is the first configured product, but it is represented inside a product directory rather than used as the identity of the legal center.

## Information architecture

The site has two layers:

### Shared BOLABLG.com layer

- `/` — BOLABLG.com Legal & Account Center overview
- `/products` — product directory
- `/privacy` — general BOLABLG.com Privacy Policy foundation
- `/terms` — general BOLABLG.com Terms of Service foundation
- `/help` — shared account and authentication help

The shared pages explain the center's scope and the general model. They do not pretend to describe every application's data flow.

### Product layer

Each configured product gets a consistent public record:

- `/products/<slug>/` — product overview
- `/products/<slug>/data` — product data and security notice
- `/products/<slug>/privacy` — product privacy notice/addendum
- `/products/<slug>/terms` — product terms addendum
- `/products/<slug>/help` — product-specific account help

For the first product, the available routes are under `/products/stackbridge/`. Its live learning workspace is `https://stackbridge.bolablg.com`.

This layering is deliberate: the general documents describe the shared foundation, while each product states what it actually collects, how it uses the information, which authentication provider it uses, and where product support belongs.

## Add another product

Add a new entry to [`lib/products.ts`](./lib/products.ts). A product configuration includes:

- display name, tagline, description, and homepage URL;
- support email and brand accent colors;
- overview hero and path-library content;
- a product data notice with categories, purposes, retention, security, and authentication provider;
- structured product Privacy Policy and Terms content;
- product-specific authentication-help steps.

The shared components and dynamic routes render that configuration. Adding a product does not require duplicating the legal site or adding a new microsite.

The global documents live in [`lib/global-content.ts`](./lib/global-content.ts), while shared platform settings such as the public URL, support address, and authentication-provider wording live in [`lib/platform.ts`](./lib/platform.ts). Keep provider and data-practice statements aligned with the tools actually enabled.

## Authentication boundary

The legal center is public and does not authenticate users. BOLABLG.com product applications use the shared production Clerk instance for registration, sign-in, verification, and identity. The product applications own authorization decisions such as allowlists, access requests, roles, and product data; the legal center only documents the relationship.

`clerk.bolablg.com` is reserved for Clerk's production custom domain, Frontend API, session-management surface, and OAuth callbacks. `legal.bolablg.com` is a separate public Vercel site for policies, account guidance, and product notices. It must not be pointed at Clerk and `clerk.bolablg.com` must not be pointed at Vercel.

Google and GitHub social connections are configured once in the production Clerk instance and can be used by the BOLABLG.com products that share it. Each product still needs the correct production Clerk keys, domain/origin configuration, and request authorization settings. Do not place Clerk secrets, product credentials, database keys, or learner data in this repository.

Keep `clerk.bolablg.com` reserved for Clerk's custom domain, Frontend API, and OAuth callbacks. Never point that hostname to Vercel.

### StackBridge link and deployment boundary

The StackBridge product record links to the production workspace at [`https://stackbridge.bolablg.com`](https://stackbridge.bolablg.com). It intentionally does not link to a Vercel preview URL.

StackBridge uses the shared production Clerk instance in production, while its Vercel Preview deployments use the Clerk development instance. In practical terms, StackBridge must use `pk_test_…`/`sk_test_…` in Vercel Preview and `pk_live_…`/`sk_live_…` in Vercel Production from `main`. The separate `legal-auth` site has no Clerk SDK, no Clerk environment variables, and does not inherit either set of credentials.

The environment split is documented in the StackBridge repository's [`Vercel and Clerk environment boundary`](https://github.com/bolablg/StackBridge/blob/main/docs/deployment/vercel-clerk-environments.md) runbook. Keep the legal center public even when a product requires authentication.

## Google OAuth URLs

The intended public hostname is `https://legal.bolablg.com`:

| Google OAuth field | URL |
| --- | --- |
| Application homepage | `https://legal.bolablg.com/` |
| Privacy policy | `https://legal.bolablg.com/privacy` |
| Terms of service | `https://legal.bolablg.com/terms` |

These are the general BOLABLG.com pages. A product's own page can be linked from the directory and may be used as an additional product-specific reference.

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site is unauthenticated and does not require a database for the public legal content.

Run the checks before opening a pull request:

```bash
npm run lint
npm run build
```

## Deployment and domains

The Vercel project is `legal-auth` in the `bolablg-projects` team. Production should be promoted through `main` after review. The public legal hostname is `legal.bolablg.com`, managed separately in Cloudflare and Vercel; it is intentionally separate from the Clerk production hostname.

When configuring the custom hostname, use the exact CNAME target shown in the Vercel project domain card. In Cloudflare, create a CNAME record for `legal` pointing to that target and use DNS only/grey cloud unless Vercel's current instructions say otherwise. Do not change the `clerk` record.

## Legal and content review

The legal documents are starter templates, not legal advice. Before production use, each product owner should verify the actual legal entity, data flows, hosting/authentication/database providers, retention, contact details, jurisdiction-specific disclosures, and any required cookie or consent experience. Do not present a template as a complete statement of a product's practices until it has been reviewed.

## Relationship to StackBridge

This is an independent project/repository located under the local StackBridge workspace. It does not import dashboard code, Clerk keys, database configuration, or learner data. Keeping the companion site separate lets the public policy surface remain available while a product is private, under maintenance, or being redesigned.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the contribution workflow.

## Branch workflow

- `dev-bola` — active development branch.
- `staging` — integration and preview validation.
- `main` — production deployment branch.

Open a pull request into `staging` after quality checks pass, then promote the reviewed staging commit to `main` for production. GitHub Actions runs lint/build checks and prepares a draft promotion pull request when a `dev-*` branch is pushed.
