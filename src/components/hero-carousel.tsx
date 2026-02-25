
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
            <div className="w-full h-[400px] lg:h-full relative group">
              <Image
                  src={product.images[0].url}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center"
                  data-ai-hint={product.images[0].hint || "luxury shoes"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8 md:p-12">
                  <div className="max-w-sm md:max-w-md text-white">
                      <p className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-3">Featured Selection</p>
                      <h2 className="text-3xl md:text-5xl font-black mb-4 leading-[1.1] tracking-tighter uppercase">{product.name}</h2>
                      <p className="text-white/70 text-sm md:text-base mb-8 line-clamp-2 font-medium">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-6">
                        <Button asChild size="lg" className="btn-accent-market h-12 px-8 text-xs">
                            <Link href={`/shop/product/${product.id}`}>Shop This Pair</Link>
                        </Button>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Starting At</span>
                            <span className="text-xl font-black text-accent tracking-tighter">KSh {product.price.toLocaleString()}</span>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </CarouselItem>
        );
      })}
    </CarouselContent>
    <div className="absolute bottom-4 right-12 flex gap-2">
        <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-white/10 hover:bg-accent hover:text-primary border-none text-white transition-all" />
        <CarouselNext className="static translate-y-0 h-10 w-10 bg-white/10 hover:bg-accent hover:text-primary border-none text-white transition-all" />
    </div>
    </Carousel>
  )
}
