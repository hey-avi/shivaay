import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/constants";
import { ExternalLink, Github, Construction } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col h-full group">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={project.dataAiHint}
          />
           {project.isPlaceholder && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-center p-4">
              <Construction className="h-12 w-12 text-primary mb-4" />
              <p className="text-xl font-semibold text-white">Under Development</p>
              <p className="text-sm text-gray-300">Hang tight, we're building something great!</p>
            </div>
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            {project.liveLink && (
                <Button variant="secondary" size="sm" asChild className="mr-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Site
                  </Link>
                </Button>
              )}
             {project.repoLink && (
                <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Link>
                </Button>
              )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
