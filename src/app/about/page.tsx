import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Heart, History } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline mb-4">About UnionCore Energy</h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Learn about our journey, our values, and our commitment to the communities we serve.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          <div>
            <h2 className="flex items-center gap-3 text-3xl font-headline mb-4">
              <Zap className="h-8 w-8 text-accent" />
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-4">
              At UnionCore Energy, our mission is to deliver safe, reliable, and affordable energy to power the lives and businesses of our customers. We are dedicated to pioneering sustainable practices and investing in innovative technologies to build a brighter, cleaner energy future for everyone.
            </p>
            <p className="text-muted-foreground">
              We strive for operational excellence, unwavering customer focus, and a deep sense of responsibility for our environment and communities.
            </p>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="UnionCore team working"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="power line worker"
          />
        </section>

        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
           <Image
            src="https://placehold.co/600x400.png"
            alt="Historical photo of a power plant"
            width={600}
            height={400}
            className="rounded-lg shadow-lg order-last md:order-first"
            data-ai-hint="vintage factory"
          />
          <div>
             <h2 className="flex items-center gap-3 text-3xl font-headline mb-4">
              <History className="h-8 w-8 text-accent" />
              Our History
            </h2>
            <p className="text-muted-foreground mb-4">
              Founded in 1923 as a small local cooperative, UnionCore Energy has grown alongside the communities it serves. From powering the first light bulbs on Main Street to integrating smart grid technology today, our history is one of steady growth and constant adaptation.
            </p>
             <p className="text-muted-foreground">
              For over a century, we have remained committed to our founding principles of service and reliability, evolving to meet the changing energy needs of our customers while honoring our legacy.
            </p>
          </div>
        </section>

         <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="flex items-center gap-3 text-3xl font-headline mb-4">
              <Heart className="h-8 w-8 text-accent" />
              Community Involvement
            </h2>
            <p className="text-muted-foreground mb-4">
              Being a part of the community is at the heart of what we do. UnionCore Energy actively supports local initiatives through volunteer programs, educational scholarships, and partnerships with non-profit organizations.
            </p>
            <p className="text-muted-foreground">
              We believe that our success is intertwined with the prosperity of our communities, and we are proud to invest in programs that promote safety, education, and economic development.
            </p>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Volunteers at a community event"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="community volunteering"
          />
        </section>
      </div>
    </div>
  );
}
