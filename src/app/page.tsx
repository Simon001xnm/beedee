import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories, products, getProducts } from '@/lib/data';
import { CreditCard, RefreshCw, Truck, MessageCircle, Star } from 'lucide-react';
import { FlashSaleBanner } from '@/components/flash-sale-banner';
import { Icons } from '@/components/icons';
import { ScrollToTop } from '@/components/scroll-to-top';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProductCard } from '@/components/product-card';
import { formatPrice } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const infoItems = [
  {
    icon: <Truck className="h-8 w-8 text-white" />,
    title: 'FREE SHIPPING',
    description: 'On All Orders Over Ksh 10,000.',
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-white" />,
    title: 'EASY RETURNS',
    description: '1 Day Return Policy',
  },
  {
    icon: <CreditCard className="h-8 w-8 text-white" />,
    title: 'SECURE PAYMENT',
    description: '100% Secure Payment',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    title: 'ONLINE SUPPORT',
    description: 'Email, SMS, WhatsApp',
  },
];

const brands = [
  { name: 'Adidas', logo: '/brands/adidas.svg' },
  { name: 'New Balance', logo: '/brands/new-balance.svg' },
  { name: 'Nike', logo: '/brands/nike.svg' },
  { name: 'Puma', logo: '/brands/puma.svg' },
  { name: 'Reebok', logo: '/brands/reebok.svg' },
];

const footerProductLists = {
  "Recent": getProducts().slice(0, 3),
  "Best Selling": getProducts().slice(3, 6),
  "On Sale": getProducts().slice(6, 9),
  "Top Rated": getProducts().slice(9, 12),
}

export default function Home() {
  const topCategories = categories.filter(c => c.parentId === null).slice(0, 4);
  const latestProducts = getProducts().slice(0, 4);

  return (
    <div className="flex flex-col">
      <FlashSaleBanner />

      <HeroCarousel />

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {item.icon}
                <div>
                  <h3 className="font-bold text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-headline font-bold">TOP CATEGORIES</h2>
          <p className="text-muted-foreground">Here are some of our top categories.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topCategories.map(category => (
            <Link href={`/shop/${category.id}`} key={category.id} className="group text-center">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border-none bg-secondary/50">
                <CardContent className="p-4 relative">
                  <div className="relative aspect-square">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105 p-4"
                      data-ai-hint={category.imageHint}
                    />
                  </div>
                </CardContent>
              </Card>
              <h3 className="font-semibold mt-4 text-lg">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8 bg-primary p-4 rounded-md">
            <h2 className="text-3xl font-headline font-bold text-primary-foreground">LATEST PRODUCTS</h2>
            <Button variant="secondary" asChild>
              <Link href="/shop">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-headline font-bold">BRANDS WE TRUST</h2>
        </div>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {brands.map(brand => (
            <Image key={brand.name} src={brand.logo} alt={brand.name} width={100} height={50} className="grayscale hover:grayscale-0 transition-all" />
          ))}
        </div>
      </section>

      <footer className="bg-muted text-muted-foreground pt-12 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerProductLists).map(([title, products]) => (
              <div key={title}>
                <h3 className="font-headline font-bold text-lg text-foreground mb-4">{title.toUpperCase()}</h3>
                <div className="flex flex-col gap-4">
                  {products.map(product => (
                    <div key={product.id} className="flex items-center gap-4">
                      <Link href={`/shop/product/${product.id}`} className="block w-16 h-16 bg-secondary rounded-md overflow-hidden">
                         <Image src={product.images[0].url} alt={product.name} width={64} height={64} className="object-cover w-full h-full" />
                      </Link>
                      <div>
                        <Link href={`/shop/product/${product.id}`} className="font-semibold text-sm text-foreground hover:text-primary leading-tight line-clamp-2">{product.name}</Link>
                        {title === 'Top Rated' && (
                           <div className="flex items-center gap-0.5 mt-1">
                             {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                           </div>
                        )}
                        <p className="text-primary font-bold mt-1">{formatPrice(product.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Separator className="my-8" />
           <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Magical Shoekenya. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton />
      <ScrollToTop />

    </div>
  );
}
