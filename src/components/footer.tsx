import Link from "next/link";
import { Icons } from "./icons";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-12">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Icons.LogoFull className="h-8" />
            </Link>
            <p className="max-w-md">
              Discover your perfect pair at Magical Shoekenya. We offer a wide range of stylish and comfortable shoes for every occasion.
            </p>
          </div>
          <div>
            <p className="font-headline font-semibold text-foreground">Quick Links</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/return-policy" className="hover:text-primary">Return Policy</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-headline font-semibold text-foreground">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>info@magicalshoekenya.com</li>
              <li>+254 792 822146</li>
              <li>Sawa Mall, Nairobi</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram /></a>
              <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Magical Shoekenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
