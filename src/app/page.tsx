import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/data';
import { CreditCard, RefreshCw, Truck, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { FlashSaleBanner } from '@/components/flash-sale-banner';
import { ScrollToTop } from '@/components/scroll-to-top';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProductCard } from '@/components/product-card';
import { formatPrice } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const infoItems = [
  {
    icon: <Truck className="h-6 w-6 text-accent" />,
    title: 'FREE SHIPPING',
    description: 'On All Orders Over Ksh 10,000.',
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-accent" />,
    title: 'EASY RETURNS',
    description: '1 Day Return Policy',
  },
  {
    icon: <CreditCard className="h-6 w-6 text-accent" />,
    title: 'SECURE PAYMENT',
    description: '100% Secure Payment',
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-accent" />,
    title: 'ONLINE SUPPORT',
    description: 'Email, SMS, WhatsApp',
  },
];

const brands = [
  { name: 'Adidas', logo: '/brands/Adidas logo.jpeg' },
  { name: 'New Balance', logo: '/brands/newbalance logo.png' },
  { name: 'Nike', logo: '/brands/nike logo.jpeg' },
  { name: 'Tommy Hilfiger', logo: '/brands/hilfiger-logo.png' },
];

const footerProductLists = {
  "Recent": getProducts().slice(0, 3),
  "Best Selling": getProducts().slice(3, 6),
  "On Sale": getProducts().slice(6, 9),
  "Top Rated": getProducts().slice(9, 12),
}

export default function Home() {
  const latestProducts = getProducts().slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen">
      <FlashSaleBanner />

      <HeroCarousel />

      <section className="bg-white border-y">
        <div className="container mx-auto px-4 md:px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {infoItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2 group">
                <div className="p-3 rounded-full bg-primary/5 group-hover:bg-primary transition-colors duration-300">
                  <div className="group-hover:text-accent transition-colors">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-widest text-primary">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="text-accent font-bold tracking-[0.2em] text-sm uppercase">Curated Collection</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary">LATEST ARRIVALS</h3>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white group" asChild>
              <Link href="/shop" className="flex items-center gap-2">
                View Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-12">Authorized Retailers & Trusted Partners</h2>
          <div className="flex justify-center items-center gap-12 md:gap-24 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map(brand => (
              <div key={brand.name} className="relative h-[60px] w-[120px]">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-navy py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-accent font-bold tracking-widest text-sm uppercase">Join the Elite</h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold leading-tight">PREMIUM FOOTWEAR FOR THE MODERN BOLD</h3>
            <p className="text-white/70 text-lg max-w-md">Experience the perfect fusion of luxury aesthetics and everyday comfort with Bee & Dee's exclusive collection.</p>
            <Button size="lg" className="btn-gold px-10">
              <Link href="/shop">Start Exploring</Link>
            </Button>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20">
             <Image 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzaG9lc3xlbnwwfHx8fDE3NTk0MDEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Luxury Lifestyle" 
                fill 
                className="object-cover" 
                data-ai-hint="luxury shoes"
             />
          </div>
        </div>
      </section>

      <footer className="bg-secondary/20 text-foreground pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(footerProductLists).map(([title, products]) => (
              <div key={title} className="space-y-6">
                <h3 className="font-headline font-bold text-xl text-primary border-l-4 border-accent pl-4">{title.toUpperCase()}</h3>
                <div className="flex flex-col gap-6">
                  {products.map(product => (
                    <div key={product.id} className="flex items-center gap-4 group cursor-pointer">
                      <Link href={`/shop/product/${product.id}`} className="block w-20 h-20 bg-white shadow-sm rounded-lg overflow-hidden flex-shrink-0">
                         <Image src={product.images[0].url} alt={product.name} width={80} height={80} className="object-contain w-full h-full transition-transform group-hover:scale-110" />
                      </Link>
                      <div className="space-y-1">
                        <Link href={`/shop/product/${product.id}`} className="font-bold text-sm text-primary hover:text-accent transition-colors line-clamp-2">{product.name}</Link>
                        {title === 'Top Rated' && (
                           <div className="flex items-center gap-0.5">
                             {[...Array(5)].map((_,i) => <Star key={i} className="h-3 w-3 text-accent fill-accent" />)}
                           </div>
                        )}
                        <p className="text-primary font-bold text-base">{formatPrice(product.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Separator className="my-16 bg-primary/10" />
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <p className="font-medium">&copy; {new Date().getFullYear()} Bee & Dee Premium. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="/return-policy" className="hover:text-primary transition-colors">Returns</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
              <Link href="/about" className="hover:text-primary transition-colors">Our Story</Link>
            </div>
            <p className="text-xs opacity-60">
              By <a href="https://simonstyles.co.ke" target="_blank" className="underline hover:text-primary">Simon Styles Technologies</a>
            </p>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}