import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/data';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { ProductCard } from '@/components/product-card';

export const metadata = {
  title: 'Bee & Dee | Premium Footwear Nairobi',
  description: 'Curated high-end footwear. From elite sneakers to timeless formal shoes. Defining Kenyan street culture with authority.',
};

export default function Home() {
  const products = getProducts();
  const latestProducts = products.slice(0, 4);
  const eliteProducts = products.filter(p => p.price > 3000).slice(0, 4);

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Editorial Hero */}
      <section className="relative h-[85vh] md:h-[95vh] w-full flex items-center justify-center bg-primary overflow-hidden">
        <Image 
          src="https://picsum.photos/seed/editorial-hero/1920/1080"
          alt="Luxury Footwear Editorial"
          fill
          priority
          className="object-cover opacity-60 scale-105"
          data-ai-hint="luxury shoes"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40" />
        
        <div className="container relative z-10 px-4 text-center">
          <span className="editorial-subtitle text-white">Spring Summer 2024</span>
          <h1 className="editorial-title text-white mb-8 md:mb-12">
            URBAN<br /><span className="text-accent italic">LEGACY</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-accent px-12 h-14" asChild>
              <Link href="/shop">Explore Collection</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-12 h-14 rounded-none" asChild>
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals - Grid (1 col on mobile, 4 on desktop) */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="editorial-subtitle">The Catalog</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tighter">NEW ARRIVALS</h2>
            </div>
            <Link href="/shop" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
              View All Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* The Elite Edit - Immersive Crimson Section */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <Star className="h-8 w-8 text-accent mx-auto mb-6" />
            <span className="editorial-subtitle text-accent">Exclusive Selection</span>
            <h2 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter mb-6 uppercase">Elite Craft</h2>
            <p className="text-white/60 font-medium leading-relaxed italic">"For those who understand that authority begins from the ground up."</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {eliteProducts.map(product => (
              <ProductCard key={product.id} product={product} className="bg-primary" />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Vision */}
      <section className="section-padding bg-background border-t border-primary/5">
        <div className="container mx-auto flex flex-col items-center text-center">
          <Quote className="h-12 w-12 text-accent mb-12 opacity-30" />
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter max-w-4xl leading-[1.1] mb-12 uppercase">
            CRAFTED FOR THE<br /><span className="text-accent underline underline-offset-8">DARING.</span>
          </h2>
          <p className="text-xl md:text-3xl text-primary/60 font-medium max-w-3xl leading-snug mb-16 italic px-4">
            "Footwear is the foundation of identity. We bring global excellence to Nairobi, defined by quality and authority."
          </p>
          <Button className="btn-luxury h-16 px-16 text-sm" asChild>
            <Link href="/shop">Join The Movement</Link>
          </Button>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}