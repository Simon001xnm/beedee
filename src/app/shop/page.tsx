import { getProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Breadcrumb } from "@/components/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Shop All Products",
  description: "Browse our entire collection of shoes and handbags.",
};

type ShopPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || '1', 10);
  const itemsPerPage = 12; // Adjusted for 4-column layout

  const allProducts = getProducts();
  const totalItems = allProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white min-h-screen">
      <div className="container-market py-12 md:py-20">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} className="mb-12" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-8xl font-headline font-bold text-primary tracking-tighter uppercase leading-none">ALL COLLECTIONS</h1>
            <div className="h-1.5 w-24 md:w-32 bg-accent rounded-full"></div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] md:text-sm text-muted-foreground font-black tracking-[0.4em] uppercase border-b-2 border-accent pb-3">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} PREMIUM ITEMS
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 mb-20">
          {paginatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Navigation */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 pt-12 border-t border-gray-100">
            <Button
              variant="outline"
              size="icon"
              asChild
              disabled={currentPage <= 1}
              className="rounded-full h-12 w-12 border-primary/10 hover:border-accent hover:text-accent disabled:opacity-30"
            >
              <Link href={`/shop?page=${currentPage - 1}`}>
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous Page</span>
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={cn(
                    "h-12 w-12 rounded-full font-black text-[11px] tracking-widest",
                    currentPage === pageNum 
                      ? "bg-primary text-white shadow-xl" 
                      : "text-primary/40 hover:text-accent hover:bg-accent/5"
                  )}
                >
                  <Link href={`/shop?page=${pageNum}`}>
                    {pageNum}
                  </Link>
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              asChild
              disabled={currentPage >= totalPages}
              className="rounded-full h-12 w-12 border-primary/10 hover:border-accent hover:text-accent disabled:opacity-30"
            >
              <Link href={`/shop?page=${currentPage + 1}`}>
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next Page</span>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
