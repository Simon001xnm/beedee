import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { formatPrice, cn } from '@/lib/utils';
import { Star, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
  isDark?: boolean;
}

export function ProductCard({ product, className, isDark }: ProductCardProps) {
  const originalPrice = product.price + 1200;

  return (
    <article className={cn(
      "group relative flex flex-col h-full transition-all duration-700",
      className
    )}>
      {/* Image Showcase - Large & Intentional */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted border border-white/5">
        <Link href={`/shop/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={800}
            height={1000}
            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
            data-ai-hint={product.images[0].hint}
          />
        </Link>
        
        {/* Editorial Badge */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
          {product.price > 3000 && (
            <span className="bg-primary text-primary-foreground text-[9px] font-black px-4 py-1.5 uppercase tracking-[0.2em] shadow-2xl">
              Elite
            </span>
          )}
           <span className="bg-black/80 backdrop-blur-md text-white text-[9px] font-black px-4 py-1.5 uppercase tracking-[0.2em]">
            -22%
          </span>
        </div>

        {/* Quick Add Button - Desktop Only */}
        <button className="absolute bottom-6 right-6 h-12 w-12 bg-white text-background opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden md:flex items-center justify-center">
            <Plus className="h-6 w-6" />
        </button>
      </div>

      {/* Product Narrative & Data */}
      <div className="flex flex-col pt-8 space-y-4">
        {/* Collection Category */}
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
          {product.category.replace('-', ' ')}
        </span>
        
        {/* Name - Premium Authority */}
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-2xl md:text-3xl font-headline font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Dynamic Pricing - Technical Details in White on Dark */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex items-baseline gap-4">
            <span className={cn(
              "text-3xl font-black tracking-tighter",
              isDark ? "text-white" : "text-white"
            )}>
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-white/20 line-through font-bold">
              {formatPrice(originalPrice)}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                Available in Stock
              </p>
              
              <div className="flex items-center gap-2">
                <div className="flex text-primary">
                    <Star className="h-3 w-3 fill-current" />
                </div>
                <span className="text-[9px] font-black tracking-widest text-white/60">4.9 RATING</span>
              </div>
          </div>
        </div>
      </div>
    </article>
  );
}