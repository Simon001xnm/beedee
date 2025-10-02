import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { categories, getFeaturedProducts } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = getFeaturedProducts(8);
  const mainCategories = categories.filter(c => !c.parentId);

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <section className="relative w-full h-[400px] md:h-[500px] bg-secondary/50">
        <Image
          src="https://picsum.photos/seed/magicalshoes/1800/600"
          alt="Promotional banner"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="fashion shoes"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white p-4 gap-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Step Into Style
          </h1>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
            Free Shipping on all orders over KSh 10,000. Discover your perfect pair today.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/shop">Shop Now <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {mainCategories.map(category => (
            <Link href={`/shop/${category.id}`} key={category.id} className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={category.imageHint}
                    />
                  </div>
                  <div className="p-4 bg-background">
                    <h3 className="font-semibold text-center text-lg">{category.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Featured Products</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>
    </div>
  );
}
