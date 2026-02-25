import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getProductsByCategory } from '@/lib/data';
import { ArrowRight, Star, Quote, ArrowUpRight } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { ProductCard } from '@/components/product-card';

export const metadata = {
  title: 'Bee & Dee | Premium Footwear Nairobi',
  description: 'Curated high-end footwear. From elite sneakers to timeless formal shoes. Defining Kenyan street culture with authority.',
};

export default function Home() {
  const sneakerLab = getProductsByCategory('sneaker-lab').slice(0, 4);
  const gentlemenQuarters = getProductsByCategory('gentlemens-quarters').slice(0, 4);
  const ladiesVault = getProductsByCategory('ladies-vault').slice(0, 4);

  return (
    <div className="flex flex-col overflow-x-hidden bg-background">
      {/* Editorial Hero: The Split Entry */}
      <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center border-b border-white/5">
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden group">
          <Image 
            src="https://picsum.photos/seed/hero-left/1200/1600"
            alt="Premium Sneaker Culture"
            fill
            priority
            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            data-ai-hint="luxury sneakers"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8 md:p-24 bg-background relative z-10">
          <div className="max-w-xl">
            <span className="editorial-subtitle">EST. NAIROBI 2024</span>
            <h1 className="editorial-title mb-10">
              URBAN<br />
              <span className="text-primary">ELITE</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-md">
              The definitive destination for premium footwear. Curated for the modern individual who demands authority and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="btn-gold" asChild>
                <Link href="/shop">Explore Shop <ArrowUpRight className="h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" className="btn-outline-white" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Label */}
        <div className="absolute bottom-12 left-12 hidden lg:block z-20">
            <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase text-white/40">
                <span className="h-px w-12 bg-white/20"></span>
                Defining Footwear Excellence
            </div>
        </div>
      </section>

      {/* Structured Category Gateway */}
      <section className="border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { id: 'sneaker-lab', name: 'Sneaker Lab', desc: 'Street Culture Authority' },
            { id: 'gentlemens-quarters', name: 'Gentlemen\'s Quarters', desc: 'Timeless Formal Excellence' },
            { id: 'ladies-vault', name: 'Ladies\' Vault', desc: 'Modern Feminine Power' }
          ].map((cat, idx) => (
            <Link 
              key={cat.id} 
              href={`/shop/${cat.id}`} 
              className={`group relative h-[400px] md:h-[600px] flex items-end p-8 md:p-12 overflow-hidden ${idx !== 2 ? 'md:border-r border-white/5' : ''}`}
            >
              <Image 
                src={`https://picsum.photos/seed/${cat.id}/800/1200`}
                alt={cat.name}
                fill
                className="object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                data-ai-hint={cat.id.replace('-', ' ')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="relative z-10 w-full transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-2 block">Collection 0{idx + 1}</span>
                <h3 className="text-3xl md:text-5xl font-headline font-black text-white mb-2">{cat.name}</h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  View Collection <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Immersive Showcase: The Sneaker Lab */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="editorial-subtitle">Premium Drops</span>
              <h2 className="text-5xl md:text-8xl font-headline font-black text-white tracking-tighter">THE SNEAKER LAB</h2>
            </div>
            <Link href="/shop/sneaker-lab" className="btn-outline-white h-14 px-8 text-xs">
              View All Sneakers
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            {sneakerLab.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Dark Immersive Section: Elite Series */}
      <section className="bg-black section-padding relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-32">
            <Star className="h-10 w-10 text-primary mx-auto mb-8 animate-pulse" />
            <span className="editorial-subtitle">The Absolute Pinnacle</span>
            <h2 className="text-6xl md:text-[12rem] font-headline font-black text-white leading-none mb-8">ELITE</h2>
            <p className="text-primary text-sm font-black tracking-[0.5em] uppercase">Hand-Picked Authority</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            {gentlemenQuarters.map(product => (
              <ProductCard key={product.id} product={product} isDark />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Visionary Quote */}
      <section className="section-padding bg-secondary flex flex-col items-center text-center">
        <Quote className="h-16 w-16 text-primary mb-12 opacity-40" />
        <h2 className="text-4xl md:text-7xl font-headline font-black text-white tracking-tighter max-w-5xl leading-tight mb-16">
          WE DON'T JUST SELL SHOES. WE PROVIDE THE <span className="text-primary">FOUNDATION</span> FOR YOUR IDENTITY.
        </h2>
        <Button className="btn-gold h-20 px-16 text-sm" asChild>
          <Link href="/shop">Enter The Movement</Link>
        </Button>
      </section>

      <WhatsAppButton />
    </div>
  );
}