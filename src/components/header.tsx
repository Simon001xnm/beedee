
'use client';

import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  User,
  Search,
  List,
  ChevronDown,
  Phone,
  Mail,
  UserPlus,
  LogIn,
  LayoutDashboard
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { Badge } from "./ui/badge";
import { useUser } from "@/firebase";

const STAFF_ROLES = ["Super Admin", "Manager", "Cashier", "Inventory Manager", "Customer Support"];

export function Header() {
  const { cartItems } = useCart();
  const { user, profile } = useUser();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isStaff = profile && STAFF_ROLES.includes(profile.role);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Utility Top Bar: Contact & Auth Entry */}
      <div className="bg-primary text-white py-2 text-xs border-b border-white/10">
        <div className="container-market flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:+254106587150" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3 w-3 text-accent" />
              <span className="font-medium tracking-tight">+254 106 587 150</span>
            </a>
            <a href="mailto:wambuilenny@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-3 w-3 text-accent" />
              <span className="font-medium tracking-tight">wambuilenny@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            {!user ? (
              <div className="flex items-center gap-4">
                <Link href="/login" className="flex items-center gap-1 hover:text-accent transition-colors font-black uppercase tracking-widest text-[9px]">
                  <LogIn className="h-3 w-3" /> Sign In
                </Link>
                <Link href="/register" className="flex items-center gap-1 hover:text-accent transition-colors font-black uppercase tracking-widest text-[9px] bg-accent/20 px-3 py-1 rounded-full">
                  <UserPlus className="h-3 w-3" /> Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {isStaff && (
                  <Link href="/admin" className="flex items-center gap-1 text-accent hover:text-white transition-colors font-black uppercase tracking-widest text-[9px] border border-accent/30 px-3 py-1 rounded-full">
                    <LayoutDashboard className="h-3 w-3" /> Admin Portal
                  </Link>
                )}
                <Link href="/account" className="hover:text-accent transition-colors font-black uppercase tracking-widest text-[9px]">
                  {profile?.firstName || 'My Account'}
                </Link>
              </div>
            )}
            <div className="hidden sm:flex items-center gap-6 border-l border-white/10 ml-4 pl-4">
              <Link href="/about" className="hover:text-accent transition-colors font-bold uppercase tracking-widest text-[9px]">Our Story</Link>
              <Link href="/contact" className="hover:text-accent transition-colors font-bold uppercase tracking-widest text-[9px]">Concierge</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding & Search Row */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-market h-16 md:h-20 flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-10 w-32 md:h-12 md:w-40">
              <Image 
                src="/WhatsApp Image 2026-05-07 at 12.36.54 PM.jpeg" 
                alt="Bee & Dee" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 font-black text-sm uppercase tracking-tighter">
                  <List className="h-5 w-5 text-primary" />
                  Explore
                  <ChevronDown className="h-4 w-4 text-accent" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-2 rounded-xl shadow-2xl border-none">
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.id} asChild className="rounded-lg">
                    <Link href={`/shop/${cat.id}`} className="font-bold py-2 hover:bg-accent/10">{cat.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link href="/shop" className="font-black text-accent py-2">ALL DEPARTMENTS</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex-1 flex items-center relative group">
            <div className="w-full flex">
              <Input 
                type="text" 
                placeholder="Search premium sneakers, formal shoes, boots..." 
                className="rounded-l-full rounded-r-none border-primary border-2 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 md:h-11 px-6 font-medium placeholder:text-gray-400"
              />
              <Button className="rounded-r-full rounded-l-none bg-primary hover:bg-primary/90 h-10 md:h-11 px-8">
                <Search className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <Link href="/account" className="flex flex-col items-center group">
              <div className="p-2 rounded-full group-hover:bg-primary/5 transition-colors">
                <User className="h-6 w-6 text-primary" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-primary/60 hidden sm:block">Account</span>
            </Link>

            <Link href="/cart" className="flex flex-col items-center relative group">
              <div className="p-2 rounded-full group-hover:bg-primary/5 transition-colors">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              {totalItems > 0 && (
                <Badge className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center p-0 bg-accent text-primary text-[10px] font-black border-2 border-white rounded-full">
                  {totalItems}
                </Badge>
              )}
              <span className="text-[9px] font-black uppercase tracking-widest text-primary/60 hidden sm:block">Bag</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-gray-50/50 border-b border-gray-100">
        <div className="container-market">
          <nav className="flex items-center gap-10 h-10">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                href={`/shop/${cat.id}`} 
                className="text-[11px] font-black uppercase tracking-widest text-primary/70 hover:text-accent transition-all relative group"
              >
                {cat.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link 
              href="/shop" 
              className="ml-auto text-[11px] font-black uppercase tracking-widest text-accent hover:underline flex items-center gap-1"
            >
              Shop All <ChevronDown className="h-3 w-3" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
