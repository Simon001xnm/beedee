
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getProducts, getProductsByCategory } from '@/lib/data';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { ProductCard } from '@/components/product-card';

export const metadata = {
  title: 'Bee & Dee | Premium Footwear Nairobi',
  description: 'Curated high-end footwear. From elite sneakers to timeless formal shoes. Defining Kenyan street culture with authority.',
};

export default function Home() {
  const allProducts = getProducts();
  const sneakerLab = getProductsByCategory('sneaker-lab').slice(0, 4);
  const gentlemenQuarters = getProductsByCategory('gentlemens-quarters').slice(0, 4);
  const eliteCraft = allProducts.filter(p => p.price > 3000).slice(0, 4);

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

      {/* Collection Section: The Sneaker Lab */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="editorial-subtitle">The Lab</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tighter">SNEAKER LAB</h2>
            </div>
            <Link href="/shop/sneaker-lab" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
              Explore The Lab <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {sneakerLab.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Elite Selection */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <Star className="h-8 w-8 text-accent mx-auto mb-6" />
            <span className="editorial-subtitle text-accent">Exclusive Edit</span>
            <h2 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter mb-6 uppercase">ELITE SERIES</h2>
            <p className="text-white/60 font-medium leading-relaxed italic">"Defined by rarity. Crafted for authority."</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {eliteCraft.map(product => (
              <ProductCard key={product.id} product={product} className="bg-primary" />
            ))}
          </div>
        </div>
      </section>

      {/* Collection Section: Gentlemen's Quarters */}
      <section className="section-padding bg-background border-t border-primary/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="editorial-subtitle">The Quarters</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tighter">GENTLEMEN'S QUARTERS</h2>
            </div>
            <Link href="/shop/gentlemens-quarters" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
              View Formal Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {gentlemenQuarters.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Vision */}
      <section className="section-padding bg-[#F5F5DC] border-t border-primary/5">
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
