
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
import { PlaceHolderImages } from "@/lib/placeholder-images";

const carouselItems = [
    {
        id: 'promo-1',
        title: "The Sneaker Lab 2026",
        subtitle: "Global Express Delivery",
        description: "Experience ultimate comfort and street-ready style with our curated New Balance and Jordan collections.",
        imageId: 'hero-sneakers-banner',
        href: "/shop/sneaker-lab",
    },
     {
        id: 'promo-2',
        title: "Gentlemen's Quarters",
        subtitle: "Premium Heritage Craftsmanship",
        description: "Discover the perfect balance of class and durability with our exclusive Clarks and Loafer edits.",
        imageId: 'hero-formal-banner',
        href: "/shop/gentlemens-quarters",
    },
]

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
      {carouselItems.map((item) => {
        const image = PlaceHolderImages.find(img => img.id === item.imageId);
        return (
          <CarouselItem key={item.id} className="h-full">
            <div className="w-full h-full relative group">
              <Image
                  src={image?.imageUrl || "https://picsum.photos/seed/default/1200/600"}
                  alt={item.title}
                  fill
                  priority
                  className="object-cover"
                  data-ai-hint={image?.imageHint || "luxury shoes"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8 md:p-16">
                  <div className="max-w-md text-white">
                      <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{item.subtitle}</p>
                      <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{item.title}</h2>
                      <p className="text-white/80 text-sm md:text-lg mb-8 line-clamp-2">{item.description}</p>
                      <Button asChild size="lg" className="btn-accent-market">
                          <Link href={item.href}>Explore Collection</Link>
                      </Button>
                  </div>
              </div>
            </div>
          </CarouselItem>
        );
      })}
    </CarouselContent>
    <CarouselPrevious className="left-4 bg-white/10 hover:bg-white text-white hover:text-primary border-none opacity-0 group-hover:opacity-100 transition-opacity" />
    <CarouselNext className="right-4 bg-white/10 hover:bg-white text-white hover:text-primary border-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </Carousel>
  )
}
