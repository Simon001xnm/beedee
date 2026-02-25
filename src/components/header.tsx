'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  Instagram,
  Facebook
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { Badge } from "./ui/badge";
import Image from "next/image";

const mainNavLinks = categories.filter(c => !c.parentId).map(c => ({ href: `/shop/${c.id}`, label: c.name }));

export function Header() {
  const pathname = usePathname();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b">
      {/* Premium Top Bar */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="container flex justify-between items-center text-[9px] tracking-[0.2em] font-black uppercase">
          <div className="flex gap-6">
            <a href="tel:+254106587150" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone className="h-2.5 w-2.5 text-accent" /> +254 106 587 150</a>
            <a href="mailto:wambuilenny@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="h-2.5 w-2.5 text-accent" /> wambuilenny@gmail.com</a>
          </div>
          <div className="flex gap-4 items-center border-l border-white/10 pl-6">
            <span className="opacity-50">Follow The Journey</span>
            <div className="flex gap-3">
              <Link href="#" className="hover:text-accent transition-all hover:scale-110"><Instagram className="h-3 w-3" /></Link>
              <Link href="#" className="hover:text-accent transition-all hover:scale-110"><Facebook className="h-3 w-3" /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex h-16 md:h-20 items-center justify-between gap-2 md:gap-4 px-4 md:px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="/brands/Logo.png" alt="Bee & Dee Premium" width={90} height={35} className="w-auto h-7 md:h-10" />
        </Link>

        {/* Global Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {mainNavLinks.slice(0, 5).map(link => (
                <Link 
                    key={link.href} 
                    href={link.href} 
                    className={cn(
                        "text-[9px] xl:text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-300 relative group",
                        pathname?.startsWith(link.href) ? "text-accent" : "text-primary hover:text-accent"
                    )}
                >
                    {link.label}
                    <span className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                        pathname?.startsWith(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                </Link>
            ))}
        </div>

        {/* Action Icons Section */}
        <div className="flex items-center gap-0.5 md:gap-4">
            {/* Search - Hidden on small mobile to avoid layout breaking */}
            <div className="hidden md:flex relative group mr-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 group-focus-within:text-accent transition-colors" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-32 xl:w-48 bg-secondary/40 border-none rounded-full pl-9 h-9 text-xs font-bold tracking-wider focus-visible:ring-1 focus-visible:ring-accent transition-all"
              />
            </div>

            <Button variant="ghost" size="icon" asChild className="text-primary hover:text-accent hover:bg-transparent h-10 w-10">
              <Link href="/account">
                <User className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative text-primary hover:text-accent hover:bg-transparent h-10 w-10">
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Cart</span>
                 {totalItems > 0 && (
                  <Badge className="absolute top-1 right-1 h-4 w-4 md:h-5 md:w-5 justify-center p-0 bg-accent text-primary border-none text-[8px] md:text-[10px] font-black animate-in zoom-in duration-300">
                    {totalItems}
                  </Badge>
                )}
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-primary h-10 w-10"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[350px] border-l-primary/10">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="flex justify-start">
                    <Image src="/brands/Logo.png" alt="Bee & Dee" width={80} height={32} />
                  </SheetTitle>
                  <SheetDescription className="text-[9px] font-black uppercase tracking-widest text-primary/40">Premium Footwear</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-6">
                  <Link href="/shop" className="text-xl font-headline font-bold text-primary border-b border-primary/5 pb-2">Browse All</Link>
                  {mainNavLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-bold text-primary/60 hover:text-accent transition-colors tracking-tight"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Separator className="bg-primary/5" />
                  <div className="space-y-4 pt-2">
                     <Link href="/account" className="flex items-center gap-3 text-base font-bold text-primary/80">
                        <User className="h-4 w-4 text-accent" /> My Account
                     </Link>
                     <Link href="/cart" className="flex items-center justify-between text-base font-bold text-primary/80">
                        <span className="flex items-center gap-3">
                          <ShoppingCart className="h-4 w-4 text-accent" /> Shopping Bag
                        </span>
                        <Badge className="bg-accent text-primary font-black px-2">{totalItems}</Badge>
                     </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}