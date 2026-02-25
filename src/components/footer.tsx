import Link from "next/link";
import { MessageCircle, Star, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <div className="relative h-16 w-40">
              <Image 
                src="/brands/Logo.png" 
                alt="Bee & Dee" 
                fill
                className="object-contain" 
              />
            </div>
            <p className="text-white/50 text-xs font-bold tracking-[0.15em] leading-loose uppercase max-w-xs">
              The ultimate destination for premium footwear in Kenya. We redefine luxury through comfort and authentic style.
            </p>
            <div className="flex gap-4">
               <Link href="https://wa.me/254106587150" target="_blank" className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-sm group">
                  <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110"/>
               </Link>
               <Link href="mailto:wambuilenny@gmail.com" className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-sm group">
                  <Mail className="h-5 w-5 transition-transform group-hover:scale-110"/>
               </Link>
            </div>
          </div>

          {/* Map Column */}
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <h4 className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">Visit Our Boutique</h4>
            <div className="rounded-2xl overflow-hidden h-48 border border-white/10 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8173429399225!2d36.825832!3d-1.284214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d65b38059f%3A0xc3f8e58f007b812d!2sLatema%20Rd%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <div className="absolute bottom-2 left-2 right-2 bg-primary/90 backdrop-blur-md p-2 rounded-lg text-[8px] font-bold tracking-widest uppercase text-white/80 flex items-center gap-2">
                <MapPin className="h-3 w-3 text-accent" />
                Latema Road, Nairobi
              </div>
            </div>
            <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">
              Juction Trade Centre, Latema Road off River Road, Nairobi
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">Concierge</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Our Story</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Contact Us</Link></li>
              <li><Link href="/return-policy" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Return Policy</Link></li>
              <li><Link href="/privacy" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-accent text-[11px] font-bold tracking-widest transition-colors uppercase">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">Stay Bold</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Subscribe for early access to elite releases. For direct inquiries, email us at <span className="text-accent">wambuilenny@gmail.com</span></p>
            <form action={`mailto:wambuilenny@gmail.com`} method="post" encType="text/plain" className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-3 text-xs rounded-lg flex-1 outline-none focus:border-accent transition-colors text-white" required />
              <Button type="submit" size="sm" className="btn-gold h-10 px-6 uppercase rounded-lg text-[9px]">JOIN</Button>
            </form>
          </div>
        </div>
        <Separator className="bg-white/5 mb-12" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
          <p>&copy; {new Date().getFullYear()} Bee & Dee Premium. Defined by Excellence.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
          </div>
          <p>Built by <span className="text-accent/60">Simon Styles Technologies</span></p>
        </div>
      </div>
    </footer>
  );
}
