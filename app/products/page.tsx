import type { Metadata } from "next";
import { ProductDirectoryPage } from "../../components/product-directory-page";

export const metadata: Metadata = { title: "Product Directory", description: "Browse BOLABLG.com applications and their product-specific legal and account context." };

export default function ProductsPage() {
  return <ProductDirectoryPage />;
}
