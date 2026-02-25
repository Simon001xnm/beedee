import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Star, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  // Mocking sale data for UI fidelity to the reference image
  const originalPrice = product.price + (Math.random() > 0.5 ? 1500 : 0);
  const hasSale = originalPrice > product.price;
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div className={cn("group flex flex-col h-full bg-white", className)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f9f9f9] rounded-sm">
        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-primary"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Elite Badge */}
        {product.price > 3000 && (
          <span className="absolute top-2 left-2 z-10 bg-primary text-white text-[8px] font-black px-2 py-1 uppercase tracking-widest rounded-sm">
            Elite
          </span>
        )}

        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={400}
            height={533}
            className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105 p-4"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
      </div>

      <div className="flex flex-col pt-4 pb-2 space-y-1">
        {/* Brand / Category */}
        <span className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.15em]">
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Product Name */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-xs font-medium text-primary line-clamp-2 leading-snug hover:underline decoration-1 underline-offset-2">
            {product.name}
          </h3>
        </Link>

        {/* Price Section */}
        <div className="flex flex-col pt-1">
          <div className="flex items-baseline gap-2">
            <span className={cn("text-sm font-bold", hasSale ? "text-destructive" : "text-primary")}>
              {formatPrice(product.price)}
            </span>
            {hasSale && (
              <span className="text-[10px] text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
            {hasSale && (
              <span className="text-[10px] text-destructive font-bold">
                ({discount}% off)
              </span>
            )}
          </div>
          <span className="text-[9px] text-muted-foreground italic">
            Inclusive of nationwide delivery
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 pt-1">
          <div className="flex text-primary">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn("h-2.5 w-2.5", i < 4 ? "fill-current" : "text-muted/40")} 
              />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground font-medium underline decoration-muted-foreground/30">
            (48)
          </span>
        </div>

        {/* Color Swatches */}
        <div className="flex items-center gap-1.5 pt-2">
          {product.colors.map((color, idx) => (
            <div 
              key={idx} 
              className={cn(
                "h-3 w-3 rounded-full border border-primary/10 shadow-sm",
                idx === 0 ? "bg-primary ring-1 ring-offset-1 ring-primary/20" : "bg-muted"
              )}
              title={color}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-[9px] text-muted-foreground font-medium">
              +{product.colors.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
