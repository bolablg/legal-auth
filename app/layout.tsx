import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultProduct } from "../lib/products";
import { site } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.publicUrl),
  title: {
    default: `${defaultProduct.name} — ${defaultProduct.tagline}`,
    template: `%s — ${defaultProduct.name}`,
  },
  description: site.tagline,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${defaultProduct.name} — ${defaultProduct.tagline}`,
    description: defaultProduct.tagline,
    type: "website",
    url: site.publicUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
