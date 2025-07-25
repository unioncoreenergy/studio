import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageSquare } from "lucide-react";

const faqItems = [
  {
    value: "item-1",
    question: "How do I pay my bill?",
    answer: "You can pay your bill online through your customer dashboard, by mail, or by phone. The easiest way is to log in and click the 'Pay Now' button.",
  },
  {
    value: "item-2",
    question: "What should I do if my power goes out?",
    answer: "First, check your circuit breakers. If they are fine, visit our Outage Center to report the outage and see updates for your area.",
  },
  {
    value: "item-3",
    question: "How can I lower my energy bill?",
    answer: "We offer several tips for energy conservation, such as using energy-efficient appliances and adjusting your thermostat. Log in to your dashboard to get personalized recommendations!",
  },
  {
      value: "item-4",
      question: "How do I start, stop, or move my service?",
      answer: "You can manage your service directly from your customer dashboard. Look for the 'Start/Stop/Move Service' quick link after logging in."
  }
];

export default function HelpSupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline mb-2">Help & Support</h1>
        <p className="text-lg text-muted-foreground">
          We're here to help. Find answers to common questions or get in touch with us.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <h2 className="text-2xl font-headline mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="md:col-span-2">
            <Card className="[clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Still have questions? Send us a message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                 <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., Billing question" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" />
                </div>
                <Button type="submit" className="w-full [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 space-y-4 text-center">
            <h3 className="font-semibold text-lg">Other ways to reach us</h3>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5"/>
                <span>1-800-555-0199</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5"/>
                <span>support@unioncore.energy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
