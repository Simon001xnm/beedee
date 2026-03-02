'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container-market">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info & Social Buttons */}
          <div className="space-y-6">
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-10 w-32">
                <Image 
                  src="/brands/Logo.png" 
                  alt="Bee & Dee" 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bee & Dee is Kenya's premier footwear marketplace, providing authentic, high-quality shoes and handbags to modern individuals.
            </p>
            <div className="flex flex-col gap-3">
               <h4 className="font-bold text-[10px] text-primary uppercase tracking-[0.3em]">Follow Our Journey</h4>
               <div className="flex flex-wrap gap-2">
                 <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-accent hover:text-primary transition-all text-[10px] font-black uppercase tracking-widest shadow-md hover:shadow-lg">
                    <Facebook className="h-3 w-3"/>
                    Facebook
                 </Link>
                 <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-accent hover:text-primary transition-all text-[10px] font-black uppercase tracking-widest shadow-md hover:shadow-lg">
                    <Instagram className="h-3 w-3"/>
                    Instagram
                 </Link>
                 <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-accent hover:text-primary transition-all text-[10px] font-black uppercase tracking-widest shadow-md hover:shadow-lg">
                    <Twitter className="h-3 w-3"/>
                    Twitter
                 </Link>
               </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/return-policy" className="text-sm text-gray-500 hover:text-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-primary transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Shopping Guides</h4>
            <ul className="space-y-3">
              <li><Link href="/shop/sneaker-lab" className="text-sm text-gray-500 hover:text-primary transition-colors">The Sneaker Lab</Link></li>
              <li><Link href="/shop/gentlemens-quarters" className="text-sm text-gray-500 hover:text-primary transition-colors">Gentlemen's Quarters</Link></li>
              <li><Link href="/shop/ladies-vault" className="text-sm text-gray-500 hover:text-primary transition-colors">The Ladies' Vault</Link></li>
              <li><Link href="/shop/mini-icons" className="text-sm text-gray-500 hover:text-primary transition-colors">Mini Icons (Kids)</Link></li>
              <li><Link href="/shop" className="text-sm text-gray-500 hover:text-primary transition-colors">Shop All Collections</Link></li>
            </ul>
          </div>

          {/* Visit Us & Map */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Our Showroom</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-500">Junction Trade Centre, Nairobi along Latema Road off Riverroad</p>
              </div>
              {/* Styled Map Container */}
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100 h-40 w-full relative group bg-gray-50">
                {mounted ? (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819036986423!2d36.82522631535216!3d-1.2823659990647184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d638708c99%3A0x6b2e75e5c7a52a33!2sLatema%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    title="Bee & Dee Location Map"
                  ></iframe>
                ) : (
                  <div className="w-full h-full animate-pulse bg-gray-200" />
                )}
                <div className="absolute inset-0 pointer-events-none border-2 border-primary/5 rounded-xl"></div>
              </div>
              <div className="flex gap-3 items-center">
                <MessageCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-500">+254 106 587 150</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-100 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p suppressHydrationWarning>
            &copy; {mounted ? currentYear : 2026} Bee & Dee Premium Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}