import type { Metadata } from "next";
import type { ReactNode } from "react";
import { platform } from "../lib/platform";
import { site } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.publicUrl),
  title: {
    default: `${platform.name} Legal & Account Center`,
    template: `%s — ${platform.name}`,
  },
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${platform.name} Legal & Account Center`,
    description: platform.description,
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
