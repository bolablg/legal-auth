import type { Metadata } from "next";
import { GlobalHelpPage } from "../../components/global-help-page";

export const metadata: Metadata = { title: "Account Help", description: "Shared account and authentication guidance for BOLABLG.com applications." };

export default function HelpPage() {
  return <GlobalHelpPage />;
}
