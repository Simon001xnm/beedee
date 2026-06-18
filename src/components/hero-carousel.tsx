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
import { getHeroProducts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export function HeroCarousel() {
  // Use products that are NOT restricted to the landing page grid
  const featuredProducts = getHeroProducts();

  if (featuredProducts.length === 0) {
    return (
      <div className="w-full h-[550px] relative bg-primary flex items-center justify-center text-white p-12 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
        <div className="max-w-xl relative z-10">
          <span className="text-accent font-black uppercase tracking-[0.6em] text-[10px] mb-6 block">Concierge Entry</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">Refining the Stride.</h2>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black uppercase tracking-widest text-[10px] h-16 px-12 rounded-full transition-all hover:scale-105 shadow-2xl">
            <Link href="/shop">Access Collections</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Carousel 
        className="w-full h-full"
        plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
        opts={{
          loop: true,
        }}
    >
    <CarouselContent className="h-full">
      {featuredProducts.map((product) => (
          <CarouselItem key={product.id} className="h-full">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative group overflow-hidden bg-black">
              <Image
                  src={product.images[0].url}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-[10000ms] scale-100 group-data-[state=active]:scale-110 animate-kenburns"
                  sizes="100vw"
                  data-ai-hint={product.images[0].hint || "luxury shoes"}
              />
              
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent hidden lg:block" />

              <div className="absolute inset-0 flex items-center">
                  <div className="container-market w-full">
                    <div className="max-w-xl text-white">
                        <div className="overflow-hidden mb-2">
                           <p className="text-accent font-black uppercase tracking-[0.4em] text-[10px] animate-in slide-in-from-bottom-full duration-700">Premium Selection</p>
                        </div>
                        <div className="overflow-hidden mb-6">
                           <h2 className="text-xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tighter uppercase animate-in slide-in-from-bottom-full duration-1000 delay-100">
                             {product.name}
                           </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-in fade-in duration-1000 delay-300">
                          <Button asChild size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary font-black uppercase tracking-widest text-[11px] h-14 px-12 rounded-full transition-all hover:scale-105 shadow-2xl">
                              <Link href={`/shop/product/${product.id}`}>Discover Item</Link>
                          </Button>
                          <div className="flex flex-col">
                              <span className="text-[10px] uppercase font-bold text-white/50 tracking-[0.2em] mb-1">Heritage Value</span>
                              <span className="text-xl font-black text-accent tracking-tighter">{formatPrice(product.price)}</span>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </CarouselItem>
      ))}
    </CarouselContent>
    
    <div className="absolute bottom-8 right-8 md:right-16 flex gap-4 z-20">
        <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-white/5 hover:bg-accent hover:text-primary border border-white/10 text-white transition-all rounded-full backdrop-blur-md" />
        <CarouselNext className="static translate-y-0 h-14 w-14 bg-white/5 hover:bg-accent hover:text-primary border border-white/10 text-white transition-all rounded-full backdrop-blur-md" />
    </div>
    </Carousel>
  )
}
