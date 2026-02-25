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
    <div className={cn("group flex flex-col h-full bg-white transition-all duration-500 rounded-3xl", className)}>
      <div className="relative aspect-square overflow-hidden bg-secondary/30 rounded-[2rem] shadow-sm border border-black/[0.03]">
        {/* Wishlist Button - Improved Visibility */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/95 backdrop-blur-md shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-primary text-primary active:scale-90"
        >
          <Heart className="h-5 w-5" />
        </Button>

        {/* Status Badges - Higher contrast */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.price > 3000 && (
            <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-xl">
              Elite
            </span>
          )}
          <span className="bg-accent text-primary text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-xl">
            -{discount}%
          </span>
        </div>

        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full h-full transition-transform duration-1000 md:group-hover:scale-110 p-6"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
      </div>

      <div className="flex flex-col pt-6 pb-4 space-y-2 px-2">
        {/* Category Label */}
        <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Product Name - Larger and bolder */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-lg md:text-xl font-headline font-bold text-primary line-clamp-1 leading-none hover:text-accent transition-colors tracking-tight uppercase">
            {product.name}
          </h3>
        </Link>

        {/* Price Section - Clearer focus */}
        <div className="flex flex-col gap-1 pt-1">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-xl md:text-2xl font-black text-primary tracking-tighter">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-muted-foreground/40 line-through font-bold">
              {formatPrice(originalPrice)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-primary/60 font-black uppercase tracking-widest">
              Available in Stock
            </span>
          </div>
        </div>

        {/* Rating - Simplified for mobile clarity */}
        <div className="flex items-center gap-2 pt-2">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn("h-3 w-3", i < 4 ? "fill-current" : "text-muted/20")} 
              />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground font-black tracking-widest uppercase">4.9 Rating</span>
        </div>
      </div>
    </div>
  );
}
