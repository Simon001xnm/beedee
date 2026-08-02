import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { formatPrice, cn } from '@/lib/utils';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article className={cn(
      "group relative flex flex-col h-full bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-black/[0.03]",
      className
    )}>
      {/* Visual Container */}
      <Link 
        href={`/shop/product/${product.id}`} 
        className="relative block overflow-hidden bg-[#f9f9f9] aspect-[4/5]"
      >
        <Image
          src={product.images[0].url}
          alt={product.name}
          fill
          className="transition-transform duration-500 ease-out group-hover:scale-105 object-cover"
          data-ai-hint={product.images[0].hint}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white text-primary rounded-full h-10 w-10 flex items-center justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
             <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </Link>

      {/* Simplified Info Container */}
      <div className="p-3 flex flex-col flex-1 gap-2">
        <Link href={`/shop/product/${product.id}`}>
          <h3 className="text-[11px] sm:text-[12px] font-black text-primary leading-tight uppercase tracking-tight group-hover:text-accent transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex flex-col gap-1 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-[13px] sm:text-[14px] font-black text-primary tracking-tighter">
              {formatPrice(product.price)}
            </span>
            <Button size="icon" variant="ghost" asChild className="h-7 w-7 rounded-lg bg-secondary/50 hover:bg-primary hover:text-white transition-all">
              <Link href={`/shop/product/${product.id}`}>
                <ShoppingBag className="h-3 w-3" />
              </Link>
            </Button>
          </div>
          
          {/* Size Display */}
          <div className="flex flex-wrap gap-1 mt-1">
            {product.sizes.slice(0, 3).map(size => (
              <span key={size} className="text-[8px] font-bold text-muted-foreground/60 border border-black/[0.05] px-1 rounded uppercase">
                {size}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-[8px] font-bold text-muted-foreground/40 px-1 uppercase">
                +{product.sizes.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
