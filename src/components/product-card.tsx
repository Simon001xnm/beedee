import Link from 'next/link';
import Image from 'next/image';
import { Card, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Star, ShoppingCart, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/shop/product/${product.id}`} className="group block h-full">
      <Card className={cn("card-premium flex flex-col h-full group", className)}>
        <div className="image-container-clear relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain w-full h-full transition-all duration-700 group-hover:scale-110 drop-shadow-xl"
            data-ai-hint={product.images[0].hint}
          />
          
          {/* Elite Badges */}
          <div className="absolute top-5 left-5 flex flex-col gap-2">
            {product.price > 3000 && (
              <span className="bg-primary/95 backdrop-blur-md text-accent text-[8px] font-black px-3 py-1.5 tracking-[0.25em] uppercase rounded-full border border-accent/30 shadow-2xl">
                Elite Choice
              </span>
            )}
          </div>

          {/* Quick Add Overlay */}
          <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="h-12 w-12 rounded-2xl bg-accent flex items-center justify-center text-primary shadow-[0_10px_20px_rgba(212,175,55,0.4)]">
              <Plus className="h-6 w-6" />
            </div>
          </div>
        </div>
        
        <CardHeader className="p-6 pb-2 space-y-1 flex-grow">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-accent tracking-[0.3em] uppercase">{product.category}</span>
            <div className="flex items-center gap-1">
               <Star className="h-2.5 w-2.5 text-accent fill-accent" />
               <span className="text-[9px] text-muted-foreground font-black">4.9</span>
            </div>
          </div>
          <CardTitle className="text-lg font-headline font-bold text-primary group-hover:text-accent transition-colors duration-500 leading-tight line-clamp-2 pt-1">
            {product.name}
          </CardTitle>
        </CardHeader>
        
        <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-primary/5 mt-4">
          <p className="text-xl font-black text-primary tracking-tighter">{formatPrice(product.price)}</p>
          <ShoppingCart className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
        </CardFooter>
      </Card>
    </Link>
  );
}