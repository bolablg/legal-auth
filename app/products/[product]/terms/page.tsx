import { notFound } from "next/navigation";
import { LegalDocument } from "../../../../components/legal-document";
import { getProduct, products } from "../../../../lib/products";

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export default async function ProductTermsPage({ params }: { params: Promise<{ product: string }> }) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <LegalDocument product={product} type="terms" />;
}
