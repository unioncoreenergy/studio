import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Power, PowerOff, Truck } from 'lucide-react';

export default function StartStopMovePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline mb-4">Start, Stop & Move Service</h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Manage your UnionCore Energy service with ease. Whether you're moving in, moving out, or just moving across town, we're here to help.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <ServiceActionCard
            icon={<Power className="h-12 w-12 text-accent" />}
            title="Start Service"
            description="Need to start service at a new location? Set up your new account and get your power turned on."
            href="/start-stop-move/start"
            buttonText="Start Service"
          />
          <ServiceActionCard
            icon={<PowerOff className="h-12 w-12 text-destructive" />}
            title="Stop Service"
            description="Need to stop service at your current location? Complete your request quickly and easily."
            href="/start-stop-move/stop"
            buttonText="Stop Service"
          />
          <ServiceActionCard
            icon={<Truck className="h-12 w-12 text-primary" />}
            title="Move Service"
            description="Moving your service from one location to another? We'll help you make a seamless transition."
            href="/start-stop-move/move"
            buttonText="Move Service"
          />
        </section>
        
        <section className="mt-20 text-center">
            <h2 className="text-2xl font-headline mb-4">Not sure who your energy provider is?</h2>
            <p className="text-muted-foreground mb-4">
                You can <Link href="#" className="underline text-primary">check if UnionCore Energy serves your address</Link>.
            </p>
        </section>
      </div>
    </div>
  );
}

function ServiceActionCard({ icon, title, description, href, buttonText }: { icon: React.ReactNode, title: string, description: string, href: string, buttonText: string }) {
  return (
    <Card className="flex flex-col text-center p-8 [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
      <div className="flex-grow">
        <div className="flex justify-center mb-6">{icon}</div>
        <h3 className="text-2xl font-headline mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
      </div>
      <Button asChild className="[clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
        <Link href={href}>{buttonText}</Link>
      </Button>
    </Card>
  );
}
