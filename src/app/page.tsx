
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getProductsByCategory, categories } from '@/lib/data';
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  RefreshCcw, 
  ChevronRight,
  TrendingUp,
  LayoutGrid,
  User,
  Zap
} from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { HeroCarousel } from '@/components/hero-carousel';
import { cn } from '@/lib/utils';

export default function Home() {
  const trendingItems = getProductsByCategory('sneaker-lab').slice(0, 8);
  const luxuryEdit = getProductsByCategory('gentlemens-quarters').slice(0, 4);

  return (
    <div className="flex flex-col gap-8 pb-20">
      
      {/* Marketplace Multi-Column Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-market py-4 lg:py-8">
          <div className="grid lg:grid-cols-[240px_1fr_240px] gap-6">
            
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
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100 min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <HeroCarousel />
            </div>

            {/* Right Column: User Trust & Promotional Zone */}
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

              <div className="bg-accent/5 rounded-xl p-6 flex-1 border border-accent/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                   <Zap className="h-12 w-12 text-accent" />
                </div>
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2 block">Flash Deal</span>
                <h4 className="text-lg font-black text-primary leading-tight mb-4">Save 20% on your first premium order</h4>
                <Link href="/shop" className="text-xs font-bold text-primary underline underline-offset-4 decoration-accent hover:text-accent transition-colors">
                  Claim Offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Service Badges */}
      <section className="container-market">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="flex items-start gap-4 md:gap-5">
            <div className="p-3 md:p-4 bg-primary/5 rounded-2xl">
              <Truck className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-black uppercase tracking-wider mb-1">Express Delivery</p>
              <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">Swift dispatch across Nairobi and efficient countrywide shipping.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 md:gap-5 md:border-x md:px-10">
            <div className="p-3 md:p-4 bg-accent/5 rounded-2xl">
              <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-accent" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-black uppercase tracking-wider mb-1">Quality Assurance</p>
              <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">Each pair is rigorously inspected for authenticity and craftsmanship.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 md:gap-5">
            <div className="p-3 md:p-4 bg-primary/5 rounded-2xl">
              <RefreshCcw className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-black uppercase tracking-wider mb-1">Premium Exchange</p>
              <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">Seamless 7-day exchange policy for guaranteed customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Grid: Trending Collections */}
      <section className="container-market">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] block mb-2">Curated Trends</span>
            <h2 className="text-2xl md:text-3xl font-black text-primary flex items-center gap-3 tracking-tighter uppercase">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-accent" />
              WEEKLY BESTSELLERS
            </h2>
          </div>
          <Link href="/shop" className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-2 group">
            Shop All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Structured Category Showcase - Elite Section */}
      <section className="bg-primary py-12 md:py-24 text-white overflow-hidden">
        <div className="container-market">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-10 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.6em]">The Elite Edit</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight uppercase">MASTERING THE STRIDE.</h2>
                <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Discover our Gentlemen's Quarters collection, where heritage craftsmanship meets contemporary Kenyan style.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black uppercase tracking-widest text-[10px] px-10 h-14 rounded-full shadow-xl transition-all hover:scale-105">
                  <Link href="/shop/gentlemens-quarters">View Collection</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white text-white hover:text-primary font-black uppercase tracking-widest text-[10px] px-10 h-14 rounded-full transition-all">
                  <Link href="/shop">All Departments</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
               {luxuryEdit.map((product, idx) => (
                 <div key={product.id} className={cn("transition-all duration-500", idx % 2 !== 0 ? 'lg:mt-16' : '')}>
                    <ProductCard product={product} className="bg-white/5 border-white/10 hover:bg-white/10 text-white" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
