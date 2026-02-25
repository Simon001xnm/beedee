
'use client'

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import { getProductById } from "@/lib/data";

const featuredProductIds = ['p0', 'p6', 'p9']; // NB Special Offer, Jordan Voodoo, NB 9060

export function HeroCarousel() {
  return (
    <Carousel 
        className="w-full h-full"
        plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
    >
    <CarouselContent className="h-full">
      {featuredProductIds.map((id) => {
        const product = getProductById(id);
        if (!product) return null;

        return (
          <CarouselItem key={product.id} className="h-full">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative group overflow-hidden">
              <Image
                  src={product.images[0].url}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  data-ai-hint={product.images[0].hint || "luxury shoes"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent" />
              <div className="absolute inset-0 flex items-center p-6 md:p-12">
                  <div className="max-w-xs md:max-w-md text-white">
                      <p className="text-accent font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-2 md:mb-4">Special Selection</p>
                      <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-6 leading-tight tracking-tighter uppercase">{product.name}</h2>
                      <p className="text-white/70 text-xs md:text-base mb-6 md:mb-10 line-clamp-2 font-medium hidden md:block">
                        {product.description}
                      </p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black uppercase tracking-widest text-[10px] h-10 md:h-12 px-6 md:px-10 rounded-full transition-all hover:scale-105">
                            <Link href={`/shop/product/${product.id}`}>Shop Now</Link>
                        </Button>
                        <div className="flex flex-col">
                            <span className="text-[9px] uppercase font-bold text-white/50 tracking-widest">Starting At</span>
                            <span className="text-lg md:text-2xl font-black text-accent tracking-tighter">KSh {product.price.toLocaleString()}</span>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </CarouselItem>
        );
      })}
    </CarouselContent>
    <div className="absolute bottom-4 right-4 md:right-12 flex gap-2">
        <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-white/10 hover:bg-accent hover:text-primary border border-white/20 text-white transition-all rounded-full" />
        <CarouselNext className="static translate-y-0 h-10 w-10 bg-white/10 hover:bg-accent hover:text-primary border border-white/20 text-white transition-all rounded-full" />
    </div>
    </Carousel>
  )
}
