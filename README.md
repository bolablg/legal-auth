# legal-auth

`legal-auth` is a reusable public legal and authentication-support companion site for BOLABLG products. It gives an external OAuth application a stable, unauthenticated homepage, Privacy Policy, Terms of Service, and account-help surface without coupling those pages to an authenticated product dashboard.

StackBridge is the first configured product. The public site is designed to support additional products later through a small product registry rather than a new microsite for every application.

## Routes

The default product (currently StackBridge) is available at the root routes used by OAuth providers:

- `/` — product overview and public homepage
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/help` — authentication and account help

Every configured product also gets explicit reusable routes:

- `/products/<slug>/`
- `/products/<slug>/privacy`
- `/products/<slug>/terms`
- `/products/<slug>/help`

For StackBridge, the equivalent product-scoped route is `/products/stackbridge/`.

## Add another product

Add a new entry to [`lib/products.ts`](./lib/products.ts). A product configuration includes:

- display name, tagline, description, and homepage URL;
- support email;
- brand accent colors;
- homepage hero and path-library content;
- structured Privacy Policy and Terms of Service content;
- authentication-help steps.

The shared page components render that configuration for the product-scoped routes. The root routes remain aliases for the `defaultProduct`, currently `stackbridge`. This keeps the Google OAuth URLs stable while allowing another application to use the same legal/authentication foundation.

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site is unauthenticated and does not require a database.

Run the checks before opening a pull request:

```bash
npm run lint
npm run build
```

## Deployment and domains

The proposed production hostname is `legal.bolablg.com`:

| Google OAuth field | URL |
| --- | --- |
| Application homepage | `https://legal.bolablg.com/` |
| Privacy policy | `https://legal.bolablg.com/privacy` |
| Terms of service | `https://legal.bolablg.com/terms` |

Keep `clerk.bolablg.com` reserved for Clerk’s custom domain, Frontend API, and OAuth callbacks. Never point that hostname to Vercel or replace its DNS. The StackBridge product homepage remains `https://stackbridge.bolablg.com`.

## Content and legal review

The legal documents are starter templates, not legal advice. Before production use, each product owner should verify actual data flows, hosting/authentication/database providers, retention, contact details, jurisdiction-specific disclosures, and any required cookie or consent experience. Do not present the template as a complete statement of a product’s data practices until it has been reviewed.

## Relationship to StackBridge

This is an independent project/repository located under the local StackBridge workspace. It does not import dashboard code, Clerk keys, database configuration, or learner data. Keeping the companion site separate limits the blast radius of public-content changes and lets the OAuth/legal pages remain available while a product is private or under maintenance.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the contribution workflow.

## Branch workflow

- `dev-bola` — active development branch.
- `staging` — integration and preview validation.
- `main` — production deployment branch.

Open a pull request into `staging` after the quality checks pass, then promote the reviewed staging commit to `main` for production. Vercel is connected to the repository; its first deployment created the project’s production URL, and future non-production branch pushes can receive previews through the Git integration.
