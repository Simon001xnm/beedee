'use client';

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  ShoppingCart,
  User,
  Search,
  List,
  ChevronDown,
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
import Image from "next/image";

export function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* Utility Top Bar */}
      <div className="bg-primary text-white py-1.5 text-xs">
        <div className="container-market flex justify-between items-center">
          <p>Kenya's Leading Footwear Marketplace</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Help Center</Link>
          </div>
        </div>
      </div>

      <div className="container-market h-16 md:h-20 flex items-center gap-4 md:gap-8">
        {/* Brand Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative h-8 md:h-12 w-24 md:w-32">
            <Image 
              src="/brands/Logo.png" 
              alt="Bee & Dee" 
              fill 
              className="object-contain"
              priority 
            />
          </div>
        </Link>

        {/* Categories Dropdown (Desktop) */}
        <div className="hidden lg:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 font-bold text-sm">
                <List className="h-5 w-5" />
                Categories
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {categories.map((cat) => (
                <DropdownMenuItem key={cat.id} asChild>
                  <Link href={`/shop/${cat.id}`}>{cat.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/shop" className="font-bold text-accent">Shop All</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex items-center relative">
          <div className="w-full flex">
            <Input 
              type="text" 
              placeholder="What are you looking for..." 
              className="rounded-l-full rounded-r-none border-primary focus-visible:ring-0 focus-visible:ring-offset-0 h-10"
            />
            <Button className="rounded-r-full rounded-l-none bg-primary hover:bg-primary/90 h-10 px-6">
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/account" className="flex flex-col items-center group">
            <User className="h-6 w-6 text-gray-600 group-hover:text-primary" />
            <span className="text-[10px] text-gray-500 hidden sm:block">Sign In</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center relative group">
            <ShoppingCart className="h-6 w-6 text-gray-600 group-hover:text-primary" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-accent text-accent-foreground text-[10px] rounded-full">
                {totalItems}
              </Badge>
            )}
            <span className="text-[10px] text-gray-500 hidden sm:block">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}