import type { Metadata } from "next";
import { GlobalLegalDocument } from "../../components/legal-document";

export const metadata: Metadata = { title: "General Privacy", description: "The general BOLABLG.com privacy foundation and product notice model." };

export default function PrivacyPage() {
  return <GlobalLegalDocument type="privacy" />;
}
