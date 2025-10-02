import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/lib/data';
import { CreditCard, RefreshCw, Truck, MessageCircle } from 'lucide-react';
import { FlashSaleBanner } from '@/components/flash-sale-banner';
import { Icons } from '@/components/icons';
import { ScrollToTop } from '@/components/scroll-to-top';
import { WhatsAppButton } from '@/components/whatsapp-button';

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

export default function Home() {
  const topCategories = categories.filter(c => ['sneakers', 'football-boots', 'ladies-shoes', 'handbags'].includes(c.id));

  return (
    <div className="flex flex-col">
      <FlashSaleBanner />

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
          <p className="text-primary font-semibold">FASHION COLLECTIONS</p>
          <h2 className="text-3xl font-headline font-bold">TOP CATEGORIES</h2>
          <p className="text-muted-foreground">Here are some of our top categories.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topCategories.map(category => (
            <Link href={`/shop/${category.id}`} key={category.id} className="group text-center">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border-none">
                <CardContent className="p-0 relative">
                  <div className="absolute top-2 right-2 z-10">
                     <Icons.logo className="h-10 w-10" />
                  </div>
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
      
      <WhatsAppButton />
      <ScrollToTop />

    </div>
  );
}
