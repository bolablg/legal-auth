import { ProductDirectory } from "./product-directory";
import { SiteShell } from "./site-shell";
import { platform } from "../lib/platform";

export function ProductDirectoryPage() {
  return (
    <SiteShell>
      <section className="directory-hero">
        <div className="eyebrow"><span className="eyebrow-dot" /> {platform.name} / Product directory</div>
        <h1>Choose a product.<br /><em>Know its context.</em></h1>
        <p>Start with the application you are evaluating. Its entry keeps the shared BOLABLG.com policies in view while adding the product-specific data, access, and support details you need.</p>
      </section>
      <ProductDirectory />
    </SiteShell>
  );
}
