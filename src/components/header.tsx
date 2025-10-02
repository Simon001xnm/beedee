'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/data";

const mainNavLinks = categories.filter(c => !c.parentId).map(c => ({ href: `/shop/${c.id}`, label: c.name }));

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.LogoFull className="h-6" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
                href="/shop"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === '/shop'
                    ? "text-foreground"
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
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith(link.href)
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
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
              <Icons.LogoFull className="h-6" />
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
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-end md:justify-end">
           <div className="md:hidden">
              <Link href="/" className="flex items-center space-x-2">
                <Icons.LogoFull className="h-6" />
              </Link>
            </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
