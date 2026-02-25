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
      <div className="container mx-auto px-4 py-8 md:py-32">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Collections', href: '/shop' }, { label: product.name }]} className="mb-12 md:mb-20" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
          
          {/* Gallery - Large Responsive Imagery */}
          <div className="space-y-8">
            <div className="aspect-[4/5] bg-muted border border-white/5 overflow-hidden">
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
                  <CarouselPrevious className="left-8 bg-white/10 hover:bg-white text-white hover:text-background border-none h-14 w-14" />
                  <CarouselNext className="right-8 bg-white/10 hover:bg-white text-white hover:text-background border-none h-14 w-14" />
                </div>
              </Carousel>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="aspect-square bg-muted border border-white/10 relative cursor-pointer hover:border-primary transition-all duration-500 overflow-hidden">
                  <Image src={img.url} alt="thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info - Editorial Hierarchy */}
          <div className="lg:sticky lg:top-40 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary">{category?.name}</span>
                <Badge variant="outline" className="rounded-none border-white/20 text-white text-[9px] uppercase font-black tracking-widest px-3 py-1">In Stock</Badge>
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none">{product.name}</h1>
              
              <div className="flex items-center gap-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-black text-primary tracking-tighter">{formatPrice(product.price)}</span>
                  <span className="text-xl text-white/20 line-through font-bold">{formatPrice(product.price + 1200)}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-xs font-black tracking-widest">4.9 / 5.0</span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
                    <span>Select Your Fit</span>
                    <button className="flex items-center gap-2 text-primary hover:text-white transition-colors"><Ruler className="h-4 w-4" /> Size Guide</button>
                  </div>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-4">
                    {product.sizes.map((size) => (
                      <div key={size} className="flex-1 min-w-[80px]">
                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size}`}
                          className={cn(
                            "flex h-14 items-center justify-center border-2 text-xs font-black transition-all cursor-pointer",
                            selectedSize === size ? "border-primary bg-primary text-background" : "border-white/10 bg-transparent text-white/60 hover:border-white"
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
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">The Heritage</h4>
                <p className="text-white/60 text-xl leading-relaxed font-medium italic">"{product.description}"</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <Button className="btn-gold h-20 w-full text-sm" onClick={() => addToCart(product, selectedSize || "", "")}>
                <ShoppingBag className="h-6 w-6" /> Add To Shopping Bag
              </Button>
              <Button variant="outline" className="btn-outline-white h-20 w-full" onClick={handleWhatsAppOrder}>
                <MessageCircle className="h-6 w-6 mr-3" /> Order Via WhatsApp
              </Button>
            </div>

            {/* Concierge Benefits */}
            <div className="grid grid-cols-3 gap-6 pt-16 border-t border-white/5">
              <div className="text-center space-y-4">
                <div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-white/40">Guaranteed Authentic</span>
              </div>
              <div className="text-center space-y-4 border-x border-white/5">
                <div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                    <Truck className="h-6 w-6 text-primary" />
                </div>
                <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-white/40">Global Express</span>
              </div>
              <div className="text-center space-y-4">
                <div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                    <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-white/40">Premium Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}