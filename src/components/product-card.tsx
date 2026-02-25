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
  const originalPrice = product.price + 1000;
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  // Check if we are on a dark background (like in the Elite section)
  const isDark = className?.includes('bg-white/5') || className?.includes('bg-primary');

  return (
    <div className={cn(
      "group flex flex-col h-full transition-all duration-500 rounded-[2.5rem] p-6 md:p-8 shadow-sm",
      isDark ? "bg-white/5 border border-white/10" : "bg-white border border-primary/5",
      className
    )}>
      <div className="relative aspect-square overflow-hidden bg-secondary/20 rounded-[2.5rem] group-hover:shadow-2xl transition-all duration-700">
        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 z-10 h-12 w-12 rounded-full bg-white/40 backdrop-blur-md shadow-lg text-primary hover:bg-accent hover:text-primary transition-all duration-300"
        >
          <Heart className="h-6 w-6" />
        </Button>

        {/* Status Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.price > 3000 && (
            <span className="bg-primary text-white text-[10px] font-black px-4 py-2 uppercase tracking-[0.2em] rounded-full shadow-2xl">
              Elite
            </span>
          )}
          <span className="bg-accent text-primary text-[10px] font-black px-4 py-2 uppercase tracking-[0.2em] rounded-full shadow-2xl">
            -{discount}%
          </span>
        </div>

        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={600}
            height={600}
            className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-110 p-8 md:p-12"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
      </div>

      <div className="flex flex-col pt-8 space-y-4 px-2">
        {/* Category Label */}
        <span className="text-[11px] font-black text-accent tracking-[0.4em] uppercase opacity-80">
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Product Name - Always Gold (Accent) for brand identity */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-accent uppercase tracking-tighter leading-none min-h-[3rem] group-hover:underline underline-offset-8 decoration-accent/30">
            {product.name}
          </h3>
        </Link>

        {/* Price Section - Conditional Color */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className={cn(
              "text-3xl md:text-4xl font-black tracking-tighter",
              isDark ? "text-white" : "text-primary"
            )}>
              {formatPrice(product.price)}
            </span>
            <span className={cn(
              "text-sm md:text-base line-through font-bold opacity-30",
              isDark ? "text-white" : "text-primary"
            )}>
              {formatPrice(originalPrice)}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            <span className={cn(
              "text-[10px] md:text-xs font-black uppercase tracking-[0.2em]",
              isDark ? "text-white/60" : "text-primary/60"
            )}>
              Available in Stock
            </span>
          </div>
        </div>

        {/* Rating - Conditional Color for Label */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-2">
          <div className="flex text-accent gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn("h-4 w-4 md:h-5 md:w-5", i < 4 ? "fill-current" : "text-primary/10")} 
              />
            ))}
          </div>
          <span className={cn(
            "text-[10px] md:text-xs font-black tracking-[0.3em] uppercase",
            isDark ? "text-white/40" : "text-primary/40"
          )}>
            4.9 RATING
          </span>
        </div>
      </div>
    </div>
  );
}
