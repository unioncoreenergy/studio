import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CreditCard, DollarSign, HeartHandshake, Lightbulb, MessageSquare, Power, PowerOff, Sparkles, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-card">
      <section className="relative w-full h-[50vh] md:h-[40vh] flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080.png')"}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-headline mb-8">
            How can we help you?
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
             <HelpCard
              icon={<HeartHandshake className="h-8 w-8" />}
              title="Financial Help"
              href="/help-support"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Card className="grid md:grid-cols-2 items-center overflow-hidden [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
              <div className="p-8 md:p-12">
                <p className="text-sm font-semibold text-accent uppercase mb-2">FEATURED</p>
                <h2 className="text-3xl font-headline mb-4">Discover summer savings.</h2>
                <p className="text-muted-foreground mb-6">
                  Take charge of your home's energy use this summer. Discover ways you can save with our helpful tips and solutions.
                </p>
                <Button className="[clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">Save Now</Button>
              </div>
              <div className="h-64 md:h-full">
                 <Image
                    src="https://placehold.co/600x400.png"
                    alt="Abstract savings graphic"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint="savings energy"
                  />
              </div>
          </Card>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              imageSrc="https://placehold.co/600x400.png"
              imageHint="happy family home"
              category="ENERGY EFFICIENCY"
              title="Get rebates, referrals + discounts for your home."
              buttonText="See What's in Store"
              href="#"
            />
            <InfoCard
              imageSrc="https://placehold.co/600x400.png"
              imageHint="smart thermostat"
              category="SHIFT ENERGY USE + GET REWARDS"
              title="Shift energy use and get bill credit rewards."
              buttonText="Make a Difference"
              href="#"
            />
            <InfoCard
              imageSrc="https://placehold.co/600x400.png"
              imageHint="electric car charging"
              category="EVS AND RENEWABLE ENERGY"
              title="See EV charging solutions + easy ways to go green."
              buttonText="Explore Clean Energy"
              href="#"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="#" className="font-semibold text-primary hover:underline">
              Find More Ways to Save
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-headline mb-4">Our Company</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
            We power the lives of our customers and the vitality of our communities. See how we're building a smarter, cleaner, more reliable energy future.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              <CompanyLinkCard 
                imageSrc="https://placehold.co/600x400.png"
                imageHint="community charity"
                title="Duke Energy Foundation"
                description="The Duke Energy Foundation's annual giving totals more than $30 million."
                href="#"
              />
              <CompanyLinkCard 
                imageSrc="https://placehold.co/600x400.png"
                imageHint="lineman working"
                title="Building a Smarter Energy Future"
                description="We're making smart investments to improve reliability, prevent outages and use more clean, renewable energy."
                href="#"
              />
              <CompanyLinkCard 
                imageSrc="https://placehold.co/600x400.png"
                imageHint="person on phone"
                title="Scams and Fraud"
                description="Stay informed. Scam artists are becoming increasingly sophisticated and use intimidating tactics to gain access to your account."
                href="#"
              />
               <CompanyLinkCard 
                imageSrc="https://placehold.co/600x400.png"
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
      <Card className="h-full bg-card/80 hover:bg-card/100 transition-colors p-4 text-center text-primary [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-2">
          {icon}
        </div>
        <p className="font-semibold">{title}</p>
      </Card>
    </Link>
  );
}

function InfoCard({ imageSrc, imageHint, category, title, buttonText, href }: { imageSrc: string, imageHint: string, category: string, title: string, buttonText: string, href: string }) {
  return (
    <Card className="flex flex-col [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
      <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover rounded-t-lg"
          data-ai-hint={imageHint}
        />
      <CardContent className="flex flex-col flex-grow p-6">
        <p className="text-xs font-bold text-muted-foreground mb-2">{category}</p>
        <h3 className="text-xl font-headline mb-4 flex-grow">{title}</h3>
        <Button variant="outline" className="w-full mt-auto [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]" asChild>
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function CompanyLinkCard({ imageSrc, imageHint, title, description, href }: { imageSrc: string, imageHint: string, title: string, description: string, href: string }) {
  return (
     <Link href={href} className="block group">
      <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
        <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="w-full h-40 object-cover"
            data-ai-hint={imageHint}
          />
        <div className="p-4">
          <h3 className="text-lg font-headline mb-2 flex items-center gap-2">
            {title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </Card>
    </Link>
  )
}
