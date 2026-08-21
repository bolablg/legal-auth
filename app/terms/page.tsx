import type { Metadata } from "next";
import { GlobalLegalDocument } from "../../components/legal-document";

export const metadata: Metadata = { title: "General Terms", description: "The general BOLABLG.com terms foundation and product-specific model." };

export default function TermsPage() {
  return <GlobalLegalDocument type="terms" />;
}
