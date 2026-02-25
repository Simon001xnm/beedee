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
      <section className="bg-white py-8 md:py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
            {infoItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4 group">
                <div className="flex-shrink-0 p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-secondary group-hover:bg-primary transition-all duration-300">
                  <div className="group-hover:text-accent transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-black text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-primary uppercase">{item.title}</h3>
                  <p className="text-[7px] md:text-[10px] text-muted-foreground font-bold tracking-widest opacity-60 uppercase">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-white py-12 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
            <div className="max-w-xl text-left">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-0.5 w-6 bg-accent"></div>
                <h2 className="text-accent font-black tracking-[0.3em] text-[9px] md:text-[10px] uppercase">New Arrivals</h2>
              </div>
              <h3 className="text-3xl md:text-7xl font-headline font-bold text-primary tracking-tighter leading-tight mb-4 md:mb-6">
                DEFINING<br className="hidden md:block" /> THE STREETS
              </h3>
              <p className="text-muted-foreground text-[10px] md:text-sm font-medium tracking-wide leading-relaxed uppercase opacity-70">
                Curated footwear for the bold Kenyan aesthetic. Quality meets iconic style.
              </p>
            </div>
            <Button variant="outline" className="btn-gold h-12 md:h-14 px-8 md:px-10 rounded-full w-full md:w-auto text-[10px] md:text-[11px] font-black tracking-[0.2em]" asChild>
              <Link href="/shop" className="flex items-center gap-3">
                EXPLORE SHOP <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} className="bg-primary/5 p-3 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem]" />
            ))}
          </div>
        </div>
      </section>

      {/* Elite Section */}
      <section className="bg-[#0a1120] py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/[0.03] skew-x-12 translate-x-32 hidden md:block" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-12 md:mb-20 space-y-4">
              <Gem className="h-8 w-8 md:h-12 md:w-12 text-accent mx-auto mb-4 md:mb-6" />
              <h2 className="text-accent font-black tracking-[0.4em] text-[9px] md:text-[10px] uppercase">Elite Collection</h2>
              <h3 className="text-4xl md:text-8xl font-headline font-bold text-white tracking-tighter">THE LUXURY EDIT</h3>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
              {eliteCollection.map(product => (
                <ProductCard key={product.id} product={product} className="hover:scale-[1.02] transition-transform duration-500" />
              ))}
           </div>
           <div className="mt-12 md:mt-20 text-center">
              <Button size="lg" className="btn-gold h-12 md:h-16 px-10 md:px-16 rounded-full w-full md:w-auto text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em]" asChild>
                <Link href="/shop">SHOP ELITE CATEGORY</Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="bg-white py-12 md:py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-primary/40 uppercase mb-8 md:mb-12">Official Partners</h2>
          <div className="flex justify-center items-center gap-6 md:gap-24 flex-wrap opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {brands.map(brand => (
              <div key={brand.name} className="relative h-6 w-24 md:h-8 md:w-32">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="gradient-navy py-16 md:py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="max-w-3xl space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-accent font-black tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] uppercase underline underline-offset-[10px] decoration-accent/40">Our Vision</h2>
              <h3 className="text-3xl md:text-8xl font-headline font-bold leading-tight md:leading-[0.9] tracking-tighter uppercase">CRAFTED FOR THE<br className="hidden md:block"/><span className="text-accent">DARING.</span></h3>
            </div>
            <p className="text-white/60 text-base md:text-2xl font-medium leading-relaxed italic mx-auto">
              "Footwear isn't just about walking; it's about the statement you make with every stride. Bee & Dee brings that luxury conversation to Nairobi."
            </p>
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 pt-4">
              <Button size="lg" className="btn-gold h-14 md:h-16 px-10 md:px-12 rounded-full w-full sm:w-auto text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em]" asChild>
                <Link href="/shop">JOIN THE ELITE</Link>
              </Button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 md:-space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 md:border-4 border-[#0a1120] bg-secondary overflow-hidden">
                      <Image src={`https://picsum.photos/seed/user-${i}/100/100`} alt="user" width={48} height={48} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col text-left">
                   <span className="text-[10px] md:text-xs font-black tracking-widest text-accent uppercase">+1.2k Clients</span>
                   <span className="text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest">Nairobi Premium</span>
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
