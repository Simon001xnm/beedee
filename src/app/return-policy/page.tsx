import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Return Policy",
  description: "Read the return and exchange policy for Bee & Dee.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-headline font-bold text-primary">Return Policy</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your satisfaction is our priority.
        </p>
      </div>
      
      <Card className="max-w-3xl mx-auto mt-10">
        <CardHeader>
          <CardTitle className="font-headline text-primary">Our Promise</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            At Bee & Dee, we want you to be completely happy with your purchase. If you are not satisfied for any reason, we are here to help with our return and exchange policy.
          </p>
          
          <h3 className="font-semibold text-foreground pt-4">Conditions for Return</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Returns must be initiated within 7 days of receiving your order.</li>
            <li>Items must be in their original, unused condition, with all tags and packaging intact.</li>
            <li>A valid proof of purchase (receipt or order confirmation) is required for all returns and exchanges.</li>
            <li>Sale items are final and cannot be returned or exchanged.</li>
          </ul>

          <h3 className="font-semibold text-foreground pt-4">How to Initiate a Return</h3>
          <p>
            To initiate a return, please contact our customer service team at <a href="mailto:info@beedee.com" className="text-primary hover:underline">info@beedee.com</a> with your order number and the reason for your return. Our team will guide you through the process.
          </p>

          <h3 className="font-semibold text-foreground pt-4">Refunds</h3>
          <p>
            Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days.
          </p>

           <p className="pt-6 text-sm">
            This is a placeholder policy. Please consult with Bee & Dee directly for their official return policy.
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
