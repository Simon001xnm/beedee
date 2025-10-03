
import Link from "next/link";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
               <img src="/brands/Logo.png" alt="Bee & Dee" style={{ height: '50px', width: 'auto' }} />
            </Link>
            <p className="max-w-md text-primary-foreground/80">
              Discover your perfect pair at Bee & Dee. We offer a wide range of stylish and comfortable shoes for every occasion.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-primary-foreground/90">
                <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>+254 106587150</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>info@beedee.com</span>
                </div>
            </div>
             <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram /></a>
              <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook /></a>
            </div>
          </div>
          <div>
            <p className="font-headline font-semibold">Quick Links</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop" className="text-primary-foreground/90 hover:text-accent">Shop</Link></li>
              <li><Link href="/about" className="text-primary-foreground/90 hover:text-accent">About Us</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/90 hover:text-accent">Contact</Link></li>
              <li><Link href="/return-policy" className="text-primary-foreground/90 hover:text-accent">Return Policy</Link></li>
            </ul>
          </div>
          <div>
             <p className="font-headline font-semibold">Categories</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop/mens-shoes" className="text-primary-foreground/90 hover:text-accent">Men's Shoes</Link></li>
              <li><Link href="/shop/ladies-shoes" className="text-primary-foreground/90 hover:text-accent">Ladies' Shoes</Link></li>
              <li><Link href="/shop/sneakers" className="text-primary-foreground/90 hover:text-accent">Sneakers</Link></li>
              <li><Link href="/shop/football-boots" className="text-primary-foreground/90 hover:text-accent">Football Boots</Link></li>
               <li><Link href="/shop/handbags" className="text-primary-foreground/90 hover:text-accent">Handbags</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
