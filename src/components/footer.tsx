import Link from "next/link";
import { Icons } from "./icons";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
               <Icons.LogoFull className="h-8 text-white" />
            </Link>
            <p className="max-w-md text-gray-400">
              Discover your perfect pair at Magical Shoekenya. We offer a wide range of stylish and comfortable shoes for every occasion.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-gray-300">
                <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+254 792 822146</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@magicalshoekenya.com</span>
                </div>
            </div>
             <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram /></a>
              <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook /></a>
            </div>
          </div>
          <div>
            <p className="font-headline font-semibold">Quick Links</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop" className="text-gray-300 hover:text-primary">Shop</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary">Contact</Link></li>
              <li><Link href="/return-policy" className="text-gray-300 hover:text-primary">Return Policy</Link></li>
            </ul>
          </div>
          <div>
             <p className="font-headline font-semibold">Categories</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop/mens-shoes" className="text-gray-300 hover:text-primary">Men's Shoes</Link></li>
              <li><Link href="/shop/ladies-shoes" className="text-gray-300 hover:text-primary">Ladies' Shoes</Link></li>
              <li><Link href="/shop/sneakers" className="text-gray-300 hover:text-primary">Sneakers</Link></li>
              <li><Link href="/shop/football-boots" className="text-gray-300 hover:text-primary">Football Boots</Link></li>
               <li><Link href="/shop/handbags" className="text-gray-300 hover:text-primary">Handbags</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
