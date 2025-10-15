import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/shop/product/${product.id}`} className="group block">
      <Card className={cn("overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-lg", className)}>
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-secondary">
            <Image
              src={product.images[0].url}
              alt={product.name}
              width={400}
              height={400}
              className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.images[0].hint}
            />
          </div>
        </CardContent>
        <CardHeader className="p-4 flex-grow">
          <CardTitle className="text-base font-medium leading-tight line-clamp-2">{product.name}</CardTitle>
        </CardHeader>
        <CardFooter className="p-4 pt-0">
          <p className="text-lg font-semibold text-accent">{formatPrice(product.price)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
