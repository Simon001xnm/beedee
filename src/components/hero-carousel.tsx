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
        super_title: "Limited Edition",
        title: "NEW BALANCE",
        description: "The perfect fusion of urban style and exceptional engineering. Crafted for those who demand more.",
        imageUrl: "https://images.unsplash.com/photo-1659738495795-f0aef20e809c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxuZXclMjBiYWxhbmNlfGVufDB8fHx8MTc1OTQwMTI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "new balance sneakers",
        href: "/shop/sneakers",
    },
     {
        id: 'ladies-boots',
        super_title: "Winter Elite",
        title: "FASHION BOOTS",
        description: "Elevate your stride with our latest leather collection. Defined by quality, designed for you.",
        imageUrl: "https://images.unsplash.com/photo-1545571597-3a20563b55cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx3b21lbiUyMGJvb3RzfGVufDB8fHx8MTc1OTQwMTI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "women boots",
        href: "/shop/ladies-boots",
    },
     {
        id: 'mens-formal',
        super_title: "The Official Look",
        title: "SIGNATURE FORMALS",
        description: "Exquisite craftsmanship meets modern sophistication. For the moments that matter.",
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
                  delay: 6000,
                  stopOnInteraction: true,
                }),
              ]}
        >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="w-full h-[80vh] min-h-[600px] relative bg-primary">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover opacity-70"
                    data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-accent font-bold tracking-[0.4em] uppercase text-sm md:text-base mb-4 drop-shadow-lg">{item.super_title}</p>
                        <h1 className="text-6xl md:text-9xl font-headline font-bold text-white mb-6 tracking-tight drop-shadow-2xl">{item.title}</h1>
                        <p className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">{item.description}</p>
                        <div className="flex gap-6 justify-center">
                            <Button asChild size="lg" className="btn-gold h-14 px-10 rounded-full">
                                <Link href={item.href}>SHOP THE COLLECTION</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white hover:text-primary h-14 px-10 rounded-full transition-all duration-300">
                                <Link href="/about">DISCOVER BEE & DEE</Link>
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