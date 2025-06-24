
"use client";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/lib/constants";
import { useEffect, useState } from "react";

export function SkillProgressBar({ skill }: { skill: Skill }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar on mount
    const timer = setTimeout(() => setProgress(skill.level), 100);
    return () => clearTimeout(timer);
  }, [skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-medium text-primary">{progress}%</span>
      </div>
      <Progress value={progress} aria-label={`${skill.name} skill level: ${skill.level}%`} className="h-3 [&>div]:bg-primary" />
    </div>
  );
}
