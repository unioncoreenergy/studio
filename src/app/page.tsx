import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bolt, Building2, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Clean energy source"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-40"
          data-ai-hint="solar panels field"
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary">
          <h1 className="text-4xl md:text-6xl font-headline mb-4 text-white drop-shadow-lg">
            Reliable Energy, Simplified for You.
          </h1>
          
          <Card className="max-w-md mx-auto mt-8 bg-white/90 backdrop-blur-sm [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
            <CardContent className="p-2">
              <Tabs defaultValue="pay" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="pay">Pay Your Bill</TabsTrigger>
                  <TabsTrigger value="report">Report an Outage</TabsTrigger>
                </TabsList>
                <TabsContent value="pay" className="p-4">
                  <form className="space-y-4">
                    <Input placeholder="Email or Account Number" />
                    <Input type="password" placeholder="Password" />
                    <Button type="submit" className="w-full [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]" asChild>
                      <Link href="/login">Log In & Pay</Link>
                    </Button>
                    <Link href="#" className="text-sm text-primary/80 hover:underline">Forgot Password?</Link>
                  </form>
                </TabsContent>
                <TabsContent value="report" className="p-4">
                  <form className="space-y-4">
                    <Input placeholder="Address or Phone Number" />
                     <Button type="submit" className="w-full [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]" asChild>
                       <Link href="/outage-center">Report</Link>
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Bolt className="h-10 w-10 text-accent" />}
              title="Residential Services"
              description="Powering homes with reliable and affordable energy solutions."
              href="/#residential"
            />
            <ServiceCard 
              icon={<Building2 className="h-10 w-10 text-accent" />}
              title="Business Solutions"
              description="Customized energy plans to help your business thrive."
              href="/#business"
            />
            <ServiceCard 
              icon={<Leaf className="h-10 w-10 text-accent" />}
              title="Clean Energy Options"
              description="Join the movement towards a sustainable future with our green energy."
              href="/#clean-energy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-headline mb-4">Safety & Community</h2>
          <p className="max-w-2xl mx-auto text-primary/80 mb-8">
            We're committed to keeping our communities safe and informed. Find important safety tips and learn about our local initiatives.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="[clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]" asChild>
              <Link href="#">Safety Tips</Link>
            </Button>
            <Button variant="outline" className="[clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]" asChild>
              <Link href="/about">Community News</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Link href={href} className="block group">
      <Card className="h-full text-center p-8 hover:shadow-xl transition-shadow duration-300 [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-headline mb-2">{title}</h3>
        <p className="text-primary/80">{description}</p>
      </Card>
    </Link>
  );
}
