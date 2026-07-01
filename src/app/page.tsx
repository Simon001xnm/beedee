import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getLandingExclusiveProducts, categories } from '@/lib/data';
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  RefreshCcw, 
  ChevronRight,
  LayoutGrid,
  User,
  Sparkles,
  Timer
} from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { HeroCarousel } from '@/components/hero-carousel';
import { FlashSaleBanner } from '@/components/flash-sale-banner';

export default function Home() {
  // Landing exclusives are the specific clearance offers with details in images
  const clearanceItems = getLandingExclusiveProducts();

  return (
    <div className="flex flex-col gap-8 pb-20">
      <FlashSaleBanner />
      
      {/* Marketplace Multi-Column Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-market py-4 lg:py-8">
          <div className="grid lg:grid-cols-[260px_1fr_260px] gap-6">
            
            {/* Left Column: Department Sidebar */}
            <div className="hidden lg:flex flex-col bg-gray-50/50 rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm font-black flex items-center gap-2 mb-6 text-primary uppercase tracking-wider">
                <LayoutGrid className="h-4 w-4" />
                Departments
              </h3>
              <nav className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    href={`/shop/${cat.id}`}
                    className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm transition-all text-sm font-medium text-gray-600 hover:text-primary"
                  >
                    <span className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {cat.name}
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-primary" />
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6 border-t border-gray-100">
                 <Link href="/shop" className="text-xs font-bold text-accent hover:underline flex items-center gap-2">
                    Browse All Collections <ArrowRight className="h-3 w-3" />
                 </Link>
              </div>
            </div>

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
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-primary font-black uppercase text-[10px] h-10 tracking-widest w-full">
                    Create Account
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-black uppercase text-[10px] h-10 tracking-widest w-full">
                    Sign In
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

      {/* Landing Page Clearance Gallery */}
      <section className="container-market">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] block mb-2">Limited Inventory</span>
            <h2 className="text-2xl md:text-5xl font-black text-primary flex items-center gap-4 tracking-tighter uppercase">
              <Sparkles className="h-6 w-6 md:h-10 md:w-10 text-accent" />
              BEE & DEE STOCK CLEARANCE
            </h2>
            <p className="text-sm text-muted-foreground mt-2 font-medium">STRICTLY LIMITED QUANTITIES. PRICES AS DISPLAYED ON IMAGES.</p>
          </div>
          <Link href="/shop" className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-2 group border-b-2 border-accent pb-2">
            Access Full Catalog <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {clearanceItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {clearanceItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed">
             <p className="text-muted-foreground">New clearance offers coming soon.</p>
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

      {/* Call to Action Banner */}
      <section className="container-market mt-10">
        <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="text-[10px] font-black tracking-[0.6em] text-accent uppercase">Everything Must Go</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">FINAL STOCK CLEARANCE PRICING.</h2>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary font-black uppercase tracking-widest text-[11px] h-16 px-16 rounded-full transition-all hover:scale-105 shadow-2xl">
                  <Link href="/shop">Shop All Collections</Link>
              </Button>
           </div>
        </div>
      </section>

    </div>
  );
}
