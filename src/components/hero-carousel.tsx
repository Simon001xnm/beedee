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
        id: 'new-balance',
        super_title: "Explore Your",
        title: "New Balance",
        description: "Comfortable and stylish sneakers for everyday wear.",
        imageUrl: "https://images.unsplash.com/photo-1659738495795-f0aef20e809c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxuZXclMjBiYWxhbmNlfGVufDB8fHx8MTc1OTQwMTI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "new balance sneakers",
        href: "/shop/sneakers",
    },
     {
        id: 'ladies-boots',
        super_title: "Step into Style",
        title: "Fashion Boots",
        description: "Discover our latest collection of women's boots.",
        imageUrl: "https://images.unsplash.com/photo-1545571597-3a20563b55cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx3b21lbiUyMGJvb3RzfGVufDB8fHx8MTc1OTQwMTI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "women boots",
        href: "/shop/ladies-boots",
    },
     {
        id: 'mens-formal',
        super_title: "Look Sharp",
        title: "Formal Shoes",
        description: "Elegant shoes for any formal occasion.",
        imageUrl: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmb3JtYWwlMjBzaG9lc3xlbnwwfHx8fDE3NTk0MDEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "men formal",
        href: "/shop/formal-shoes",
    },
]

export function HeroCarousel() {
  return (
    <section>
        <Carousel 
            className="w-full"
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
        >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="w-full h-[60vh] relative bg-secondary">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center text-white">
                        <p className="text-xl md:text-2xl font-light">{item.super_title}</p>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold my-4">{item.title}</h1>
                        <p className="text-lg md:text-xl max-w-lg mx-auto mb-8">{item.description}</p>
                        <div className="flex gap-4 justify-center">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
                                <Link href={item.href}>Shop Now</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                                <Link href="/about">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/50 border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/50 border-none" />
        </Carousel>
    </section>
  )
}
