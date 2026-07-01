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
  // Detect if this is a landing page exclusive offer with text in image
  const isImageOffer = product.id.startsWith('offer-');

  return (
    <article className={cn(
      "group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 border border-black/[0.03]",
      className
    )}>
      {/* Visual Container */}
      <Link 
        href={`/shop/product/${product.id}`} 
        className={cn(
          "relative block overflow-hidden bg-[#f9f9f9]",
          isImageOffer ? "aspect-auto min-h-[300px] md:min-h-[400px]" : "aspect-[4/5]"
        )}
      >
        <Image
          src={product.images[0].url}
          alt={product.name}
          fill={!isImageOffer}
          width={isImageOffer ? 1200 : undefined}
          height={isImageOffer ? 1500 : undefined}
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-105",
            isImageOffer ? "object-contain w-full h-full p-2" : "object-cover"
          )}
          data-ai-hint={product.images[0].hint}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="bg-white text-primary rounded-full h-12 w-12 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
             <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {(product.price > 4000 || isImageOffer) && (
            <div className="bg-primary text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm">
              {isImageOffer ? "Stock Clearance" : "Luxe Edition"}
            </div>
          )}
        </div>
      </Link>

      {/* Narrative Container - Now shown for all products */}
      <div className="p-5 flex flex-col flex-1 gap-4">
        <div className="space-y-1">
          <Link href={`/shop/product/${product.id}`}>
            <h3 className="text-sm font-black text-primary leading-tight uppercase tracking-tight group-hover:text-accent transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">
            {product.category.replace('-', ' ')}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-end justify-between mt-auto pt-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                {product.price > 0 ? "Market Price" : "Event Pricing"}
              </span>
              <span className="text-lg font-black text-primary tracking-tighter leading-none">
                {product.price > 0 ? formatPrice(product.price) : "SEE IMAGE"}
              </span>
            </div>
            <Button size="icon" variant="ghost" asChild className="h-10 w-10 rounded-xl bg-secondary/50 hover:bg-primary hover:text-white transition-all">
              <Link href={`/shop/product/${product.id}`}>
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
