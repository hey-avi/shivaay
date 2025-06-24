
import { TeamSection } from "@/components/sections/TeamSection";
import { SkillsExperienceSection } from "@/components/sections/SkillsExperienceSection";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🌀 About <span className="text-primary">Shivaay.dev</span></h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We’re Team Shivaay — a trio of tech enthusiasts and B.Tech students united by curiosity, creativity, and code. We collaborate to design and build impactful digital solutions that go beyond the ordinary. Whether it’s a hackathon, a startup prototype, or a social innovation, we bring ideas to life through teamwork and technology.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg shadow-md bg-secondary/30 h-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">🎯 Our Mission</h3>
            <p className="text-muted-foreground flex-grow">To build purposeful and innovative tech solutions that solve real-world problems — with heart, hustle, and high standards.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-secondary/30 h-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">🌍 Our Vision</h3>
            <p className="text-muted-foreground flex-grow">To grow as a recognized student-led team known for meaningful projects, bold ideas, and a spirit of experimentation that bridges learning and real-world impact.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-secondary/30 h-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">🧭 Our Values</h3>
            <div className="text-muted-foreground text-sm space-y-2 flex-grow">
              <p>Curiosity-Driven Learning – Always exploring, always improving</p>
              <p>Impact First – We build what matters</p>
              <p>Team Above All – Stronger together</p>
              <p>Craft with Care – Clean code, thoughtful design</p>
              <p>Stay Bold, Stay Humble – Big ideas, grounded mindset</p>
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
      <TeamSection />
      <Separator />
      <SkillsExperienceSection />
    </div>
  );
}
