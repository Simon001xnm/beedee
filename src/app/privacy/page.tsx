import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "Privacy Policy | Bee & Dee",
  description: "Learn how we handle your data at Bee & Dee.",
};

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} className="mb-12" />
      
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter uppercase">Privacy Policy</h1>
          <p className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">Your Security is Our Priority</p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground leading-relaxed space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">1. Information Collection</h2>
            <p>At Bee & Dee, we collect information that you provide directly to us when you make a purchase, create an account, or contact our concierge. This includes your name, email address, phone number, and delivery address.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">2. Use of Information</h2>
            <p>We use the information we collect to process your orders, communicate with you about your account, and provide you with personalized product recommendations and exclusive offers. Your data helps us improve the boutique experience we offer in Nairobi.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">3. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is protected both online and offline through industry-standard encryption and secure server protocols.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">4. Third-Party Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website and conducting our business, such as delivery partners, so long as those parties agree to keep this information confidential.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-headline font-bold text-primary uppercase tracking-tight border-b border-primary/5 pb-2">5. Contact Our Privacy Officer</h2>
            <p>If you have any questions regarding this privacy policy, you may contact our concierge team at <a href="mailto:wambuilenny@gmail.com" className="text-accent font-bold">wambuilenny@gmail.com</a>.</p>
          </section>
        </div>

        <p className="text-[9px] font-black uppercase tracking-widest text-primary/30 text-center pt-12 border-t border-primary/5" suppressHydrationWarning>
          Last Updated: March {currentYear}
        </p>
      </div>
    </div>
  );
}
