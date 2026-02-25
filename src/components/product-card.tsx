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

  return (
    <div className={cn("group flex flex-col h-full bg-transparent transition-all duration-500 rounded-3xl", className)}>
      <div className="relative aspect-square overflow-hidden bg-secondary/10 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-white/5">
        {/* Wishlist Button - Hidden on very small mobile to keep it clean, but functional */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 md:top-4 md:right-4 z-10 h-8 w-8 md:h-10 md:w-10 rounded-full bg-white/10 backdrop-blur-md shadow-lg opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-primary text-white"
        >
          <Heart className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        {/* Status Badges */}
        <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 flex flex-col gap-1.5 md:gap-2">
          {product.price > 3000 && (
            <span className="bg-primary text-white text-[8px] md:text-[9px] font-black px-2 py-1 md:px-3 md:py-1.5 uppercase tracking-[0.15em] md:tracking-[0.2em] rounded-full shadow-2xl border border-white/10">
              Elite
            </span>
          )}
          <span className="bg-accent text-primary text-[8px] md:text-[9px] font-black px-2 py-1 md:px-3 md:py-1.5 uppercase tracking-[0.15em] md:tracking-[0.2em] rounded-full shadow-2xl">
            -{discount}%
          </span>
        </div>

        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-110 p-4 md:p-6"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
      </div>

      <div className="flex flex-col pt-4 md:pt-6 pb-3 md:pb-4 space-y-1 md:space-y-2 px-1">
        {/* Category Label */}
        <span className="text-[8px] md:text-[10px] font-black text-accent/60 uppercase tracking-[0.2em] md:tracking-[0.3em]">
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Product Name - Gold for high visibility as requested */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-sm md:text-xl font-headline font-bold text-accent line-clamp-1 leading-tight md:leading-none tracking-tight md:tracking-tighter uppercase transition-none">
            {product.name}
          </h3>
        </Link>

        {/* Price Section */}
        <div className="flex flex-col gap-0.5 md:gap-1 pt-0.5 md:pt-1">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-base md:text-2xl font-black text-white tracking-tighter">
              {formatPrice(product.price)}
            </span>
            <span className="text-[10px] md:text-xs text-accent/40 line-through font-bold">
              {formatPrice(originalPrice)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1 md:h-1.5 w-1 md:w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
            <span className="text-[7px] md:text-[10px] text-accent/80 font-black uppercase tracking-[0.1em] md:tracking-widest">
              Available in Stock
            </span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 md:gap-2 pt-1 md:pt-2">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn("h-2.5 w-2.5 md:h-3 md:w-3", i < 4 ? "fill-current" : "text-white/10")} 
              />
            ))}
          </div>
          <span className="text-[8px] md:text-[10px] text-accent/40 font-black tracking-widest uppercase">4.9</span>
        </div>
      </div>
    </div>
  );
}
