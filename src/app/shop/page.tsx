import { getProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "Shop All Products",
  description: "Browse our entire collection of shoes and handbags.",
};

export default function ShopPage() {
  const allProducts = getProducts();

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} className="mb-6" />
        <div className="flex items-baseline justify-between mb-8">
          <h1 className="text-3xl font-headline font-bold text-primary">All Collections</h1>
          <span className="text-xs text-muted-foreground font-bold tracking-widest uppercase">{allProducts.length} Items</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {allProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
