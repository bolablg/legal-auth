import type { Metadata } from "next";
import { AuthHelpPage } from "../../components/auth-help-page";
import { defaultProduct } from "../../lib/products";

export const metadata: Metadata = { title: "Account Help", description: "Account and authentication help for StackBridge." };

export default function HelpPage() {
  return <AuthHelpPage product={defaultProduct} />;
}
