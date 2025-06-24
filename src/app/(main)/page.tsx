
import { HeroSection } from "@/components/sections/HeroSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { SkillsExperienceSection } from "@/components/sections/SkillsExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <TeamSection />
      <SkillsExperienceSection />
      <ContactSection />
    </div>
  );
}
