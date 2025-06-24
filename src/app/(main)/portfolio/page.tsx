
import { PortfolioSection } from "@/components/sections/PortfolioSection";

export default function PortfolioPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      <section className="py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Work</span></h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore a selection of projects that showcase our skills, creativity, and commitment to excellence. Each project is a testament to our ability to deliver impactful digital solutions.
        </p>
      </section>
      <PortfolioSection isPage={true} />
    </div>
  );
}
