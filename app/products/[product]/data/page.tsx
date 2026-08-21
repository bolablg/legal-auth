import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDataNotice } from "../../../../components/product-data-notice";
import { getProduct, products } from "../../../../lib/products";

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product: slug } = await params;
  const product = getProduct(slug);
  return product ? { title: `${product.name} Data & Security`, description: product.dataNotice.intro } : {};
}

export default async function ProductDataPage({ params }: { params: Promise<{ product: string }> }) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductDataNotice product={product} />;
}
