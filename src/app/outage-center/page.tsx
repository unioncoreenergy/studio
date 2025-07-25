import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, AlertTriangle, CheckCircle } from "lucide-react";

export default function OutageCenterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline mb-2">Outage Center</h1>
        <p className="text-lg text-muted-foreground">
          Stay updated on power outages in your area.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <StatCard 
            icon={<Users className="h-8 w-8 text-accent"/>}
            label="Customers Affected"
            value="1,245"
        />
         <StatCard 
            icon={<AlertTriangle className="h-8 w-8 text-destructive"/>}
            label="Active Outages"
            value="15"
        />
         <StatCard 
            icon={<CheckCircle className="h-8 w-8 text-green-600"/>}
            label="Customers Restored (24h)"
            value="8,932"
        />
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <Card className="[clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
            <CardHeader>
              <CardTitle>Outage Map</CardTitle>
              <CardDescription>Last updated: a few seconds ago</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-muted rounded-md flex items-center justify-center">
                <Image 
                    src="https://placehold.co/800x600.png"
                    width={800}
                    height={600}
                    alt="Outage Map"
                    className="w-full h-full object-cover rounded-md"
                    data-ai-hint="city map"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
            <Card className="[clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
            <CardHeader>
              <CardTitle>Report an Outage</CardTitle>
              <CardDescription>
                Experiencing a power outage? Let us know.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="address">Address or Phone Number</Label>
                  <Input id="address" placeholder="e.g., 123 Main St or 555-1234" />
                </div>
                <div>
                  <Label htmlFor="details">Optional Details</Label>
                  <Input id="details" placeholder="e.g., Heard a loud noise, tree on line" />
                </div>
                <Button type="submit" className="w-full [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
                  Report Outage
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <Card>
            <CardContent className="p-6 flex items-center gap-4">
                {icon}
                <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="text-2xl font-bold">{value}</p>
                </div>
            </CardContent>
        </Card>
    )
}
