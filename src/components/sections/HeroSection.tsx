
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 text-center rounded-2xl shadow-lg bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <Zap className="mx-auto h-16 w-16 text-primary mb-6 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Crafting <span className="text-primary">Innovative</span> Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          We are Տհíѵɑɑყ.Ɗєv, a dedicated team of web professionals specializing in WordPress, custom development, and stunning UI/UX design. Let's build something amazing together.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg">
            <Link href="/portfolio">
              View Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
