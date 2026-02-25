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
      <section className="bg-white py-12 md:py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="flex-shrink-0 p-5 rounded-3xl bg-secondary group-hover:bg-primary transition-all duration-500">
                  <div className="group-hover:text-accent transition-colors duration-500 scale-125">
                    {item.icon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-black text-xs md:text-sm tracking-[0.3em] text-primary uppercase">{item.title}</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-bold tracking-[0.4em] opacity-60 uppercase mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-white py-20 md:py-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-accent rounded-full"></div>
                <h2 className="text-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase">The New Standard</h2>
              </div>
              <h3 className="text-5xl md:text-9xl font-headline font-bold text-primary tracking-tighter leading-[0.85]">
                URBAN<br />LEGACY
              </h3>
              <p className="text-muted-foreground text-sm md:text-xl font-medium tracking-wide uppercase opacity-70 max-w-xl leading-relaxed">
                Handpicked collections defining the next era of Kenyan street culture.
              </p>
            </div>
            <Button className="btn-gold h-16 md:h-24 px-12 md:px-20 rounded-full w-full md:w-auto text-[11px] md:text-sm font-black tracking-[0.4em]" asChild>
              <Link href="/shop" className="flex items-center gap-6">
                VIEW CATALOG <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Elite Section - The Luxury Edit */}
      <section className="bg-primary py-24 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-24 md:mb-40 space-y-8">
              <Gem className="h-12 w-12 md:h-20 md:w-20 text-accent mx-auto mb-8 animate-pulse" />
              <h2 className="text-accent font-black tracking-[0.6em] text-[10px] md:text-xs uppercase underline underline-offset-[16px]">The Luxury Edit</h2>
              <h3 className="text-6xl md:text-[11rem] font-headline font-bold text-white tracking-tighter leading-[0.8]">ELITE<br/>CRAFT</h3>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
              {eliteCollection.map(product => (
                <ProductCard key={product.id} product={product} className="bg-white/5 border-white/10" />
              ))}
           </div>

           <div className="mt-24 md:mt-40 text-center">
              <Button size="lg" className="btn-gold h-16 md:h-24 px-12 md:px-24 rounded-full w-full md:w-auto text-[11px] md:text-base font-black tracking-[0.4em]" asChild>
                <Link href="/shop">EXPLORE ELITE</Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="bg-white py-20 md:py-32 border-b">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[10px] md:text-xs font-black tracking-[0.6em] text-primary/30 uppercase mb-20">Global Partners</h2>
          <div className="flex justify-center items-center gap-12 md:gap-40 flex-wrap opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            {brands.map(brand => (
              <div key={brand.name} className="relative h-10 w-40 md:h-12 md:w-56">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-primary py-24 md:py-48 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="max-w-5xl space-y-16 md:space-y-24">
            <div className="space-y-8">
              <h2 className="text-accent font-black tracking-[0.6em] text-[10px] md:text-xs uppercase">The Vision</h2>
              <h3 className="text-5xl md:text-[10rem] font-headline font-bold leading-[0.8] tracking-tighter uppercase">CRAFTED FOR<br/><span className="text-accent">LEGENDS.</span></h3>
            </div>
            <p className="text-white/60 text-xl md:text-5xl font-medium leading-tight italic mx-auto max-w-4xl tracking-tight">
              "Footwear is the foundation of authority. We bring global excellence to the streets of Nairobi, one pair at a time."
            </p>
            <div className="flex flex-col items-center justify-center gap-12 pt-8">
              <Button size="lg" className="btn-gold h-20 md:h-28 px-16 md:px-32 rounded-full w-full sm:w-auto text-[12px] md:text-lg font-black tracking-[0.4em]" asChild>
                <Link href="/shop">JOIN THE MOVEMENT</Link>
              </Button>
              <div className="flex items-center gap-8">
                <div className="flex -space-x-6">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-16 w-16 md:h-24 md:w-24 rounded-full border-4 border-primary bg-secondary overflow-hidden shadow-2xl relative">
                      <Image src={`https://picsum.photos/seed/elite-user-${i}/150/150`} alt="user" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col text-left">
                   <span className="text-sm md:text-lg font-black tracking-widest text-accent uppercase">+2.5k Elite Clients</span>
                   <span className="text-[10px] md:text-sm font-bold text-white/40 uppercase tracking-[0.4em]">Established in Nairobi</span>
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
