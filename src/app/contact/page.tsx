import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Bee & Dee.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 106587150",
    href: "tel:+254106587150",
  },
  {
    icon: Mail,
    label: "Email",
    value: "wambuilenny@gmail.com",
    href: "mailto:wambuilenny@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Juction Trade Centre, Nairobi along Latema Road off Riverroad",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-headline font-bold text-primary uppercase tracking-tighter">Contact Us</h1>
        <p className="mt-2 text-lg text-muted-foreground uppercase tracking-widest text-xs font-bold opacity-60">
          WE'D LOVE TO HEAR FROM YOU. HERE'S HOW YOU CAN REACH OUR CONCIERGE.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto mt-10 shadow-2xl rounded-[2.5rem] border-primary/5 overflow-hidden">
        <CardHeader className="bg-primary text-white p-8 md:p-12">
          <CardTitle className="text-3xl font-headline font-bold">Our Information</CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12">
          <div className="space-y-10">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-6 group">
                <div className="p-4 rounded-2xl bg-secondary group-hover:bg-accent transition-colors duration-500">
                   <detail.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-black text-[10px] tracking-[0.3em] uppercase text-primary/40 mb-1">{detail.label}</h3>
                  {detail.href ? (
                     <a href={detail.href} className="text-xl font-bold text-primary hover:text-accent transition-colors tracking-tight">
                       {detail.value}
                     </a>
                  ) : (
                    <p className="text-xl font-bold text-primary tracking-tight">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-12 bg-primary/5" />

          <div className="text-center space-y-8">
            <h3 className="font-black text-[10px] tracking-[0.4em] text-primary uppercase">Follow our journey</h3>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-500">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
