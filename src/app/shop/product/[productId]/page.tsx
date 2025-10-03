
'use client';
import { getProductById, getCategoryById, getRelatedProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Breadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/product-card";
import { ProductRecommendations } from "@/components/product-recommendations";
import { useCart } from "@/context/cart-context";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    // Since params can be a promise, we handle it here.
    const resolveParams = async () => {
        const resolvedParams = await params;
        setProductId(resolvedParams.productId);
    };
    resolveParams();
  }, [params]);


  useEffect(() => {
    if (productId) {
      const p = getProductById(productId);
      if (!p) {
        notFound();
      }
      setProduct(p);
    }
  }, [productId]);


  if (!product) {
    // You can return a loading state here
    return <div>Loading...</div>;
  }
  
  const category = getCategoryById(product.category);
  const relatedProducts = getRelatedProducts(product);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
  ];
  if (category) {
    breadcrumbItems.push({ label: category.name, href: `/shop/${category.id}` });
  }
  breadcrumbItems.push({ label: product.name });

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Breadcrumb items={breadcrumbItems} className="mb-6" />
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square relative bg-secondary rounded-lg">
                    <Image
                      src={image.url}
                      alt={`${product.name} - view ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                      data-ai-hint={image.hint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-headline font-bold">{product.name}</h1>
          <p className="text-3xl font-bold text-accent">{formatPrice(product.price)}</p>
          <Separator />
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>Add to Cart</Button>
            <Button size="lg" variant="outline" className="flex-1">Buy Now</Button>
          </div>
        </div>
      </div>
      
      <Separator className="my-12" />

      <div>
        <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6">You Might Also Like</h2>
        <ProductRecommendations 
          currentProductId={product.id}
          currentCategory={product.category} 
        />
      </div>

      {relatedProducts.length > 0 && (
        <>
          <Separator className="my-12" />
          <div>
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
