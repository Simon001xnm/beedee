
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
import { Star, ShieldCheck, Truck, RefreshCw, MessageCircle, Ruler, Info, ChevronRight } from "lucide-react";
import Link from 'next/link';

type ProductPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  const unwrappedParams = use(params);
  const productId = unwrappedParams.productId;
  
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
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: product.name }]} className="mb-8 md:mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: IMAGE GALLERY (7/12 width) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#f9f9f9] rounded-[2rem] overflow-hidden border border-black/5 p-4 md:p-10">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square relative flex items-center justify-center">
                        <Image
                          src={image.url}
                          alt={product.name}
                          fill
                          className="object-contain p-4 transition-transform duration-1000"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="left-4 h-12 w-12 bg-white/80 border-none shadow-md text-primary hover:bg-accent" />
                  <CarouselNext className="right-4 h-12 w-12 bg-white/80 border-none shadow-md text-primary hover:bg-accent" />
                </div>
              </Carousel>
            </div>
            
            {/* THUMBNAILS GRID */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
               {product.images.map((image, idx) => (
                  <div key={idx} className="aspect-square relative rounded-xl border bg-white overflow-hidden p-2">
                      <Image src={image.url} alt="thumbnail" fill className="object-contain p-1" />
                  </div>
               ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:sticky md:top-24">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent">{category?.name}</span>
                <span className="h-1 w-1 rounded-full bg-black/10"></span>
                <div className="flex text-accent gap-0.5">
                   {[...Array(5)].map((_,i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tighter leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 pt-2">
                <span className="text-3xl font-black text-primary tracking-tighter">{formatPrice(product.price)}</span>
                <span className="text-lg text-black/20 line-through font-bold">{formatPrice(product.price + 1200)}</span>
                <Badge className="bg-green-50 text-green-700 border-green-100 text-[9px] font-black px-3 py-1 uppercase tracking-widest ml-2">Available</Badge>
              </div>
            </div>

            <Separator className="bg-black/5" />
            
            <div className="space-y-10">
              {/* SIZE SELECTION */}
              {product.sizes.length > 0 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <Label className="font-black text-[10px] tracking-[0.3em] uppercase text-primary">Choose Size</Label>
                    <button className="flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest hover:underline">
                      <Ruler className="h-3 w-3"/> Size Guide
                    </button>
                  </div>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <div key={size}>
                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size}`}
                          className={cn("flex h-14 w-14 items-center justify-center rounded-xl border-2 text-sm font-black transition-all cursor-pointer shadow-sm",
                          selectedSize === size ? 'border-accent bg-accent text-primary' : 'border-black/5 bg-white text-primary/70'
                          )}
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* DESCRIPTION */}
              <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-accent" />
                    <Label className="font-black text-[10px] tracking-[0.3em] uppercase text-primary">Product Details</Label>
                  </div>
                  <p className="text-black/60 text-base leading-relaxed font-medium italic">"{product.description}"</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 pt-4">
              <Button size="lg" className="btn-gold h-16 text-[11px] font-black tracking-[0.3em] rounded-2xl uppercase w-full" onClick={handleAddToCart}>
                ADD TO SHOPPING BAG
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary h-16 rounded-2xl font-black tracking-[0.15em] uppercase hover:bg-primary hover:text-white transition-all w-full" onClick={handleBuyNow}>
                <MessageCircle className="mr-3 h-5 w-5" />
                ORDER ON WHATSAPP
              </Button>
            </div>

            {/* TRUST BADGES GRID - FIXED OVERLAP */}
            <div className="grid grid-cols-3 gap-2 py-8 bg-[#fdfdfd] rounded-2xl border border-black/5 mt-4">
              <div className="flex flex-col items-center text-center gap-2 px-1">
                <ShieldCheck className="h-6 w-6 text-accent" />
                <span className="text-[8px] font-black tracking-[0.1em] uppercase opacity-60 leading-tight">100%<br/>AUTHENTIC</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 px-1 border-x border-black/5">
                <Truck className="h-6 w-6 text-accent" />
                <span className="text-[8px] font-black tracking-[0.1em] uppercase opacity-60 leading-tight">FAST<br/>DELIVERY</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 px-1">
                <RefreshCw className="h-6 w-6 text-accent" />
                <span className="text-[8px] font-black tracking-[0.1em] uppercase opacity-60 leading-tight">EASY<br/>RETURNS</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* RECOMMENDATIONS SECTION */}
        <div className="mt-24 md:mt-40 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-accent font-black tracking-[0.5em] text-[10px] uppercase">Tailored Picks</h2>
              <h3 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter">COMPLETE YOUR LOOK</h3>
            </div>
            <Button variant="outline" className="rounded-full border-black/10 font-bold px-8" asChild>
              <Link href="/shop">VIEW ALL <ChevronRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </div>
          <ProductRecommendations currentProductId={product.id} currentCategory={product.category} />
        </div>

        {/* MORE IN CATEGORY */}
        {productsInCategory.length > 0 && (
          <div className="mt-24 md:mt-40 pt-16 md:pt-24 border-t border-black/5">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="space-y-3">
                   <h3 className="text-3xl font-headline font-bold text-primary">MORE IN {category?.name?.toUpperCase()}</h3>
                   <div className="h-1.5 w-16 bg-accent rounded-full"></div>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
