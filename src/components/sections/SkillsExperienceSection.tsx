
import { SkillProgressBar } from "@/components/SkillProgressBar";
import { skills } from "@/lib/constants";

export function SkillsExperienceSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-primary">Toolkit</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          We are passionate learners, continuously exploring and applying these technologies to build exciting projects.
        </p>
        <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Technical Skills</h3>
            {skills.map((skill) => (
              <SkillProgressBar key={skill.id} skill={skill} />
            ))}
        </div>
      </div>
    </section>
  );
}
