import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CreditCard, HeartHandshake, MessageSquare, Power, Users, AlertTriangle, Sun, Car } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-card">
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('/hero.jpg')"}} data-ai-hint="suburban street sunset">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            How can we help you?
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Your trusted energy partner serving the community with reliable power and exceptional service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <HelpCard
              icon={<CreditCard className="h-8 w-8" />}
              title="Pay My Bill"
              href="/billing"
            />
            <HelpCard
              icon={<Power className="h-8 w-8" />}
              title="Start/Stop Service"
              href="/start-stop-move"
            />
             <HelpCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Outages"
              href="/outage-center"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6">
           <Card className="grid md:grid-cols-2 items-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-10 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-destructive/10 rounded-full">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Report an Outage</h2>
                    <p className="text-muted-foreground text-lg">Experiencing an issue? Let us know.</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  If your power is out, we're here to help. Report your outage and get updates on restoration times.
                </p>
                <Button asChild size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                    <Link href="/outage-center">Report or View Outage</Link>
                </Button>
              </div>
              <div className="h-80 md:h-full">
                 <Image
                    src="/hero-outage.jpg"
                    alt="Outage Map"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint="city map"
                  />
              </div>
          </Card>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <Card className="grid md:grid-cols-2 items-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className="h-80 md:h-full order-last md:order-first">
                 <Image
                    src="/discover summer saving.jpg"
                    alt="Abstract savings graphic"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint="family home savings"
                  />
              </div>
              <div className="p-10 md:p-12">
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
                  FEATURED
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover summer savings.</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Take charge of your home's energy use this summer. Discover ways you can save with our helpful tips and solutions.
                </p>
                <Button size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">Save Now</Button>
              </div>
          </Card>
        </div>
      </section>
      
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Clean Energy Solutions</h2>
            <p className="max-w-4xl mx-auto text-muted-foreground text-lg leading-relaxed">
              Explore ways to reduce your carbon footprint and embrace a sustainable future with our clean energy options.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <InfoCard
              icon={<Sun className="h-10 w-10 text-primary" />}
              category="RENEWABLE ENERGY"
              title="Interested in Solar Power?"
              description="Learn about our solar programs and find out if going solar is right for your home."
              buttonText="Explore Solar Options"
              href="#"
            />
            <InfoCard
              icon={<Car className="h-10 w-10 text-primary" />}
              category="ELECTRIC VEHICLES"
              title="Driving an EV?"
              description="Get information on EV charging rates, find charging stations, and discover rebates."
              buttonText="EV Owner Resources"
              href="#"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="p-4 bg-primary/10 rounded-full inline-block mb-6">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Company</h2>
          <p className="max-w-4xl mx-auto text-muted-foreground mb-16 text-lg leading-relaxed">
            We power the lives of our customers and the vitality of our communities. See how we're building a smarter, cleaner, more reliable energy future.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              <CompanyLinkCard 
                imageSrc="/1.png"
                imageHint="community charity"
                title="Union Core Foundation"
                description="The Union Core Foundation's annual giving totals more than $30 million."
                href="/about"
              />
              <CompanyLinkCard 
                imageSrc="/2.jpg"
                imageHint="lineman working"
                title="Building a Smarter Energy Future"
                description="We're making smart investments to improve reliability, prevent outages and use more clean, renewable energy."
                href="#"
              />
              <CompanyLinkCard 
                imageSrc="/3.jpg"
                imageHint="person on phone"
                title="Scams and Fraud"
                description="Stay informed. Scam artists are becoming increasingly sophisticated and use intimidating tactics to gain access to your account."
                href="#"
              />
               <CompanyLinkCard 
                imageSrc="/4.webp"
                imageHint="wind turbine engineer"
                title="Stories from Illumination"
                description="Read about some of the remarkable people and innovations delivering cleaner, smarter, more reliable energy."
                href="#"
              />
          </div>
        </div>
      </section>
    </div>
  );
}

function HelpCard({ icon, title, href }: { icon: React.ReactNode, title: string, href: string }) {
  return (
    <Link href={href} className="block group">
      <Card className="h-full bg-white/90 hover:bg-white transition-all duration-300 p-6 text-center border-2 border-transparent hover:border-primary/20 hover:scale-105 shadow-lg">
        <div className="flex justify-center items-center h-20 w-20 rounded-full bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{title}</p>
      </Card>
    </Link>
  );
}

function InfoCard({ icon, category, title, description, buttonText, href }: { icon: React.ReactNode, category: string, title: string, description: string, buttonText: string, href: string }) {
  return (
    <Card className="flex flex-col p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20">
      <div className="flex-grow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            {icon}
          </div>
          <div>
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded-full mb-3">
              {category}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      <Button variant="outline" size="lg" className="w-full mt-auto hover:bg-primary hover:text-white transition-all duration-300" asChild>
        <Link href={href}>{buttonText}</Link>
      </Button>
    </Card>
  );
}

function CompanyLinkCard({ imageSrc, imageHint, title, description, href }: { imageSrc: string, imageHint: string, title: string, description: string, href: string }) {
  return (
     <Link href={href} className="block group">
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:scale-105">
        <div className="overflow-hidden">
          <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={400}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              data-ai-hint={imageHint}
            />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {title} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2"/>
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Card>
    </Link>
  )
}
