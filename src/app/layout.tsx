import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/cart-context';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bee & Dee | Premium Kenyan Footwear Marketplace',
    template: '%s | Bee & Dee Nairobi'
  },
  description: 'Shop premium sneakers, formal shoes, and boots at Bee & Dee. The leading footwear marketplace in Kenya.',
  keywords: ['shoes kenya', 'sneakers nairobi', 'footwear marketplace', 'bee and dee', 'kenya shoe shop'],
  authors: [{ name: 'Bee & Dee' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/brands/Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-[#f4f4f4] font-sans antialiased', inter.className)}>
        <CartProvider>
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}