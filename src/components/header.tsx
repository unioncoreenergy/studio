'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Zap } from 'lucide-react';

const navLinks = [
  { name: 'For Your Home', href: '#' },
  { name: 'For Your Business', href: '#' },
  { name: 'Outage Center', href: '/outage-center' },
  { name: 'Help', href: '/help-support' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-accent" />
          <span className="font-headline text-xl text-primary">UnionCore Energy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-primary/80 transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">
            <Link href="/login">Log In</Link>
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
                  {navLinks.map((link) => (
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
    </header>
  );
}
