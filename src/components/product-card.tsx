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
    <div className={cn("group flex flex-col h-full bg-white transition-all duration-500 rounded-[2.5rem] p-4 md:p-6 shadow-sm border border-primary/5", className)}>
      <div className="relative aspect-square overflow-hidden bg-secondary/20 rounded-[2rem] group-hover:shadow-xl transition-all duration-500">
        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 h-10 w-10 rounded-full bg-white/40 backdrop-blur-md shadow-lg text-primary hover:bg-accent hover:text-primary transition-all duration-300"
        >
          <Heart className="h-5 w-5" />
        </Button>

        {/* Status Badges */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 flex flex-col gap-2">
          {product.price > 3000 && (
            <span className="bg-primary text-white text-[9px] md:text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-2xl">
              Elite
            </span>
          )}
          <span className="bg-accent text-primary text-[9px] md:text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-2xl">
            -{discount}%
          </span>
        </div>

        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={600}
            height={600}
            className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-110 p-6 md:p-8"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
      </div>

      <div className="flex flex-col pt-6 md:pt-8 space-y-3 px-1">
        {/* Category Label */}
        <span className="text-[10px] md:text-[11px] font-black text-accent tracking-[0.3em] uppercase opacity-70">
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Product Name - Larger and non-truncating for clarity */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-xl md:text-2xl font-headline font-bold text-accent uppercase tracking-tight leading-tight min-h-[3rem]">
            {product.name}
          </h3>
        </Link>

        {/* Price Section */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-2xl md:text-3xl font-black text-primary tracking-tighter">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs md:text-sm text-primary/30 line-through font-bold">
              {formatPrice(originalPrice)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
            <span className="text-[9px] md:text-[10px] text-primary/60 font-black uppercase tracking-widest">
              Available in Stock
            </span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 pt-2">
          <div className="flex text-accent gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn("h-3.5 w-3.5 md:h-4 md:w-4", i < 4 ? "fill-current" : "text-primary/10")} 
              />
            ))}
          </div>
          <span className="text-[10px] md:text-[11px] text-primary/40 font-black tracking-widest uppercase">4.9 RATING</span>
        </div>
      </div>
    </div>
  );
}