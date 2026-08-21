import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.publicUrl),
  title: {
    default: "StackBridge — Carry expertise across cloud platforms",
    template: "%s — StackBridge",
  },
  description: site.tagline,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "StackBridge — Carry expertise across cloud platforms",
    description: site.tagline,
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
