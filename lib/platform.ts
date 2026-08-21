export const platform = {
  name: "BOLABLG.com",
  legalCenterName: "Legal & account center",
  tagline: "A clear home for policies, account help, and product notices.",
  description: "The public legal and authentication companion for BOLABLG.com applications.",
  publicUrl: process.env.NEXT_PUBLIC_PUBLIC_SITE_URL ?? "https://legal.bolablg.com",
  supportEmail: "bolajibalogoun@gmail.com",
  authProvider: "Clerk",
  brand: { accent: "#718779", accentDark: "#4f6658" },
} as const;
