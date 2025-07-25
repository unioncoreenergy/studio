import Link from 'next/link';
import { Zap, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-darker text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-8 w-8 text-accent" />
              <span className="font-headline text-2xl">UnionCore Energy</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Powering communities with reliable and clean energy.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-sm hover:underline text-primary-foreground/70 hover:text-primary-foreground">My Account</Link></li>
              <li><Link href="/billing" className="text-sm hover:underline text-primary-foreground/70 hover:text-primary-foreground">Billing & Payments</Link></li>
              <li><Link href="/outage-center" className="text-sm hover:underline text-primary-foreground/70 hover:text-primary-foreground">Outage Center</Link></li>
              <li><Link href="/help-support" className="text-sm hover:underline text-primary-foreground/70 hover:text-primary-foreground">Help & Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:underline text-primary-foreground/70 hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="#" className="text-sm hover:underline text-primary-foreground/70 hover:text-primary-foreground">Careers</Link></li>
              <li><Link href="#" className="text-sm hover:underline text-primary-foreground/70 hover:text-primary-foreground">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground" /></a>
              <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <div className="flex justify-center gap-4 mb-2">
            <Link href="/legal/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/legal/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
            <Link href="/legal/refund-policy" className="hover:underline">Refund Policy</Link>
          </div>
          <p>&copy; {year} UnionCore Energy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
