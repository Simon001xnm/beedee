'use client';
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
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Star, ShieldCheck, Truck, RefreshCw, MessageCircle } from "lucide-react";
import Link from 'next/link';

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [productId, setProductId] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();

  useEffect(() => {
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
      if (p?.sizes?.length === 1) {
        setSelectedSize(p.sizes[0]);
      }
      if (p?.colors?.length === 1) {
        setSelectedColor(p.colors[0]);
      }
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
        <p className="font-headline font-bold text-primary tracking-widest text-lg">EXPERIENCING LUXURY...</p>
      </div>
    );
  }
  
  const category = getCategoryById(product.category);
  const productsInCategory = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!product) return;
    if (product.sizes.length > 0 && !selectedSize) {
        toast({ variant: "destructive", title: "Please select a size first." });
        return;
    }
    addToCart(product, selectedSize || "", selectedColor || "");
  };

  const handleBuyNow = () => {
    if (!product) return;
    if (product.sizes.length > 0 && !selectedSize) {
        toast({ variant: "destructive", title: "Please select a size first." });
        return;
    }
    const phoneNumber = "254106587150";
    let message = `Hello Bee & Dee, I'd like to order: ${product.name}\nSize: ${selectedSize}\nPrice: ${formatPrice(product.price)}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: product.name }]} className="mb-8 md:mb-12" />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-primary/5 p-4 md:p-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square relative flex items-center justify-center">
                        <Image
                          src={image.url}
                          alt={product.name}
                          fill
                          className="object-contain p-2"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/80 border-none shadow-md" />
                <CarouselNext className="right-4 bg-white/80 border-none shadow-md" />
              </Carousel>
            </div>
            <div className="grid grid-cols-4 gap-4">
               {product.images.map((image, idx) => (
                  <button key={idx} className="aspect-square relative rounded-2xl border bg-white shadow-sm overflow-hidden hover:border-accent/50 transition-colors p-2">
                      <Image src={image.url} alt="thumbnail" fill className="object-contain p-1" />
                  </button>
               ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex text-accent">
                   {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground border-l pl-3">Top Rated (4.9/5)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight tracking-tight">{product.name}</h1>
              <div className="flex items-baseline gap-4">
                <p className="text-4xl font-bold text-primary">{formatPrice(product.price)}</p>
                <p className="text-sm text-muted-foreground line-through opacity-50">{formatPrice(product.price + 1000)}</p>
              </div>
            </div>

            <Separator className="bg-primary/5" />
            
            <div className="space-y-8">
              {product.sizes.length > 0 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="font-bold text-xs tracking-widest uppercase text-primary">Available Sizes</Label>
                    <button className="text-[10px] font-bold text-accent underline underline-offset-4">Size Guide</button>
                  </div>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <div key={size}>
                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size}`}
                          className={cn("flex h-14 w-14 items-center justify-center rounded-2xl border-2 text-sm font-bold transition-all cursor-pointer shadow-sm hover:border-accent/30",
                          selectedSize === size ? 'border-accent bg-accent text-primary shadow-accent/20' : 'border-secondary bg-white text-primary/70'
                          )}
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              <div className="space-y-4">
                  <Label className="font-bold text-xs tracking-widest uppercase text-primary">About this pair</Label>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">{product.description}</p>
              </div>
            </div>

            {/* CTA Container */}
            <div className="flex flex-col gap-4 pt-6">
              <Button size="lg" className="btn-gold h-16 text-sm tracking-[0.2em] rounded-2xl" onClick={handleAddToCart}>
                ADD TO SHOPPING BAG
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary h-16 rounded-2xl font-bold tracking-[0.1em] hover:bg-primary hover:text-white transition-all duration-300" onClick={handleBuyNow}>
                <MessageCircle className="mr-2 h-5 w-5" />
                ORDER ON WHATSAPP
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 bg-secondary/30 rounded-3xl px-6 border border-primary/5">
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="h-6 w-6 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Genuine Quality</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-6 w-6 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Next Day Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RefreshCw className="h-6 w-6 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recommendations */}
        <div className="mt-32 space-y-16">
          <div className="text-center space-y-4">
              <h2 className="text-accent font-bold tracking-[0.3em] text-xs uppercase">Complete the Look</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">YOU MIGHT ALSO LIKE</h3>
          </div>
          <ProductRecommendations currentProductId={product.id} currentCategory={product.category} />
        </div>

        {productsInCategory.length > 0 && (
          <div className="mt-32 pt-20 border-t border-primary/5">
             <div className="flex justify-between items-end mb-12">
                <div className="space-y-2">
                   <h3 className="text-3xl font-headline font-bold text-primary">MORE IN {category?.name?.toUpperCase()}</h3>
                   <div className="h-1.5 w-20 bg-accent rounded-full"></div>
                </div>
                <Button variant="link" className="text-accent font-bold tracking-widest uppercase text-[10px] hover:text-primary transition-colors" asChild>
                  <Link href={`/shop/${category?.id}`}>View All Collection</Link>
                </Button>
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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