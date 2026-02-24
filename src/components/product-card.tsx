import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/shop/product/${product.id}`} className="group block">
      <Card className={cn("card-premium flex flex-col h-full", className)}>
        <div className="image-container-clear">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
            data-ai-hint={product.images[0].hint}
          />
          {product.price > 3000 && (
            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-accent text-[9px] font-bold px-2.5 py-1 tracking-[0.2em] uppercase rounded-full shadow-lg border border-accent/20">
              Premium Choice
            </div>
          )}
        </div>
        
        <CardHeader className="p-6 pb-2 space-y-2 flex-grow">
          <div className="flex items-center gap-1">
             {[...Array(5)].map((_,i) => <Star key={i} className="h-3 w-3 text-accent fill-accent" />)}
             <span className="text-[10px] text-muted-foreground ml-1 font-bold">4.9</span>
          </div>
          <CardTitle className="text-base font-headline font-bold text-primary group-hover:text-accent transition-colors leading-tight line-clamp-1">
            {product.name}
          </CardTitle>
        </CardHeader>
        
        <CardFooter className="p-6 pt-0 flex items-center justify-between">
          <p className="text-xl font-bold text-primary tracking-tight">{formatPrice(product.price)}</p>
          <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-sm">
            <ShoppingCart className="h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}