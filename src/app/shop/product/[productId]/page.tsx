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
import { MessageCircle, ShoppingBag, Ruler, Info, ShieldCheck, Truck, RefreshCw } from "lucide-react";

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
      <div className="container mx-auto px-4 py-8 md:py-24">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Collections', href: '/shop' }, { label: product.name }]} className="mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Gallery - Large Responsive Imagery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-white border border-primary/5 flex items-center justify-center overflow-hidden">
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
                  <CarouselPrevious className="left-4 bg-background/50 border-none" />
                  <CarouselNext className="right-4 bg-background/50 border-none" />
                </div>
              </Carousel>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="aspect-square bg-white border border-primary/10 relative p-2 cursor-pointer hover:border-accent transition-colors">
                  <Image src={img.url} alt="thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info - Editorial Hierarchy */}
          <div className="lg:sticky lg:top-32 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent">{category?.name}</span>
                <Badge variant="outline" className="rounded-none border-primary/20 text-primary text-[9px] uppercase font-bold tracking-widest">In Stock</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter leading-none">{product.name}</h1>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-primary tracking-tighter">{formatPrice(product.price)}</span>
                <span className="text-lg text-primary/20 line-through">{formatPrice(product.price + 1500)}</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
                    <span>Select Your Fit</span>
                    <button className="flex items-center gap-1 text-accent hover:underline"><Ruler className="h-3.5 w-3.5" /> Size Guide</button>
                  </div>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <div key={size}>
                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size}`}
                          className={cn(
                            "flex h-12 w-16 items-center justify-center border-2 text-xs font-bold transition-all cursor-pointer",
                            selectedSize === size ? "border-primary bg-primary text-white" : "border-primary/10 bg-white text-primary/60"
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
                <div className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest">
                  <Info className="h-3.5 w-3.5" /> The Narrative
                </div>
                <p className="text-primary/60 text-lg leading-relaxed font-medium italic">"{product.description}"</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <Button className="btn-luxury h-16 w-full text-sm" onClick={() => addToCart(product, selectedSize || "", "")}>
                <ShoppingBag className="h-5 w-5" /> Add To Shopping Bag
              </Button>
              <Button variant="outline" className="h-16 w-full border-2 border-primary text-primary font-bold uppercase tracking-widest rounded-none hover:bg-primary hover:text-white transition-all" onClick={handleWhatsAppOrder}>
                <MessageCircle className="h-5 w-5 mr-2" /> Order Via WhatsApp
              </Button>
            </div>

            {/* Concierge Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-primary/5">
              <div className="text-center space-y-3">
                <ShieldCheck className="h-6 w-6 text-accent mx-auto" />
                <span className="block text-[9px] font-bold uppercase tracking-widest opacity-60">Guaranteed Authentic</span>
              </div>
              <div className="text-center space-y-3 border-x border-primary/5">
                <Truck className="h-6 w-6 text-accent mx-auto" />
                <span className="block text-[9px] font-bold uppercase tracking-widest opacity-60">Global Shipping</span>
              </div>
              <div className="text-center space-y-3">
                <RefreshCw className="h-6 w-6 text-accent mx-auto" />
                <span className="block text-[9px] font-bold uppercase tracking-widest opacity-60">Elite Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
