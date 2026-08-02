import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/data';
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  RefreshCcw, 
  User,
  Timer
} from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { HeroCarousel } from '@/components/hero-carousel';
import { FlashSaleBanner } from '@/components/flash-sale-banner';

export const revalidate = 3600;

export default function Home() {
  // Get all products to show in a large grid
  const allProducts = getProducts();

  return (
    <div className="flex flex-col gap-8 pb-20">
      <FlashSaleBanner />
      
      {/* Marketplace Multi-Column Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-market py-4 lg:py-8">
          <div className="grid lg:grid-cols-[1fr_260px] gap-6">
            
            {/* Center Column: Global Marketplace Slider */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100 min-h-[300px] md:min-h-[400px] lg:min-h-[550px]">
              <HeroCarousel />
            </div>

            {/* Right Column: User Promotional Zone */}
            <div className="hidden lg:flex flex-col gap-6">
              <div className="bg-primary rounded-xl p-6 text-white flex flex-col items-center text-center shadow-lg border border-white/10">
                <div className="w-16 h-16 bg-white/10 rounded-full mb-4 flex items-center justify-center border border-white/20">
                  <User className="h-8 w-8 text-accent" />
                </div>
                <p className="font-bold text-sm mb-1 uppercase tracking-widest">Welcome Back</p>
                <p className="text-[10px] text-white/60 mb-6">Access your premium footwear concierge</p>
                <div className="flex flex-col w-full gap-3">
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-primary font-black uppercase text-[10px] h-10 tracking-widest w-full">
                    <Link href="/register">Create Account</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-black uppercase text-[10px] h-10 tracking-widest w-full">
                    <Link href="/login">Sign In</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-6 flex-1 border border-accent/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                   <Timer className="h-12 w-12 text-accent" />
                </div>
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2 block animate-pulse">Limited Event</span>
                <h4 className="text-lg font-black text-primary leading-tight mb-4 uppercase">STOCK CLEARANCE: UNBEATABLE PRICES</h4>
                <Link href="/shop" className="text-xs font-bold text-primary underline underline-offset-4 decoration-accent hover:text-accent transition-colors">
                  Shop All Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Marketplace Gallery */}
      <section className="container-market px-2 sm:px-4 md:px-8 lg:px-12">
        {allProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {allProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed">
             <p className="text-muted-foreground">Refreshing inventory...</p>
          </div>
        )}
      </section>

      {/* Global Service Badges */}
      <section className="container-market mt-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="p-3 md:p-5 bg-primary/5 rounded-2xl">
              <Truck className="h-5 w-5 md:h-7 md:w-7 text-primary" />
            </div>
            <div>
              <p className="text-xs md:text-base font-black uppercase tracking-wider mb-1">Express Delivery</p>
              <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed">Swift dispatch across Nairobi and efficient countrywide shipping.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 md:gap-6 md:border-x md:px-12">
            <div className="p-3 md:p-5 bg-accent/5 rounded-2xl">
              <ShieldCheck className="h-5 w-5 md:h-7 md:w-7 text-accent" />
            </div>
            <div>
              <p className="text-xs md:text-base font-black uppercase tracking-wider mb-1">Quality Assurance</p>
              <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed">Each pair is rigorously inspected for authenticity and craftsmanship.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 md:gap-6">
            <div className="p-3 md:p-5 bg-primary/5 rounded-2xl">
              <RefreshCcw className="h-5 w-5 md:h-7 md:w-7 text-primary" />
            </div>
            <div>
              <p className="text-xs md:text-base font-black uppercase tracking-wider mb-1">Premium Exchange</p>
              <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed">Seamless 7-day exchange policy for guaranteed customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
