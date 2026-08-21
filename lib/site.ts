export const site = {
  name: "legal-auth",
  tagline: "A reusable public legal and authentication companion site.",
  publicUrl: process.env.NEXT_PUBLIC_PUBLIC_SITE_URL ?? "https://legal.bolablg.com",
} as const;

export const navigation = [
  { href: "/", label: "Overview" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/help", label: "Account help" },
] as const;
