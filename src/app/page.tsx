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
    icon: <Truck className="h-7 w-7 text-accent" />,
    title: 'NATIONWIDE DELIVERY',
    description: 'Fast shipping across Kenya.',
  },
  {
    icon: <RefreshCw className="h-7 w-7 text-accent" />,
    title: 'EASY RETURNS',
    description: '1 Day Return Policy',
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-accent" />,
    title: 'AUTHENTIC ONLY',
    description: '100% Quality Guaranteed',
  },
  {
    icon: <MessageCircle className="h-7 w-7 text-accent" />,
    title: '24/7 CONCIERGE',
    description: 'Dedicated Support team',
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
  
  // Luxury curated lists
  const eliteCollection = products.filter(p => p.price > 3000).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <FlashSaleBanner />

      <HeroCarousel />

      <section className="bg-white border-y relative z-10 -mt-10 mx-4 md:mx-20 rounded-2xl shadow-2xl border-none">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {infoItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4 group">
                <div className="p-4 rounded-[2rem] bg-secondary group-hover:bg-primary transition-all duration-500 shadow-sm">
                  <div className="group-hover:text-accent transition-colors duration-500 group-hover:scale-110 transform">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-black text-xs tracking-[0.2em] text-primary uppercase">{item.title}</h3>
                  <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest font-bold opacity-60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-accent"></div>
                <h2 className="text-accent font-black tracking-[0.4em] text-[10px] uppercase">New Arrivals</h2>
              </div>
              <h3 className="text-5xl md:text-7xl font-headline font-bold text-primary leading-[0.9]">SEASONAL<br/>EXCLUSIVES</h3>
            </div>
            <div className="flex flex-col items-end gap-6">
              <p className="text-muted-foreground text-sm font-medium max-w-xs text-right uppercase tracking-widest leading-relaxed">Discover the latest footwear innovations curated for the bold Kenyan aesthetic.</p>
              <Button variant="outline" className="border-primary/20 text-primary h-14 px-10 rounded-full hover:bg-primary hover:text-white transition-all group font-black tracking-widest text-[10px]" asChild>
                <Link href="/shop" className="flex items-center gap-3">
                  EXPLORE ALL <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Elite Section */}
      <section className="bg-[#0a1120] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-32" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
           <div className="text-center mb-20 space-y-6">
              <Gem className="h-10 w-10 text-accent mx-auto animate-float" />
              <h2 className="text-accent font-black tracking-[0.5em] text-[10px] uppercase">The Collection</h2>
              <h3 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter">ELITE CURATION</h3>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {eliteCollection.map(product => (
                <ProductCard key={product.id} product={product} className="bg-white/5 border-white/10 hover:border-accent/50 group" />
              ))}
           </div>
           <div className="mt-24 text-center">
              <Button size="lg" className="btn-gold h-16 px-16 rounded-full" asChild>
                <Link href="/shop">SHOP ELITE CATEGORY</Link>
              </Button>
           </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[10px] font-black tracking-[0.4em] text-primary/40 uppercase mb-16">Official Trusted Partners</h2>
          <div className="flex justify-center items-center gap-12 md:gap-32 flex-wrap opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
            {brands.map(brand => (
              <div key={brand.name} className="relative h-[40px] w-[140px] hover:scale-110 transition-transform">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-navy py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-accent font-black tracking-[0.4em] text-[10px] uppercase underline underline-offset-8">Our Vision</h2>
              <h3 className="text-5xl md:text-8xl font-headline font-bold leading-[0.95] tracking-tighter">CRAFTED FOR THE<br/><span className="text-accent">DARING.</span></h3>
            </div>
            <p className="text-white/60 text-lg max-w-lg font-medium leading-relaxed italic">"Footwear isn't just about walking; it's about the statement you make with every stride. Bee & Dee brings that conversation to Nairobi."</p>
            <div className="flex items-center gap-10">
              <Button size="lg" className="btn-gold h-16 px-12 rounded-full" asChild>
                <Link href="/shop">JOIN THE ELITE</Link>
              </Button>
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="h-12 w-12 rounded-full border-4 border-primary bg-secondary flex items-center justify-center overflow-hidden">
                    <Image src={`https://picsum.photos/seed/user-${i}/100/100`} alt="user" width={48} height={48} />
                  </div>
                ))}
                <div className="h-12 flex items-center pl-8 text-xs font-black tracking-widest text-accent uppercase">
                  +1.2k Bold Clients
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-3xl group-hover:bg-accent/30 transition-all duration-1000" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-1000">
               <Image 
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop" 
                  alt="Luxury Sneaker" 
                  fill 
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                  data-ai-hint="premium sneakers"
               />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
