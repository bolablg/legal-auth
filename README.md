# StackBridge public site

The public, unauthenticated brand and legal site for [StackBridge](https://stackbridge.bolablg.com). It gives the external Google OAuth application a stable homepage, Privacy Policy, and Terms of Service while keeping the authenticated learning workspace in the main StackBridge repository.

## Pages

- `/` — product overview and current learning-path library
- `/privacy` — starter Privacy Policy, clearly marked for owner/legal review
- `/terms` — starter Terms of Service, clearly marked for owner/legal review

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site has no authentication and does not require a database.

## Deployment and domains

This project is intended to become the Vercel project behind `legal.bolablg.com`:

| Google OAuth field | URL |
| --- | --- |
| Application homepage | `https://legal.bolablg.com/` |
| Privacy policy | `https://legal.bolablg.com/privacy` |
| Terms of service | `https://legal.bolablg.com/terms` |

Keep `clerk.bolablg.com` reserved for Clerk’s custom domain, Frontend API, and OAuth callbacks. Do not point that hostname to this Vercel project. The public site links to the authenticated workspace at `https://stackbridge.bolablg.com`.

## Relationship to StackBridge

This is intentionally an independent project/repository under the local StackBridge workspace. It does not import the dashboard code, Clerk keys, database configuration, or learner data. Keeping the site separate limits the blast radius of public content changes and lets the OAuth/legal pages remain available even while the workspace is private or under maintenance.

## Content review

The legal pages are starter templates, not legal advice. Before production use, the owner should verify the actual data flows, hosting/authentication/database providers, retention, contact details, jurisdiction-specific disclosures, and any required cookie or consent experience.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the contribution workflow.
