import type { Metadata } from "next";
import { LegalDocument } from "../../components/legal-document";
import { defaultProduct } from "../../lib/products";

export const metadata: Metadata = { title: "Privacy Policy", description: "The StackBridge starter privacy policy." };

export default function PrivacyPage() {
  return <LegalDocument product={defaultProduct} type="privacy" />;
}
