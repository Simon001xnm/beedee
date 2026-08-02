'use client';

import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function LocationMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-white border-t border-gray-100">
      <div className="container-market py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.6em]">Our Physical Home</span>
              <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tighter uppercase leading-none">Visit Our Showroom</h2>
              <p className="text-muted-foreground text-lg max-w-md">Experience the quality of our premium footwear in person at our Nairobi showroom.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-2xl bg-secondary/50 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-primary/40 mb-1">Showroom Location</h4>
                  <p className="font-bold text-primary">Kenneth Matiba Road and River Road junction</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-2xl bg-secondary/50 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-primary/40 mb-1">Shop Number / Contact</h4>
                  <p className="font-bold text-primary">+254 106 587 150</p>
                </div>
              </div>

              <a 
                href="https://wa.me/254106587150" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-xl"
              >
                <MessageCircle className="h-4 w-4" />
                Book a Visit
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 h-[400px] md:h-[500px] relative group bg-gray-50">
            {mounted ? (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819036986423!2d36.82522631535216!3d-1.2823659990647184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d638708c99%3A0x6b2e75e5c7a52a33!2sLatema%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                title="Bee & Dee Location Map"
              ></iframe>
            ) : (
              <div className="w-full h-full animate-pulse bg-gray-200" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
