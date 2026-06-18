'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Sparkles, Timer } from 'lucide-react';

export function FlashSaleBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-[#0a1120] text-white py-3 px-4 overflow-hidden border-b border-accent/20">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.4)_0%,transparent_70%)]" />
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <Timer className="h-4 w-4 text-accent animate-pulse" />
          <p className="font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
            CLEARANCE ALERT: <span className="text-accent">EVERYTHING MUST GO</span> - SHOP NEW MARKDOWNS
          </p>
        </div>
        <Link href="/shop" className="text-[10px] md:text-xs font-bold underline underline-offset-4 hover:text-accent transition-colors decoration-accent">
          ACT NOW
        </Link>
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}
