'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Zap, Globe, MapPin, Search, User } from 'lucide-react';

const primaryNavLinks = [
  { name: 'My Account', href: '/dashboard' },
  { name: 'Billing & Payments', href: '/billing' },
  { name: 'Savings and Solutions', href: '#' },
  { name: 'Start, Stop & Move', href: '/start-stop-move' },
  { name: 'Outages', href: '/outage-center' },
  { name: 'Customer Service', href: '/help-support' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white">
      {/* Top Bar */}
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-accent" />
            <span className="font-headline text-2xl text-primary">UnionCore</span>
            </Link>
            <div className="hidden md:block border-l pl-4">
                <p className="text-xl text-primary/80">For Your Home</p>
            </div>
        </div>
        

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link href="#" className="flex items-center gap-1 text-primary/80 transition-colors hover:text-primary">
              <Globe className="h-4 w-4" />
              Español
            </Link>
            <Link href="#" className="flex items-center gap-1 text-primary/80 transition-colors hover:text-primary">
              <MapPin className="h-4 w-4" />
              North Carolina
            </Link>
             <Link href="#" className="flex items-center gap-1 text-primary/80 transition-colors hover:text-primary">
              <Search className="h-4 w-4" />
              Search
            </Link>
          </div>
          <Button asChild className="hidden md:flex [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)] bg-primary-darker hover:bg-primary-darker/90">
            <Link href="/login"><User className="mr-2"/>Sign in / Register</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                   <Zap className="h-6 w-6 text-accent" />
                  <span className="font-headline text-xl text-primary">UnionCore</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {primaryNavLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-primary/80 transition-colors hover:text-primary">
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="[clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
                  <Link href="/login">Log In</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
       {/* Bottom Bar */}
      <div className="hidden md:flex h-12 bg-primary-darker text-primary-foreground">
         <nav className="container flex h-full max-w-screen-2xl items-center justify-start gap-8 text-sm font-medium">
            {primaryNavLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.name}
                </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
