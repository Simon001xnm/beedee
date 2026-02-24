import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/shop/product/${product.id}`} className="group block">
      <Card className={cn("card-premium overflow-hidden h-full flex flex-col border-none bg-white", className)}>
        <CardContent className="p-0 relative">
          <div className="aspect-square overflow-hidden bg-secondary/50 group-hover:bg-secondary/80 transition-colors duration-500">
            <Image
              src={product.images[0].url}
              alt={product.name}
              width={400}
              height={400}
              className="object-contain w-full h-full p-4 transition-transform duration-700 group-hover:scale-110"
              data-ai-hint={product.images[0].hint}
            />
          </div>
          {product.price > 4000 && (
            <div className="absolute top-3 left-3 bg-primary text-accent text-[10px] font-bold px-2 py-1 tracking-widest uppercase rounded">
              Premium
            </div>
          )}
        </CardContent>
        <CardHeader className="p-5 flex-grow space-y-2">
          <div className="flex items-center gap-1">
             {[...Array(5)].map((_,i) => <Star key={i} className="h-3 w-3 text-accent fill-accent opacity-80" />)}
          </div>
          <CardTitle className="text-lg font-headline font-bold text-primary group-hover:text-accent transition-colors leading-tight line-clamp-2">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardFooter className="p-5 pt-0">
          <div className="flex items-baseline gap-2">
             <p className="text-xl font-bold text-primary">{formatPrice(product.price)}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}