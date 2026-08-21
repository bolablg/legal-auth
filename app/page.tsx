import { ProductHome } from "../components/product-home";
import { defaultProduct } from "../lib/products";

export default function Home() {
  return <ProductHome product={defaultProduct} />;
}
