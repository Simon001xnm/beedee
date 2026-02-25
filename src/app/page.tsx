import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/data';
import { Truck, RefreshCw, MessageCircle, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { FlashSaleBanner } from '@/components/flash-sale-banner';
import { ScrollToTop } from '@/components/scroll-to-top';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProductCard } from '@/components/product-card';

const infoItems = [
  {
    icon: <Truck className="h-5 w-5 md:h-6 md:w-6 text-accent" />,
    title: 'FAST DELIVERY',
    description: 'NATIONWIDE SHIPPING',
  },
  {
    icon: <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-accent" />,
    title: 'EASY RETURNS',
    description: '1 DAY POLICY',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-accent" />,
    title: '100% AUTHENTIC',
    description: 'QUALITY CHECKED',
  },
  {
    icon: <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-accent" />,
    title: '24/7 SUPPORT',
    description: 'VIA WHATSAPP',
  },
];

const brands = [
  { name: 'Adidas', logo: '/brands/Adidas logo.jpeg' },
  { name: 'New Balance', logo: '/brands/newbalance logo.png' },
  { name: 'Nike', logo: '/brands/nike logo.jpeg' },
  { name: 'Tommy Hilfiger', logo: '/brands/hilfiger-logo.png' },
];

export default function Home() {
  const products = getProducts();
  const latestProducts = products.slice(0, 8);
  const eliteCollection = products.filter(p => p.price > 3000).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <FlashSaleBanner />
      <HeroCarousel />

      {/* Trust Section */}
      <section className="bg-white py-8 md:py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {infoItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group">
                <div className="flex-shrink-0 p-3 md:p-4 rounded-2xl bg-secondary group-hover:bg-primary transition-all duration-300">
                  <div className="group-hover:text-accent transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-black text-[10px] md:text-xs tracking-[0.2em] text-primary uppercase">{item.title}</h3>
                  <p className="text-[9px] md:text-[11px] text-muted-foreground font-bold tracking-widest opacity-60 uppercase">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals - One column on mobile for absolute clarity */}
      <section className="bg-white py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-10 bg-accent"></div>
                <h2 className="text-accent font-black tracking-[0.4em] text-[10px] md:text-xs uppercase">New Arrivals</h2>
              </div>
              <h3 className="text-4xl md:text-8xl font-headline font-bold text-primary tracking-tighter leading-[0.9] mb-6 md:mb-8">
                DEFINING<br className="hidden md:block" /> THE STREETS
              </h3>
              <p className="text-muted-foreground text-xs md:text-lg font-medium tracking-wide leading-relaxed uppercase opacity-70 max-w-lg">
                Curated footwear for the bold Kenyan aesthetic. Quality meets iconic style.
              </p>
            </div>
            <Button className="btn-gold h-14 md:h-20 px-10 md:px-16 rounded-full w-full md:w-auto text-[11px] md:text-xs font-black tracking-[0.3em]" asChild>
              <Link href="/shop" className="flex items-center gap-4">
                EXPLORE SHOP <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Elite Section - One column on mobile for luxury focus */}
      <section className="bg-primary py-16 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/[0.02] skew-x-12 translate-x-32 hidden md:block" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-16 md:mb-32 space-y-6">
              <Gem className="h-10 w-10 md:h-16 md:w-16 text-accent mx-auto mb-6 md:mb-10 animate-pulse" />
              <h2 className="text-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase">Elite Collection</h2>
              <h3 className="text-5xl md:text-9xl font-headline font-bold text-white tracking-tighter leading-[0.85]">THE LUXURY EDIT</h3>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {eliteCollection.map(product => (
                <ProductCard key={product.id} product={product} className="bg-white/5 border-white/10" />
              ))}
           </div>
           <div className="mt-16 md:mt-32 text-center">
              <Button size="lg" className="btn-gold h-14 md:h-20 px-12 md:px-20 rounded-full w-full md:w-auto text-[11px] md:text-sm font-black tracking-[0.3em]" asChild>
                <Link href="/shop">SHOP ELITE CATEGORY</Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="bg-white py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] md:tracking-[0.5em] text-primary/30 uppercase mb-12 md:mb-20">Official Partners</h2>
          <div className="flex justify-center items-center gap-10 md:gap-32 flex-wrap opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
            {brands.map(brand => (
              <div key={brand.name} className="relative h-8 w-32 md:h-10 md:w-40">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - Simplified for absolute clarity */}
      <section className="bg-primary py-20 md:py-40 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="max-w-4xl space-y-12 md:space-y-20">
            <div className="space-y-6 md:space-y-10">
              <h2 className="text-accent font-black tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-xs uppercase underline underline-offset-[12px] decoration-accent/40">Our Vision</h2>
              <h3 className="text-4xl md:text-9xl font-headline font-bold leading-[0.85] tracking-tighter uppercase">CRAFTED FOR THE<br className="hidden md:block"/><span className="text-accent">DARING.</span></h3>
            </div>
            <p className="text-white/60 text-lg md:text-4xl font-medium leading-relaxed italic mx-auto max-w-3xl">
              "Footwear isn't just about walking; it's about the statement you make with every stride. Bee & Dee brings that luxury conversation to Nairobi."
            </p>
            <div className="flex flex-col items-center justify-center gap-10 pt-4">
              <Button size="lg" className="btn-gold h-16 md:h-24 px-12 md:px-24 rounded-full w-full sm:w-auto text-[11px] md:text-base font-black tracking-[0.3em]" asChild>
                <Link href="/shop">JOIN THE ELITE</Link>
              </Button>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-12 w-12 md:h-16 md:w-16 rounded-full border-4 border-primary bg-secondary overflow-hidden shadow-2xl">
                      <Image src={`https://picsum.photos/seed/user-${i}/100/100`} alt="user" width={64} height={64} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col text-left">
                   <span className="text-xs md:text-sm font-black tracking-widest text-accent uppercase">+1.2k Clients</span>
                   <span className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">Nairobi Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}