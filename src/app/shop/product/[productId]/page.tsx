'use client';

import * as React from "react";
import { use, useState, useMemo } from "react";
import { getProductById, getCategoryById, getProductsByCategory } from "@/lib/data";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Star, ShieldCheck, Truck, RefreshCw, MessageCircle, Ruler, Info } from "lucide-react";
import Link from 'next/link';

type ProductPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = use(params);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = useMemo(() => getProductById(productId), [productId]);

  if (!product) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes.length === 1 ? product.sizes[0] : undefined
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.colors.length === 1 ? product.colors[0] : undefined
  );

  const category = useMemo(() => getCategoryById(product.category), [product.category]);
  const productsInCategory = useMemo(() => 
    getProductsByCategory(product.category)
      .filter((p) => p.id !== product.id)
      .slice(0, 4),
    [product.id, product.category]
  );

  const handleAddToCart = () => {
    if (!product) return;
    if (product.sizes.length > 0 && !selectedSize) {
        toast({ variant: "destructive", title: "Select a size", description: "Please choose your perfect fit before proceeding." });
        return;
    }
    addToCart(product, selectedSize || "", selectedColor || "");
  };

  const handleBuyNow = () => {
    if (!product) return;
    if (product.sizes.length > 0 && !selectedSize) {
        toast({ variant: "destructive", title: "Select a size", description: "Please choose your perfect fit before proceeding." });
        return;
    }
    const phoneNumber = "254106587150";
    let message = `Hello Bee & Dee Concierge, I'd like to order: ${product.name}\nSize: ${selectedSize}\nPrice: ${formatPrice(product.price)}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: product.name }]} className="mb-12" />
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left: Premium Image Gallery */}
          <div className="space-y-10 sticky top-32">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.06)] border border-primary/5 p-6 md:p-12 group">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square relative flex items-center justify-center">
                        <Image
                          src={image.url}
                          alt={product.name}
                          fill
                          className="object-contain p-4 transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-6 h-12 w-12 bg-white/90 backdrop-blur-md border-none shadow-xl text-primary hover:bg-accent transition-all" />
                <CarouselNext className="right-6 h-12 w-12 bg-white/90 backdrop-blur-md border-none shadow-xl text-primary hover:bg-accent transition-all" />
              </Carousel>
            </div>
            <div className="grid grid-cols-4 gap-6">
               {product.images.map((image, idx) => (
                  <button key={idx} className="aspect-square relative rounded-[1.5rem] border bg-white shadow-sm overflow-hidden hover:border-accent/60 transition-all p-3 hover:scale-105">
                      <Image src={image.url} alt="thumbnail" fill className="object-contain p-2" />
                  </button>
               ))}
            </div>
          </div>

          {/* Right: Luxury Product Details */}
          <div className="flex flex-col gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex text-accent gap-0.5">
                   {[...Array(5)].map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-muted-foreground/60 border-l pl-4">Verified Premium (4.9/5)</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary leading-[0.9] tracking-tighter">{product.name}</h1>
              <div className="flex items-baseline gap-6 pt-2">
                <p className="text-5xl font-black text-primary tracking-tighter">{formatPrice(product.price)}</p>
                <p className="text-lg text-muted-foreground/40 line-through font-bold">{formatPrice(product.price + 1500)}</p>
                <span className="bg-accent/10 text-accent text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">In Stock</span>
              </div>
            </div>

            <Separator className="bg-primary/5" />
            
            <div className="space-y-12">
              {product.sizes.length > 0 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <Label className="font-black text-[10px] tracking-[0.3em] uppercase text-primary">Select Your Fit</Label>
                    <button className="flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest group">
                      <Ruler className="h-3 w-3 group-hover:rotate-45 transition-transform"/> 
                      Size Guide
                    </button>
                  </div>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-4">
                    {product.sizes.map((size) => (
                      <div key={size}>
                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size}`}
                          className={cn("flex h-16 w-16 items-center justify-center rounded-[1.5rem] border-2 text-sm font-black transition-all cursor-pointer shadow-sm hover:border-accent/40",
                          selectedSize === size ? 'border-accent bg-accent text-primary shadow-[0_15px_30px_rgba(212,175,55,0.3)]' : 'border-secondary bg-white text-primary/70'
                          )}
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-accent" />
                    <Label className="font-black text-[10px] tracking-[0.3em] uppercase text-primary">Master Craftsmanship</Label>
                  </div>
                  <p className="text-muted-foreground/80 text-lg leading-relaxed max-w-xl italic font-medium">"{product.description}"</p>
              </div>
            </div>

            {/* Elite CTA Container */}
            <div className="flex flex-col gap-5 pt-8">
              <Button size="lg" className="btn-gold h-20 text-[11px] font-black tracking-[0.3em] rounded-[1.5rem] uppercase" onClick={handleAddToCart}>
                ADD TO SHOPPING BAG
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary h-20 rounded-[1.5rem] font-black tracking-[0.15em] uppercase hover:bg-primary hover:text-white transition-all duration-500 group" onClick={handleBuyNow}>
                <MessageCircle className="mr-3 h-5 w-5 transition-transform group-hover:scale-125" />
                SECURE ON WHATSAPP
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 bg-secondary/40 rounded-[2.5rem] px-8 border border-primary/5">
              <div className="flex flex-col items-center text-center gap-3">
                <ShieldCheck className="h-8 w-8 text-accent animate-pulse" />
                <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-70">Authentic Guaranteed</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Truck className="h-8 w-8 text-accent" />
                <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-70">Next Day Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <RefreshCw className="h-8 w-8 text-accent" />
                <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-70">Boutique Return</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curated Recommendations */}
        <div className="mt-48 space-y-20">
          <div className="text-center space-y-4">
              <div className="h-1 w-12 bg-accent mx-auto mb-6"></div>
              <h2 className="text-accent font-black tracking-[0.4em] text-[10px] uppercase">Curated For You</h2>
              <h3 className="text-5xl md:text-8xl font-headline font-bold text-primary tracking-tighter">COMPLETE THE LOOK</h3>
          </div>
          <ProductRecommendations currentProductId={product.id} currentCategory={product.category} />
        </div>

        {productsInCategory.length > 0 && (
          <div className="mt-48 pt-32 border-t border-primary/5 relative">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="space-y-4">
                   <h3 className="text-4xl font-headline font-bold text-primary tracking-tight">MORE IN {category?.name?.toUpperCase()}</h3>
                   <div className="h-2 w-24 bg-accent rounded-full"></div>
                </div>
                <Button variant="link" className="text-accent font-black tracking-[0.3em] uppercase text-[10px] hover:text-primary transition-all p-0" asChild>
                  <Link href={`/shop/${category?.id}`}>BROWSE ENTIRE CATEGORY</Link>
                </Button>
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {productsInCategory.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}