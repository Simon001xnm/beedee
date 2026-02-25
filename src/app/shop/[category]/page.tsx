import { getProductsByCategory, getCategoryById } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }
  return {
    title: `Shop ${category.name}`,
    description: `Browse our collection of ${category.name}.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  const products = getProductsByCategory(categoryId);

  if (!category) {
    notFound();
  }
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: category.name }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <Breadcrumb items={breadcrumbItems} className="mb-12" />
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary tracking-tighter uppercase">{category.name}</h1>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>
        <span className="text-[10px] md:text-xs text-muted-foreground font-black tracking-[0.4em] uppercase border-b-2 border-accent pb-2">{products.length} ITEMS FOUND</span>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-40 bg-secondary/20 rounded-[3rem]">
          <p className="text-xl font-headline font-bold text-primary/40 tracking-widest uppercase">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}