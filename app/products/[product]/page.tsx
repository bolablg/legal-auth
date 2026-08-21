import { notFound } from "next/navigation";
import { ProductHome } from "../../../components/product-home";
import { getProduct, products } from "../../../lib/products";

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductHome product={product} />;
}
