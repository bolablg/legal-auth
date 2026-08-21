import type { Metadata } from "next";
import { LegalDocument } from "../../components/legal-document";
import { defaultProduct } from "../../lib/products";

export const metadata: Metadata = { title: "Terms of Service", description: "The StackBridge starter terms of service." };

export default function TermsPage() {
  return <LegalDocument product={defaultProduct} type="terms" />;
}
