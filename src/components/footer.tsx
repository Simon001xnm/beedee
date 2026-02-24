import Link from "next/link";
import { MessageCircle, Star, Mail } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <Image src="/brands/Logo.png" alt="Bee & Dee" width={140} height={60} className="brightness-0 invert opacity-90" />
            <p className="text-white/50 text-xs font-bold tracking-[0.15em] leading-loose uppercase">
              The ultimate destination for premium footwear in Kenya. We redefine luxury through comfort and authentic style.
            </p>
            <div className="flex gap-6">
               <Link href="https://wa.me/254106587150" target="_blank" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-sm"><MessageCircle className="h-4 w-4"/></Link>
               <Link href="mailto:wambuilenny@gmail.com" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-sm"><Mail className="h-4 w-4"/></Link>
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">Collections</h4>
            <ul className="space-y-4">
              <li><Link href="/shop/sneakers" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">The Sneaker Hub</Link></li>
              <li><Link href="/shop/mens-shoes" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Gentlemen's Edit</Link></li>
              <li><Link href="/shop/ladies-shoes" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">The Lady Luxury</Link></li>
              <li><Link href="/shop/kids-shoes" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">NextGen Kicks</Link></li>
            </ul>
          </div>
           <div className="space-y-8">
            <h4 className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">Concierge</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Our Story</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Contact Us</Link></li>
              <li><Link href="/return-policy" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Return Policy</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Shipping Info</Link></li>
            </ul>
          </div>
           <div className="space-y-8">
            <h4 className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">Stay Bold</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Subscribe for early access to elite releases. For direct inquiries, email us at <span className="text-accent">wambuilenny@gmail.com</span></p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-3 text-xs rounded-lg flex-1 outline-none focus:border-accent transition-colors text-white" />
              <Button size="sm" className="bg-accent text-primary font-black text-[9px] tracking-widest px-6 uppercase rounded-lg hover:bg-accent/80 transition-all">JOIN</Button>
            </div>
          </div>
        </div>
        <Separator className="bg-white/5 mb-12" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
          <p>&copy; {new Date().getFullYear()} Bee & Dee Premium. Defined by Excellence.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms</Link>
          </div>
          <p>Built by <span className="text-accent/60">Simon Styles Technologies</span></p>
        </div>
      </div>
    </footer>
  );
}
