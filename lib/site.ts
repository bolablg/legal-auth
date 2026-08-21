export const site = {
  name: "StackBridge",
  tagline: "Carry your data and AI expertise across cloud platforms.",
  publicUrl: process.env.NEXT_PUBLIC_PUBLIC_SITE_URL ?? "https://legal.bolablg.com",
  appUrl: process.env.NEXT_PUBLIC_STACKBRIDGE_URL ?? "https://stackbridge.bolablg.com",
  contactEmail: "bolajibalogoun@gmail.com",
} as const;

export const navigation = [
  { href: "/", label: "Overview" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
