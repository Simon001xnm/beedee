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
  // Mocking sale data for UI fidelity
  const originalPrice = product.price + 1000;
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div className={cn("group flex flex-col h-full bg-white transition-all duration-300", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#fcfcfc] rounded-xl shadow-sm border border-black/5">
        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-primary text-primary"
        >
          <Heart className="h-5 w-5" />
        </Button>

        {/* Elite/Sale Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.price > 3000 && (
            <span className="bg-primary text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">
              Elite
            </span>
          )}
          <span className="bg-accent text-primary text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">
            -{discount}%
          </span>
        </div>

        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={400}
            height={500}
            className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110 p-4"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
      </div>

      <div className="flex flex-col pt-4 pb-2 space-y-2">
        {/* Category Label */}
        <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em]">
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Product Name - Increased mobile readability */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-base md:text-lg font-bold text-primary line-clamp-1 leading-tight hover:text-accent transition-colors tracking-tight">
            {product.name}
          </h3>
        </Link>

        {/* Price Section */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg md:text-xl font-black text-primary">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-muted-foreground line-through opacity-50">
              {formatPrice(originalPrice)}
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-60">
            Free Delivery
          </span>
        </div>

        {/* Rating & Social Proof */}
        <div className="flex items-center gap-2 pt-1">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn("h-3 w-3", i < 4 ? "fill-current" : "text-muted/20")} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-bold">(120+)</span>
        </div>
      </div>
    </div>
  );
}
