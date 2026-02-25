import Link from "next/link";
import { MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container-market">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="relative h-10 w-32">
              <Image 
                src="/brands/Logo.png" 
                alt="Bee & Dee" 
                fill
                className="object-contain" 
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bee & Dee is Kenya's premier footwear marketplace, providing authentic, high-quality shoes and handbags to modern individuals.
            </p>
            <div className="flex gap-4">
               <Link href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                  <Facebook className="h-4 w-4"/>
               </Link>
               <Link href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                  <Instagram className="h-4 w-4"/>
               </Link>
               <Link href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all">
                  <Twitter className="h-4 w-4"/>
               </Link>
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

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-500">Juction Trade Centre, Nairobi along Latema Road off Riverroad</p>
              </div>
              <div className="flex gap-3 items-center">
                <MessageCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-500">+254 106587150</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm text-gray-500">wambuilenny@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-100 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bee & Dee Premium Marketplace. All rights reserved.</p>
          <div className="flex gap-6">
            <Image src="https://picsum.photos/seed/visa/100/30" alt="Visa" width={40} height={15} className="grayscale opacity-50" />
            <Image src="https://picsum.photos/seed/mpesa/100/30" alt="M-Pesa" width={40} height={15} className="grayscale opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}