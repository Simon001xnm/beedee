'use client';

import * as React from "react";
import { use, useState, useMemo } from "react";
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
import { MessageCircle, ShoppingBag, Ruler, ShieldCheck, Truck, RefreshCw, Star } from "lucide-react";

type ProductPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = use(params);
  const { addToCart } = useCart();
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

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Collections', href: '/shop' }, { label: product.name }]} className="mb-8 lg:mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Gallery - Large Responsive Imagery */}
          <div className="space-y-4 md:space-y-8">
            <div className="aspect-[4/5] bg-gray-50 border border-gray-100 overflow-hidden rounded-xl">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-[4/5] w-full">
                        <Image src={image.url} alt={product.name} fill className="object-cover" priority={idx === 0} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-primary border-none" />
                  <CarouselNext className="right-4 bg-white/80 hover:bg-white text-primary border-none" />
                </div>
              </Carousel>
            </div>
            
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="aspect-square bg-gray-50 border border-gray-100 relative cursor-pointer hover:border-primary transition-all duration-300 overflow-hidden rounded-lg">
                  <Image src={img.url} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info - Editorial Hierarchy */}
          <div className="lg:sticky lg:top-32 space-y-8 lg:space-y-12">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary/60">{category?.name}</span>
                <Badge variant="outline" className="rounded-full border-primary/20 text-primary text-[9px] uppercase font-black tracking-widest px-3 py-0.5">In Stock</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-tight uppercase">{product.name}</h1>
              
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl lg:text-4xl font-black text-primary tracking-tighter">{formatPrice(product.price)}</span>
                  <span className="text-lg text-gray-400 line-through font-bold">{formatPrice(product.price + 1000)}</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span className="text-xs font-black tracking-widest text-accent-foreground">4.9 / 5.0</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:space-y-10">
              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">
                    <span>Select Your Fit</span>
                    <button className="flex items-center gap-2 text-accent hover:underline transition-all"><Ruler className="h-4 w-4" /> Size Guide</button>
                  </div>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-4 sm:grid-cols-5 gap-2 lg:gap-3">
                    {product.sizes.map((size) => (
                      <div key={size} className="relative">
                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size}`}
                          className={cn(
                            "flex h-12 lg:h-14 items-center justify-center border-2 text-[11px] font-black transition-all cursor-pointer rounded-lg",
                            selectedSize === size ? "border-primary bg-primary text-white" : "border-gray-100 bg-white text-primary/60 hover:border-accent"
                          )}
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Narrative */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-primary/40 uppercase tracking-[0.4em]">The Narrative</h4>
                <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button className="bg-primary hover:bg-primary/90 text-white h-14 w-full text-xs font-black uppercase tracking-widest rounded-xl shadow-lg" onClick={() => addToCart(product, selectedSize || "", "")}>
                <ShoppingBag className="h-5 w-5 mr-3" /> Add To Shopping Bag
              </Button>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5 h-14 w-full text-xs font-black uppercase tracking-widest rounded-xl" onClick={handleWhatsAppOrder}>
                <MessageCircle className="h-5 w-5 mr-3 text-green-600" /> Order Via WhatsApp
              </Button>
            </div>

            {/* Concierge Benefits - Flexible Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 lg:pt-12 border-t border-gray-100">
              <div className="flex sm:flex-col items-center gap-3 sm:gap-4 text-center">
                <div className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/40 text-left sm:text-center">Guaranteed Authentic</span>
              </div>
              <div className="flex sm:flex-col items-center gap-3 sm:gap-4 text-center sm:border-x sm:border-gray-100">
                <div className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center">
                    <Truck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/40 text-left sm:text-center">Express Delivery</span>
              </div>
              <div className="flex sm:flex-col items-center gap-3 sm:gap-4 text-center">
                <div className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/40 text-left sm:text-center">Premium Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
