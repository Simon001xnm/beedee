
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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { Badge } from "./ui/badge";

const mainNavLinks = categories.filter(c => !c.parentId).map(c => ({ href: `/shop/${c.id}`, label: c.name }));

export function Header() {
  const pathname = usePathname();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img src="/brands/Logo.png" alt="Bee & Dee" style={{ height: '40px', width: 'auto' }} />
        </Link>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <div className="hidden md:flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <div className="flex flex-col text-sm">
                    <span className="font-semibold">CALL US</span>
                    <a href="tel:+254106587150" className="text-muted-foreground hover:text-primary">+254 106587150</a>
                </div>
            </div>
             <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <div className="flex flex-col text-sm">
                    <span className="font-semibold">EMAIL US</span>
                    <a href="mailto:info@beedee.com" className="text-muted-foreground hover:text-primary">info@beedee.com</a>
                </div>
            </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <img src="/brands/Logo.png" alt="Bee & Dee" style={{ height: '50px', width: 'auto' }} />
            </Link>
            <div className="flex flex-col space-y-3">
              <Link
                href="/shop"
                className={cn(
                  "transition-colors hover:text-foreground/80 text-lg",
                  pathname === '/shop'
                    ? "text-foreground font-semibold"
                    : "text-foreground/60"
                )}
              >
                Shop
              </Link>
              {mainNavLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80 text-lg",
                    pathname?.startsWith(link.href)
                      ? "text-foreground font-semibold"
                      : "text-foreground/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
             <div className="mt-6 flex flex-col gap-2">
                <Link href="/account" className="text-lg text-foreground/60 hover:text-foreground/80">Account</Link>
                 <Link href="/cart" className="text-lg text-foreground/60 hover:text-foreground/80 flex items-center gap-2">
                  Cart
                  {totalItems > 0 && <Badge variant="secondary">{totalItems}</Badge>}
                </Link>
              </div>
          </SheetContent>
        </Sheet>
      </div>
      <nav className="hidden md:block border-t">
        <div className="container flex items-center justify-center space-x-6 text-sm font-medium h-12">
            <Link
                href="/shop"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === '/shop'
                    ? "text-primary font-bold"
                    : "text-foreground/80"
                )}
              >
                All Products
              </Link>
            {mainNavLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname?.startsWith(link.href)
                    ? "text-primary font-bold"
                    : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
             <div className="flex items-center ml-auto">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/account">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="relative" asChild>
                  <Link href="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Cart</span>
                     {totalItems > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{totalItems}</Badge>
                    )}
                  </Link>
                </Button>
            </div>
          </div>
      </nav>
    </header>
  );
}
