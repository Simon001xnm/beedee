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
    value: "info@beedee.com",
    href: "mailto:info@beedee.com",
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
        <h1 className="text-4xl font-headline font-bold text-primary">Contact Us</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          We'd love to hear from you. Here's how you can reach us.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto mt-10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary">Our Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <detail.icon className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">{detail.label}</h3>
                  {detail.href ? (
                     <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                       {detail.value}
                     </a>
                  ) : (
                    <p className="text-muted-foreground">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-8" />

          <div>
            <h3 className="font-semibold text-lg text-center mb-4 text-primary">Follow us on Social Media</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-8 w-8" />
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
