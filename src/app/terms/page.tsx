import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "Terms of Service | Bee & Dee",
  description: "The terms and conditions for shopping with Bee & Dee.",
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} className="mb-12" />
      
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase">Terms of Service</h1>
          <p className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">Excellence in Every Transaction</p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground leading-relaxed space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">1. Agreement to Terms</h2>
            <p>By accessing or using the Bee & Dee website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use this site.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">2. Product Availability</h2>
            <p>All products listed on our site are subject to availability. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">3. Orders and Payments</h2>
            <p>For orders placed through our WhatsApp concierge, pricing and delivery arrangements will be confirmed at the time of the chat. For online purchases, payment must be received in full before an order is dispatched.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">4. Intellectual Property</h2>
            <p>The Bee & Dee brand, logo, and all visual content on this website are the exclusive property of Bee & Dee. Any unauthorized use of our branding or photography is strictly prohibited.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">5. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of Kenya. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in Nairobi.</p>
          </section>
        </div>

        <p className="text-[9px] font-black uppercase tracking-widest text-primary/30 text-center pt-12 border-t border-primary/5" suppressHydrationWarning>
          Last Updated: March {currentYear}
        </p>
      </div>
    </div>
  );
}
