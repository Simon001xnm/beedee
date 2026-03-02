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
        <div className="p-3">
          <h4 className="text-[11px] font-medium line-clamp-1 mb-1 text-inherit">{product.name}</h4>
          <p className="text-sm font-bold text-primary">{formatPrice(product.price)}</p>
        </div>
      </Link>
    );
  }

  return (
    <article className={cn(
      "group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300",
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
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
              Premium
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col">
          <Link href={`/shop/product/${product.id}`}>
            <h3 className="text-sm font-bold line-clamp-2 hover:text-accent transition-colors min-h-[40px] text-inherit">
              {product.name}
            </h3>
          </Link>
          <span className="text-[10px] uppercase tracking-wider mt-1 opacity-60 text-inherit">
            {product.category.replace('-', ' ')}
          </span>
        </div>

        <div className="flex items-end justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice ? (
              <span className="text-xs line-through opacity-40">{formatPrice(product.originalPrice)}</span>
            ) : null}
          </div>
          <Button size="icon" variant="ghost" className="rounded-full bg-gray-50 hover:bg-primary hover:text-white transition-colors">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}