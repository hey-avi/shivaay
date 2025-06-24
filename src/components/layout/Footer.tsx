
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { TeamInfoDialog } from "./TeamInfoDialog";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Տհíѵɑɑყ.Ɗєv</h3>
            <p className="text-sm">Crafting digital experiences with passion and precision.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
           <div>
            <h4 className="font-semibold text-foreground mb-2">IMPORTANT NOTICE</h4>
            <div className="text-sm">
              <TeamInfoDialog />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github size={20} /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm">
          <span>&copy; {new Date().getFullYear()} Տհíѵɑɑყ.Ɗєv. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
