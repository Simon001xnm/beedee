'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function FlashSaleBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-center text-center">
        <p className="font-semibold text-sm md:text-base">Flash Sale! Grab Yours Before It's Gone!</p>
        <Button asChild variant="secondary" size="sm" className="ml-4 bg-black text-white hover:bg-gray-800">
          <Link href="/shop">SHOP NOW</Link>
        </Button>
        <button onClick={() => setIsVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}
