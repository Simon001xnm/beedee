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
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} className="mb-12" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary tracking-tighter">ALL COLLECTIONS</h1>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
          <span className="text-[10px] md:text-xs text-muted-foreground font-black tracking-[0.4em] uppercase border-b-2 border-accent pb-2">{allProducts.length} PREMIUM ITEMS</span>
        </div>
        
        {/* Optimized grid for clarity on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {allProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}