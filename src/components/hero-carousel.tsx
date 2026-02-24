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
        id: 'new-balance-offer',
        super_title: "Limited Time Offer",
        title: "NEW BALANCE SPECIAL",
        description: "Premium comfort meets iconic design. Grab your pair from our exclusive New Balance collection today.",
        imageUrl: "/brands/WhatsApp Image 2026-02-06 at 3.47.23 PM.jpeg",
        imageHint: "new balance sneakers",
        href: "/shop/product/p0",
    },
     {
        id: 'jordan-voodoo',
        super_title: "Exclusive Release",
        title: "JORDAN VOODOO",
        description: "Make a statement with the most sought-after design of the season. Authentic, bold, and unapologetically you.",
        imageUrl: "/brands/WhatsApp Image 2026-02-05 at 3.15.11 PM (1).jpeg",
        imageHint: "jordan sneakers",
        href: "/shop/product/p6",
    },
     {
        id: 'adidas-samoa',
        super_title: "Street Classic",
        title: "ADIDAS SAMOA",
        description: "The timeless silhouette for everyday style. Experience the perfect blend of heritage and modern luxury.",
        imageUrl: "/brands/WhatsApp Image 2026-02-06 at 10.59.37 AM (1).jpeg",
        imageHint: "adidas sneakers",
        href: "/shop/product/p1",
    },
]

export function HeroCarousel() {
  return (
    <section>
        <Carousel 
            className="w-full"
            plugins={[
                Autoplay({
                  delay: 6000,
                  stopOnInteraction: true,
                }),
              ]}
        >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="w-full h-[85vh] min-h-[600px] relative bg-primary">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover opacity-80"
                    data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-accent font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 drop-shadow-md">{item.super_title}</p>
                        <h1 className="text-5xl md:text-8xl font-headline font-bold text-white mb-6 tracking-tight drop-shadow-2xl">{item.title}</h1>
                        <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-lg">{item.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-gold h-14 px-10 rounded-full text-sm tracking-widest font-bold">
                                <Link href={item.href}>SHOP NOW</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary h-14 px-10 rounded-full transition-all duration-300">
                                <Link href="/shop">VIEW COLLECTION</Link>
                            </Button>
                        </div>
                    </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-accent border-none h-14 w-14 transition-all" />
        <CarouselNext className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-accent border-none h-14 w-14 transition-all" />
        </Carousel>
    </section>
  )
}
