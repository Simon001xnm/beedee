import { getProducts, getCategoryById } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "Shop All Products",
  description: "Browse our entire collection of shoes and handbags.",
};

export default function ShopPage() {
  const allProducts = getProducts();

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />
      <h1 className="text-4xl font-headline font-bold my-6">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
