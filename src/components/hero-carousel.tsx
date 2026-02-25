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

const carouselItems = [
    {
        id: 'promo-1',
        title: "Global Express Delivery",
        subtitle: "Fresh Arrivals From Premium Brands",
        description: "Experience the ultimate comfort with our latest collection.",
        imageUrl: "/brands/WhatsApp Image 2026-02-06 at 3.47.23 PM.jpeg",
        imageHint: "premium sneakers",
        href: "/shop",
    },
     {
        id: 'promo-2',
        title: "Exclusive Gentlemen's Edit",
        subtitle: "Style and Class Redefined",
        description: "Shop the most sought-after formal shoes of the season.",
        imageUrl: "https://picsum.photos/seed/hero-2/1200/600",
        imageHint: "mens formal shoes",
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
      {carouselItems.map((item) => (
        <CarouselItem key={item.id} className="h-full">
          <div className="w-full h-full relative group">
            <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                priority
                className="object-cover"
                data-ai-hint={item.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 md:p-16">
                <div className="max-w-md text-white">
                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{item.subtitle}</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{item.title}</h2>
                    <p className="text-white/80 text-sm md:text-lg mb-8 line-clamp-2">{item.description}</p>
                    <Button asChild size="lg" className="btn-accent-market">
                        <Link href={item.href}>Shop Now</Link>
                    </Button>
                </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-4 bg-white/10 hover:bg-white text-white hover:text-primary border-none opacity-0 group-hover:opacity-100 transition-opacity" />
    <CarouselNext className="right-4 bg-white/10 hover:bg-white text-white hover:text-primary border-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </Carousel>
  )
}