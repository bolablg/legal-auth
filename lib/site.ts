import { platform } from "./platform";

export const site = {
  name: platform.name,
  legalCenterName: platform.legalCenterName,
  tagline: platform.tagline,
  description: platform.description,
  publicUrl: platform.publicUrl,
  supportEmail: platform.supportEmail,
} as const;

export const navigation = [
  { href: "/", label: "Overview" },
  { href: "/products", label: "Products" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/help", label: "Account help" },
] as const;
