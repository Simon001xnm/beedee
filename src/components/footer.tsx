
import Link from "next/link";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-foreground text-primary-foreground/90 border-t border-accent/20 mt-12">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
               <img src="/brands/Logo.png" alt="Bee & Dee" style={{ height: '50px', width: 'auto' }} />
            </Link>
            <p className="max-w-md text-muted-foreground">
              Discover your perfect pair at Bee & Dee. We offer a wide range of stylish and comfortable shoes for every occasion.
            </p>
            <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-foreground">+254 106587150</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-foreground">info@beedee.com</span>
                </div>
            </div>
             <div className="mt-4 flex space-x-4 text-foreground/80">
              <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram /></a>
              <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook /></a>
            </div>
          </div>
          <div>
            <p className="font-headline font-semibold text-foreground">Quick Links</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary">Shop</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/return-policy" className="text-muted-foreground hover:text-primary">Return Policy</Link></li>
            </ul>
          </div>
          <div>
             <p className="font-headline font-semibold text-foreground">Categories</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop/mens-shoes" className="text-muted-foreground hover:text-primary">Men's Shoes</Link></li>
              <li><Link href="/shop/ladies-shoes" className="text-muted-foreground hover:text-primary">Ladies' Shoes</Link></li>
              <li><Link href="/shop/sneakers" className="text-muted-foreground hover:text-primary">Sneakers</Link></li>
              <li><Link href="/shop/football-boots" className="text-muted-foreground hover:text-primary">Football Boots</Link></li>
               <li><Link href="/shop/handbags" className="text-muted-foreground hover:text-primary">Handbags</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
