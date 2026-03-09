import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { formatPrice, cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
  className?: string;
  variant?: 'standard' | 'minimal';
}

export function ProductCard({ product, className, variant = 'standard' }: ProductCardProps) {
  if (variant === 'minimal') {
    return (
      <Link href={`/shop/product/${product.id}`} className={cn("group bg-white rounded-lg overflow-hidden border border-transparent hover:border-accent transition-all duration-300", className)}>
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={product.images[0].hint}
          />
        </div>
        <div className="p-1.5">
          <h4 className="text-[9px] font-medium line-clamp-1 mb-0.5 text-inherit">{product.name}</h4>
          <p className="text-[10px] font-bold text-primary">{formatPrice(product.price)}</p>
        </div>
      </Link>
    );
  }

  return (
    <article className={cn(
      "group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full",
      className
    )}>
      <Link href={`/shop/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] bg-gray-50">
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={product.images[0].hint}
          />
          {product.price > 3000 && (
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
              Premium
            </div>
          )}
        </div>
      </Link>

      <div className="p-2 md:p-3 flex flex-col flex-1 gap-1">
        <div className="flex flex-col flex-1">
          <Link href={`/shop/product/${product.id}`}>
            <h3 className="text-[11px] md:text-sm font-bold line-clamp-1 md:line-clamp-2 hover:text-accent transition-colors text-inherit leading-tight">
              {product.name}
            </h3>
          </Link>
          <span className="text-[9px] md:text-[10px] uppercase tracking-wider mt-0.5 opacity-60 text-inherit truncate">
            {product.category.replace('-', ' ')}
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-1 gap-1">
          <div className="flex flex-col">
            <span className="text-[12px] md:text-lg font-bold text-primary leading-none">{formatPrice(product.price)}</span>
            {product.originalPrice ? (
              <span className="text-[9px] md:text-xs line-through opacity-40">{formatPrice(product.originalPrice)}</span>
            ) : null}
          </div>
          <Button size="icon" variant="ghost" className="h-7 w-7 md:h-9 md:w-9 rounded-full bg-gray-50 hover:bg-primary hover:text-white transition-colors flex-shrink-0">
            <ShoppingCart className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
