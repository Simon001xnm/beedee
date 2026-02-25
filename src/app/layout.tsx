import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/cart-context';

export const metadata: Metadata = {
  title: {
    default: 'Bee & Dee | Premium Kenyan Footwear Boutique',
    template: '%s | Bee & Dee Nairobi'
  },
  description: 'The ultimate destination for luxury footwear in Kenya. Shop sneakers, formal shoes, and boots curated for the modern individual.',
  keywords: ['shoes kenya', 'sneakers nairobi', 'luxury footwear kenya', 'bee and dee', 'kenya shoe shop'],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
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