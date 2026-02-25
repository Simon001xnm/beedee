'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ShoppingCart,
  User,
  Phone,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { Badge } from "./ui/badge";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = categories.map(c => ({ href: `/shop/${c.id}`, label: c.name }));

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-white/5">
      {/* Concierge Top Bar */}
      <div className="bg-secondary text-primary py-2.5 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em]">
          <p>Global Express Shipping On All Orders Above KSh 10,000</p>
          <div className="flex gap-8">
            <a href="tel:+254106587150" className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="h-3 w-3" /> Concierge Hotline</a>
            <Link href="/about" className="hover:text-white transition-colors">Our Legacy</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-20 md:h-28 items-center justify-between px-6">
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-transparent">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r-white/5 w-full sm:max-w-md">
              <SheetHeader className="mb-12 border-b border-white/5 pb-8">
                <SheetTitle className="text-left font-headline text-3xl text-primary">BEE & DEE</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-10 uppercase text-lg font-black tracking-[0.3em]">
                <Link href="/shop" className="hover:text-primary transition-colors">Shop All Collections</Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
                <div className="pt-12 border-t border-white/5 flex flex-col gap-6 text-sm">
                  <Link href="/account" className="text-white/60">My Account</Link>
                  <Link href="/contact" className="text-white/60">Contact Concierge</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation - Curated Structure */}
        <nav className="hidden md:flex gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-white/50">
          <Link href="/shop/sneaker-lab" className="hover:text-primary transition-colors">The Lab</Link>
          <Link href="/shop/gentlemens-quarters" className="hover:text-primary transition-colors">Gentlemen</Link>
          <Link href="/shop/ladies-vault" className="hover:text-primary transition-colors">Vault</Link>
        </nav>

        {/* Central Brand Authority */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="relative h-10 md:h-16 w-36 md:w-56">
            <Image 
              src="/brands/Logo.png" 
              alt="Bee & Dee" 
              fill 
              className="object-contain"
              priority 
            />
          </div>
        </Link>

        {/* Action Systems */}
        <div className="flex items-center gap-3 md:gap-8">
          <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hidden sm:flex">
            <Search className="h-6 w-6" />
          </Button>
          
          <Button variant="ghost" size="icon" asChild className="text-white hover:bg-transparent hidden sm:flex">
            <Link href="/account"><User className="h-6 w-6" /></Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative text-white hover:bg-transparent">
            <Link href="/cart">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-[10px] font-black rounded-none">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}