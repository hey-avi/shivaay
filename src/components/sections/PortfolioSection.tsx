
"use client";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, allProjectTags } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const PROJECTS_TO_SHOW_ON_HOME = 3;

export function PortfolioSection({ isPage = false }: { isPage?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const displayedProjects = isPage ? projects : projects.slice(0, PROJECTS_TO_SHOW_ON_HOME);
  
  const filteredProjects = activeFilter === "All" 
    ? displayedProjects
    : displayedProjects.filter(p => p.tags.includes(activeFilter));

  return (
    <section className={`py-16 md:py-24 ${isPage ? 'bg-background' : 'bg-secondary/30'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          A glimpse into some of the projects we've built for hackathons, personal exploration, and fun.
        </p>

        {isPage && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={activeFilter === "All" ? "default" : "outline"}
              onClick={() => setActiveFilter("All")}
              className="rounded-full"
            >
              All
            </Button>
            {allProjectTags.map((tag) => (
              <Button
                key={tag}
                variant={activeFilter === tag ? "default" : "outline"}
                onClick={() => setActiveFilter(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
        )}

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No projects found for this filter.</p>
        )}

        {!isPage && projects.length > PROJECTS_TO_SHOW_ON_HOME && (
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
