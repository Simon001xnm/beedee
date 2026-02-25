'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { Badge } from "./ui/badge";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = categories
    .filter(c => !c.parentId)
    .map(c => ({ href: `/shop/${c.id}`, label: c.name }));

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-primary/5">
      {/* Editorial Top Bar */}
      <div className="bg-primary text-primary-foreground py-1.5 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>FREE NATIONWIDE DELIVERY ON ORDERS OVER KSH 10,000</p>
          <div className="flex gap-4">
            <a href="tel:+254106587150" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone className="h-3 w-3" /> +254 106 587 150</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 md:h-24 items-center justify-between px-4">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r-primary/10">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left font-headline text-2xl text-primary">BEE & DEE</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 uppercase text-sm font-bold tracking-widest">
                <Link href="/shop" className="hover:text-accent">Shop All</Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                ))}
                <div className="pt-8 border-t border-primary/10">
                  <Link href="/account" className="block mb-4">Account</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav - Left */}
        <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">
          <Link href="/shop" className="hover:text-primary transition-colors">Collections</Link>
          <Link href="/shop/sneakers" className="hover:text-primary transition-colors">Sneakers</Link>
        </nav>

        {/* Central Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="relative h-8 md:h-12 w-32 md:w-48">
            <Image 
              src="/brands/Logo.png" 
              alt="Bee & Dee" 
              fill 
              className="object-contain"
              priority 
            />
          </div>
        </Link>

        {/* Desktop Nav - Right & Actions */}
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70 mr-4">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <Button variant="ghost" size="icon" asChild className="text-primary hover:bg-transparent">
            <Link href="/account"><User className="h-5 w-5" /></Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative text-primary hover:bg-transparent">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-[10px] font-bold rounded-full">
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