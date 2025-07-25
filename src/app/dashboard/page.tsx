import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowUpRight, FileText, Settings, HelpCircle, Power } from "lucide-react";
import EnergyUsageChart from "./components/energy-usage-chart";
import SmartRecommendations from "./components/smart-recommendations";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6 bg-background">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-headline tracking-tight">
          Welcome back, Alex
        </h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="lg:col-span-2 [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              Your Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold text-primary">$145.45</div>
            <p className="text-sm text-destructive mt-2">
              Payment due on July 31, 2024
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
              Pay Now
            </Button>
          </CardFooter>
        </Card>
        
        <QuickLinkCard 
            icon={<FileText className="h-8 w-8 text-accent" />}
            title="Billing History"
            href="/billing"
        />

        <QuickLinkCard 
            icon={<Settings className="h-8 w-8 text-accent" />}
            title="Manage Account"
            href="#"
        />
        
        <QuickLinkCard 
            icon={<Power className="h-8 w-8 text-accent" />}
            title="Start/Stop/Move"
            href="/start-stop-move"
        />

        <QuickLinkCard 
            icon={<HelpCircle className="h-8 w-8 text-accent" />}
            title="Get Help"
            href="/help-support"
        />

        <Card className="lg:col-span-2 [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
          <CardHeader>
            <CardTitle>Energy Usage</CardTitle>
            <CardDescription>Your electricity usage for the past 6 months.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <EnergyUsageChart />
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Detailed Usage</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="pt-6">
        <SmartRecommendations />
      </div>
    </div>
  );
}

function QuickLinkCard({ icon, title, href }: { icon: React.ReactNode, title: string, href: string }) {
    return (
        <Link href={href}>
            <Card className="h-full flex flex-col justify-between hover:bg-muted/50 transition-colors [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
                <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">{title}</CardTitle>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    {icon}
                </CardContent>
            </Card>
        </Link>
    );
}
