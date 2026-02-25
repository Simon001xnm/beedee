import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { formatPrice, cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  // Determine if this is on a dark background (Luxury Section)
  const isDark = className?.includes('bg-primary');
  const originalPrice = product.price + 1500;

  return (
    <article className={cn(
      "group relative flex flex-col h-full transition-all duration-500",
      className
    )}>
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white/50 border border-primary/5">
        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={600}
            height={750}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
        
        {/* Editorial Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
          {product.price > 3000 && (
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              Elite Selection
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col pt-6 space-y-3">
        {/* Category */}
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-[0.3em]",
          isDark ? "text-accent" : "text-accent"
        )}>
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Name - Gold/Accent for Brand Authority */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className={cn(
            "text-xl md:text-2xl font-headline font-bold uppercase tracking-tight leading-tight transition-colors",
            isDark ? "text-accent" : "text-primary group-hover:text-accent"
          )}>
            {product.name}
          </h3>
        </Link>

        {/* Pricing & Details - White on Dark, Primary on Light */}
        <div className="flex flex-col gap-1 pt-1">
          <div className="flex items-baseline gap-3">
            <span className={cn(
              "text-2xl font-bold tracking-tighter",
              isDark ? "text-white" : "text-primary"
            )}>
              {formatPrice(product.price)}
            </span>
            <span className={cn(
              "text-xs line-through opacity-40",
              isDark ? "text-white" : "text-primary"
            )}>
              {formatPrice(originalPrice)}
            </span>
          </div>
          
          <p className={cn(
            "text-[9px] font-bold uppercase tracking-[0.2em] opacity-60",
            isDark ? "text-white" : "text-primary"
          )}>
            Available in Stock
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 pt-2 opacity-80">
          <div className="flex text-accent gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </div>
          <span className={cn(
            "text-[9px] font-bold tracking-widest uppercase",
            isDark ? "text-white" : "text-primary"
          )}>
            4.9 RATING
          </span>
        </div>
      </div>
    </article>
  );
}