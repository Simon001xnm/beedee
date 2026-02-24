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
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="container flex justify-between items-center text-[10px] tracking-widest font-bold uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3 text-accent" /> +254 106587150</span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3 text-accent" /> support@beedee.luxury</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>Follow Our Journey</span>
            <Link href="#" className="hover:text-accent transition-colors"><Instagram className="h-3.5 w-3.5" /></Link>
            <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="/brands/Logo.png" alt="Bee & Dee" width={110} height={45} className="w-auto h-8 md:h-10" />
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex relative flex-1 max-w-md mx-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search our collection..."
            className="w-full bg-secondary/50 border-none rounded-full pl-10 h-11 focus-visible:ring-1 focus-visible:ring-accent"
          />
        </div>

        <div className="flex items-center gap-1 md:gap-4">
            <div className="hidden lg:flex items-center gap-6 mr-4">
                {mainNavLinks.slice(0, 3).map(link => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        className={cn(
                            "text-xs font-bold tracking-widest uppercase hover:text-accent transition-colors",
                            pathname?.startsWith(link.href) ? "text-accent" : "text-primary"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <Button variant="ghost" size="icon" asChild className="text-primary hover:text-accent hover:bg-transparent transition-colors">
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative text-primary hover:text-accent hover:bg-transparent transition-colors">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                 {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0 bg-accent text-primary border-none text-[10px] font-bold">
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
                  className="lg:hidden text-primary"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left mb-10">
                  <SheetTitle className="flex justify-start">
                    <Image src="/brands/Logo.png" alt="Bee & Dee" width={100} height={40} />
                  </SheetTitle>
                  <SheetDescription>Explore Premium Footwear</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-6">
                  <Link href="/shop" className="text-xl font-headline font-bold text-primary border-b pb-2">All Collections</Link>
                  {mainNavLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-primary/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Separator className="bg-primary/5" />
                  <div className="space-y-4 pt-4">
                     <Link href="/account" className="block text-lg">My Account</Link>
                     <Link href="/cart" className="flex items-center justify-between text-lg">
                        <span>Cart</span>
                        <Badge className="bg-accent text-primary">{totalItems}</Badge>
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
