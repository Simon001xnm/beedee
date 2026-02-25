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
      <div className="relative aspect-square overflow-hidden bg-secondary/10 rounded-[2rem] shadow-sm border border-white/5">
        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-primary text-white"
        >
          <Heart className="h-5 w-5" />
        </Button>

        {/* Status Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.price > 3000 && (
            <span className="bg-primary text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-2xl border border-white/10">
              Elite
            </span>
          )}
          <span className="bg-accent text-primary text-[9px] font-black px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-2xl">
            -{discount}%
          </span>
        </div>

        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-110 p-6"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
      </div>

      <div className="flex flex-col pt-6 pb-4 space-y-2 px-1">
        {/* Category Label - Persistent Gold */}
        <span className="text-[10px] font-black text-accent/60 uppercase tracking-[0.3em]">
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Product Name - Forced Gold for Visibility, No Hover Effects */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-lg md:text-xl font-headline font-bold text-accent line-clamp-1 leading-none tracking-tighter uppercase transition-none">
            {product.name}
          </h3>
        </Link>

        {/* Price Section - High Visibility Gold */}
        <div className="flex flex-col gap-1 pt-1">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-accent/40 line-through font-bold">
              {formatPrice(originalPrice)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] text-accent/80 font-black uppercase tracking-widest">
              Available in Stock
            </span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 pt-2">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn("h-3 w-3", i < 4 ? "fill-current" : "text-white/10")} 
              />
            ))}
          </div>
          <span className="text-[10px] text-accent/40 font-black tracking-widest uppercase">4.9 Rating</span>
        </div>
      </div>
    </div>
  );
}
