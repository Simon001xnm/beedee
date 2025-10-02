import { getProductsByCategory, getCategoryById } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryById(params.category);
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

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.category);
  const products = getProductsByCategory(params.category);

  if (!category) {
    notFound();
  }
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: category.name }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-4xl font-headline font-bold my-6">{category.name}</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}
