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
                  src="/WhatsApp Image 2026-05-07 at 12.36.54 PM.jpeg" 
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
                 <Link href="https://www.instagram.com/p/DYyjPMlsMX6/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-accent hover:text-primary transition-all text-[10px] font-black uppercase tracking-widest shadow-md hover:shadow-lg">
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

          {/* Support Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Direct Support</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-500">wambuilenny@gmail.com</p>
              </div>
              <div className="flex gap-3 items-center">
                <MessageCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-500">+254 106 587 150</p>
              </div>
              <div className="pt-4">
                <Link href="/contact" className="btn-accent-market py-3 inline-block">
                  Talk to Concierge
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-100 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p suppressHydrationWarning>
            &copy; {mounted ? currentYear : 2026} Bee & Dee Premium Marketplace. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-bold">Developed by</span>
            <Link 
              href="https://simonstyles.co.ke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-black hover:text-accent transition-colors"
            >
              simonstyles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
