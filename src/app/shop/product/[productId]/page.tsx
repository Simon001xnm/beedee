'use client';

import * as React from "react";
import { use, useState, useMemo, useEffect } from "react";
import { getProductById, getCategoryById } from "@/lib/data";
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
import { formatPrice, cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/breadcrumb";
import { useCart } from "@/context/cart-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ShoppingBag, Ruler, ShieldCheck, Truck, RefreshCw, Star, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductRecommendations } from "@/components/product-recommendations";

type ProductPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = use(params);
  const { addToCart } = useCart();
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const product = useMemo(() => getProductById(productId), [productId]);

  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes.length === 1 ? product.sizes[0] : undefined
  );

  const category = useMemo(() => getCategoryById(product.category), [product.category]);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "254106587150";
    const message = `Concierge, I'd like to order: ${product.name}\nSize: ${selectedSize || 'Not selected'}\nPrice: ${formatPrice(product.price)}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <Skeleton className="h-8 w-64 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <Skeleton className="aspect-[4/5] rounded-xl" />
          <div className="space-y-8">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container-market py-12 lg:py-24">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Collections', href: '/shop' }, { label: product.name }]} className="mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Visual Showcase */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="aspect-[4/5] bg-[#f8f8f8] border border-black/[0.03] overflow-hidden rounded-[2rem] relative shadow-2xl">
              <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                  {product.images.map((image, idx) => (
                    <CarouselItem key={idx} className="h-full">
                      <div className="relative aspect-[4/5] w-full h-full">
                        <Image src={image.url} alt={product.name} fill className="object-cover" priority={idx === 0} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/80 hover:bg-white text-primary border-none shadow-xl" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/80 hover:bg-white text-primary border-none shadow-xl" />
                </div>
              </Carousel>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#f8f8f8] border border-black/[0.03] relative cursor-pointer hover:border-accent transition-all duration-300 overflow-hidden rounded-2xl group shadow-md">
                  <Image src={img.url} alt={`${product.name} view ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Concierge Editorial Details */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent border-b border-accent pb-1">{category?.name}</span>
                <Badge className="bg-primary/5 text-primary border-none text-[9px] font-black tracking-widest px-3 py-1 uppercase">In Reserve</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-primary tracking-tighter leading-none uppercase">{product.name}</h1>
              
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl lg:text-6xl font-black text-primary tracking-tighter">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through font-bold opacity-40">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-black/[0.03]">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="text-[11px] font-black tracking-widest text-primary">4.9 RATING</span>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Tailored Fitment</span>
                    <button className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2 hover:underline">
                      <Ruler className="h-4 w-4" /> Dimension Guide
                    </button>
                  </div>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {product.sizes.map((size) => (
                      <div key={size} className="relative">
                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size}`}
                          className={cn(
                            "flex h-14 items-center justify-center border-2 text-[12px] font-black transition-all cursor-pointer rounded-2xl",
                            selectedSize === size 
                              ? "border-primary bg-primary text-white shadow-xl scale-105" 
                              : "border-black/[0.03] bg-white text-primary/40 hover:border-accent hover:text-accent"
                          )}
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* The Narrative */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">The Heritage</h4>
                <p className="text-primary/70 text-lg md:text-xl leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white h-20 w-full text-xs font-black uppercase tracking-[0.3em] rounded-[1.5rem] shadow-2xl transition-all hover:scale-[1.02] active:scale-95 group" 
                onClick={() => addToCart(product, selectedSize || "", "")}
              >
                <ShoppingBag className="h-5 w-5 mr-4" /> 
                Add To Shopping Bag 
                <ArrowRight className="h-4 w-4 ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </Button>
              <Button 
                variant="outline" 
                className="border-black/[0.1] hover:bg-secondary h-20 w-full text-xs font-black uppercase tracking-[0.3em] rounded-[1.5rem] transition-all" 
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle className="h-5 w-5 mr-4 text-green-600" /> WhatsApp Concierge
              </Button>
            </div>

            {/* Premium Trust Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-black/[0.05]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-12 w-12 bg-secondary/50 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">Verified Authentic</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center border-black/[0.05] sm:border-x">
                <div className="h-12 w-12 bg-secondary/50 rounded-2xl flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">Priority Dispatch</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-12 w-12 bg-secondary/50 rounded-2xl flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">7-Day Exchange</span>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Section: Recommendations */}
        <section className="mt-32">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.6em]">Recommended Pairings</span>
                <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-none">Complete the aesthetic</h2>
              </div>
           </div>
           <ProductRecommendations currentProductId={product.id} currentCategory={product.category} />
        </section>
      </div>
    </div>
  );
}
