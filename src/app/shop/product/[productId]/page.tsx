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
import { Star, ShieldCheck, Truck, RefreshCw } from "lucide-react";

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
    return <div className="min-h-screen flex items-center justify-center">Loading luxury...</div>;
  }
  
  const category = getCategoryById(product.category);
  const productsInCategory = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!product) return;
    if (product.sizes.length > 0 && !selectedSize) {
        toast({ variant: "destructive", title: "Select a size first." });
        return;
    }
    addToCart(product, selectedSize || "", selectedColor || "");
  };

  const handleBuyNow = () => {
    if (!product) return;
    if (product.sizes.length > 0 && !selectedSize) {
        toast({ variant: "destructive", title: "Select a size first." });
        return;
    }
    const phoneNumber = "254106587150";
    let message = `Hello Bee & Dee, I'd like to order: ${product.name}\nSize: ${selectedSize}\nPrice: ${formatPrice(product.price)}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: product.name }]} className="mb-8" />
      
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
        <div className="space-y-4">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square relative bg-secondary/30 rounded-2xl overflow-hidden shadow-sm border">
                    <Image
                      src={image.url}
                      alt={product.name}
                      fill
                      className="object-contain p-8"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80" />
            <CarouselNext className="right-4 bg-white/80" />
          </Carousel>
          <div className="grid grid-cols-4 gap-4">
             {product.images.map((image, idx) => (
                <div key={idx} className="aspect-square relative rounded-lg border bg-secondary/10 overflow-hidden">
                    <Image src={image.url} alt="thumbnail" fill className="object-contain p-2" />
                </div>
             ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent font-bold">
              <div className="flex">
                 {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
              </div>
              <span className="text-sm tracking-widest uppercase">(4.9/5 Rating)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">{product.name}</h1>
            <p className="text-3xl font-bold text-primary">{formatPrice(product.price)}</p>
          </div>

          <Separator className="bg-primary/5" />
          
          <div className="space-y-6">
            {product.sizes.length > 0 && (
              <div className="grid gap-4">
                <Label className="font-bold text-sm tracking-widest uppercase text-muted-foreground">Select Size</Label>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className={cn("flex h-12 w-12 items-center justify-center rounded-xl border-2 text-sm font-bold transition-all cursor-pointer peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent peer-data-[state=checked]:text-primary hover:border-accent/50",
                        selectedSize === size ? 'border-accent bg-accent text-primary' : 'border-secondary'
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
                <Label className="font-bold text-sm tracking-widest uppercase text-muted-foreground">Description</Label>
                <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="btn-gold h-14 text-lg px-12" onClick={handleAddToCart}>
              ADD TO CART
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary h-14 px-12 font-bold hover:bg-primary/5" onClick={handleBuyNow}>
              BUY VIA WHATSAPP
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="p-2 rounded-lg bg-accent/10"><ShieldCheck className="h-5 w-5 text-accent" /></div>
              <span>Authentic Guaranteed</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="p-2 rounded-lg bg-accent/10"><Truck className="h-5 w-5 text-accent" /></div>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="p-2 rounded-lg bg-accent/10"><RefreshCw className="h-5 w-5 text-accent" /></div>
              <span>Easy Exchanges</span>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-20 bg-primary/5" />

      <section className="space-y-12">
        <div className="text-center space-y-2">
            <h2 className="text-accent font-bold tracking-widest text-sm uppercase">Recommended for you</h2>
            <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary">COMPLETE YOUR LOOK</h3>
        </div>
        <ProductRecommendations currentProductId={product.id} currentCategory={product.category} />
      </section>

      {productsInCategory.length > 0 && (
        <section className="mt-20 space-y-12">
           <Separator className="bg-primary/5" />
           <div className="flex justify-between items-end">
              <h3 className="text-3xl font-headline font-bold text-primary">EXPLORE MORE IN {category?.name?.toUpperCase()}</h3>
              <Button variant="link" className="text-accent font-bold tracking-widest uppercase text-xs" asChild>
                <Link href={`/shop/${category?.id}`}>See All</Link>
              </Button>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {productsInCategory.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
           </div>
        </section>
      )}
    </div>
  );
}