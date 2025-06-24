"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, CodeXml, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

function ThemeToggleButton() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9" disabled><Sun className="h-[1.2rem] w-[1.2rem]" /></Button>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function NavigationBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const NavLinks = ({ mobile = false, onLinkClick }: { mobile?: boolean; onLinkClick?: () => void }) => (
    <nav
      className={cn(
        "flex items-center space-x-1 lg:space-x-2",
        mobile && "flex-col space-x-0 space-y-2 pt-4 items-start"
      )}
    >
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          asChild
          className={cn(
            "text-sm font-medium transition-colors",
            pathname === item.href
              ? "text-primary bg-primary/10 hover:bg-primary/20"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
            mobile && "text-base w-full justify-start px-3 py-2"
          )}
          onClick={() => {
            if (onLinkClick) onLinkClick();
          }}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </nav>
  );

  // Basic skeleton to prevent layout shift during mount
  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full py-3">
        <div className="container px-4">
          <div className="relative mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-border/20 bg-card/50 px-4 shadow-lg backdrop-blur-lg sm:px-6">
            <div className="flex items-center space-x-2">
              <CodeXml className="h-6 w-6 text-muted-foreground/50" />
              <div className="h-5 w-28 rounded-md bg-muted-foreground/20" />
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-muted-foreground/20" />
              <div className="h-9 w-24 rounded-full bg-muted-foreground/20" />
            </div>
             <div className="md:hidden flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-muted-foreground/20" />
              <div className="h-8 w-8 rounded-full bg-muted-foreground/20" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full py-3">
      <div className="container px-4">
        <div className="relative mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border border-border/50 bg-card/60 px-4 shadow-lg backdrop-blur-lg sm:px-6">
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Տհíѵɑɑყ.Ɗєv</span>
          </Link>

          <div className="hidden md:flex flex-grow justify-center">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center space-x-2 shrink-0">
            <ThemeToggleButton />
            <Button asChild size="sm" className="rounded-full shadow-sm bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-1">
            <ThemeToggleButton />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/80 backdrop-blur-lg p-4">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    A list of navigation links to move around the site.
                  </SheetDescription>
                </SheetHeader>
                <div className="mb-6 flex justify-between items-center">
                 <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <CodeXml className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">Տհíѵɑɑყ.Ɗєv</span>
                  </Link>
                </div>
                <NavLinks mobile onLinkClick={() => setIsMobileMenuOpen(false)} />
                 <Button asChild size="sm" className="w-full mt-4 rounded-full shadow-sm bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
