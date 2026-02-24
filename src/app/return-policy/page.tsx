import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Return Policy",
  description: "Read the return and exchange policy for Bee & Dee.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter">Return Policy</h1>
        <p className="text-[10px] font-black tracking-[0.4em] text-accent uppercase underline underline-offset-8">
          Your satisfaction is our priority.
        </p>
      </div>
      
      <Card className="max-w-3xl mx-auto mt-16 rounded-[2.5rem] border-primary/5 shadow-2xl overflow-hidden">
        <CardHeader className="bg-secondary/50 p-8 md:p-12 border-b border-primary/5">
          <CardTitle className="font-headline text-3xl font-bold text-primary">Our Promise</CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12 space-y-10 text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <p className="text-lg font-medium italic text-primary/80">
              "At Bee & Dee, we want you to be completely happy with your purchase. If you are not satisfied for any reason, we are here to help with our premium exchange policy."
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-black text-[10px] tracking-[0.3em] uppercase text-primary">Conditions for Return</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest opacity-80">
              <li className="flex gap-4 items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Initiate within 7 days of receipt</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Original, unused condition with all tags</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Valid proof of purchase required</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Sale items are final</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-black text-[10px] tracking-[0.3em] uppercase text-primary">How to Initiate</h3>
            <p className="font-medium text-lg leading-relaxed">
              To initiate a return, please contact our concierge team at <a href="mailto:wambuilenny@gmail.com" className="text-accent hover:underline font-black">wambuilenny@gmail.com</a> with your order details.
            </p>
          </div>

          <div className="bg-primary/5 p-8 rounded-2xl">
            <h3 className="font-black text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Refunds</h3>
            <p className="text-sm font-medium">
              Once inspected, approved refunds are processed back to your original payment method within 3-5 business days. 
            </p>
          </div>

           <p className="pt-6 text-[9px] font-black uppercase tracking-widest opacity-40 text-center">
            Official Bee & Dee Premium Policy. Last Updated: {new Date().getFullYear()}
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
