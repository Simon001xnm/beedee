
import Image from 'next/image';

export const metadata = {
  title: "About Us",
  description: "Learn more about Bee&Dee.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-headline font-bold text-primary">About Bee & Dee</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your destination for stylish and quality footwear in Kenya.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://picsum.photos/seed/staff1/600/800"
                    alt="Bee & Dee Staff Member 1"
                    width={300}
                    height={400}
                    className="object-cover"
                    data-ai-hint="team member"
                />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                 <Image
                    src="https://picsum.photos/seed/staff2/600/800"
                    alt="Bee & Dee Staff Member 2"
                    width={300}
                    height={400}
                    className="object-cover"
                    data-ai-hint="team member"
                />
            </div>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Welcome to Bee & Dee, where passion for footwear meets Kenyan style. Founded with a vision to bring high-quality, fashionable, and affordable shoes to everyone, we have grown from a small shop to a beloved destination for shoe lovers across the country.
          </p>
          <p>
            Our collection is carefully curated to include a wide range of styles, from casual sneakers and elegant formal shoes to rugged boots and chic handbags. We believe that the right pair of shoes can transform your look and boost your confidence.
          </p>
          <p>
            Customer satisfaction is at the heart of everything we do. We are committed to providing an exceptional shopping experience, both online and at our physical store in Nairobi. Thank you for choosing Bee & Dee.
          </p>
        </div>
      </div>
    </div>
  );
}
