
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
      if (p?.sizes?.length === 1) {
        setSelectedSize(p.sizes[0]);
      }
      if (p?.colors?.length === 1) {
        setSelectedColor(p.colors[0]);
      }
    }
  }, [productId]);


  if (!product) {
    // You can return a loading state here
    return <div>Loading...</div>;
  }
  
  const category = getCategoryById(product.category);
  const productsInCategory = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
  ];
  if (category) {
    breadcrumbItems.push({ label: category.name, href: `/shop/${category.id}` });
  }
  breadcrumbItems.push({ label: product.name });

  const handleAddToCart = () => {
    if (!product) return;

    if (product.sizes.length > 0 && !selectedSize) {
        toast({
            variant: "destructive",
            title: "Please select a size.",
        });
        return;
    }

    if (product.colors.length > 0 && !selectedColor) {
        toast({
            variant: "destructive",
            title: "Please select a color.",
        });
        return;
    }

    addToCart(product, selectedSize || "", selectedColor || "");
  };

  const handleBuyNow = () => {
    if (!product) return;

    if (product.sizes.length > 0 && !selectedSize) {
        toast({
            variant: "destructive",
            title: "Please select a size.",
        });
        return;
    }

    if (product.colors.length > 0 && !selectedColor) {
        toast({
            variant: "destructive",
            title: "Please select a color.",
        });
        return;
    }
    
    const phoneNumber = "254106587150";
    let message = "Hello Bee & Dee, I would like to purchase the following item:\n\n";
    message += `*Product:* ${product.name}\n`;
    if (selectedSize) message += `*Size:* ${selectedSize}\n`;
    if (selectedColor) message += `*Color:* ${selectedColor}\n`;
    message += `*Price:* ${formatPrice(product.price)}\n`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
                      className="object-contain rounded-lg"
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
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-headline font-bold">{product.name}</h1>
          <p className="text-3xl font-bold text-accent">{formatPrice(product.price)}</p>
          <Separator />
          
          {product.sizes && product.sizes.length > 0 && (
            <div className="grid gap-2">
              <Label className="font-semibold text-lg">Size</Label>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className={cn("flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium uppercase transition-colors hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground cursor-pointer",
                      selectedSize === size ? 'border-primary bg-primary text-primary-foreground' : 'border-input'
                      )}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
             <div className="grid gap-2">
                <Label className="font-semibold text-lg">Color</Label>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                    <div key={color}>
                        <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                        <Label
                        htmlFor={`color-${color}`}
                        className={cn("flex items-center justify-center rounded-md border-2 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer",
                          selectedColor === color ? 'border-primary bg-primary text-primary-foreground' : 'border-input'
                        )}
                        >
                        {color}
                        </Label>
                    </div>
                    ))}
                </RadioGroup>
            </div>
          )}

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>Add to Cart</Button>
            <Button size="lg" variant="outline" className="flex-1" onClick={handleBuyNow}>Buy Now on WhatsApp</Button>
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

      {productsInCategory.length > 0 && (
        <>
          <Separator className="my-12" />
          <div>
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6">More in {category?.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {productsInCategory.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
