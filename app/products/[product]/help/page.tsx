import { notFound } from "next/navigation";
import { AuthHelpPage } from "../../../../components/auth-help-page";
import { getProduct, products } from "../../../../lib/products";

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export default async function ProductHelpPage({ params }: { params: Promise<{ product: string }> }) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <AuthHelpPage product={product} />;
}
