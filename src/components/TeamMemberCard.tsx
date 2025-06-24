
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/lib/constants";
import { teamMemberIconMap } from "@/lib/constants";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 cursor-pointer group">
          <CardHeader className="items-center text-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={member.photoUrl}
                alt={member.name}
                fill
                className="object-cover"
                sizes="128px"
                data-ai-hint={member.dataAiHint}
              />
            </div>
            <CardTitle className="text-2xl">{member.name}</CardTitle>
            <p className="text-primary font-medium">{member.role}</p>
          </CardHeader>
          <CardContent className="flex-grow text-center">
             <p className="text-sm text-muted-foreground line-clamp-3 px-4">{member.summary}</p>
          </CardContent>
          <CardFooter className="flex justify-center pt-4">
             <Button variant="outline" className="shadow-sm">View Details</Button>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card/80 backdrop-blur-lg border-primary/30">
        <DialogHeader className="items-center text-center space-y-4 pt-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src={member.photoUrl}
              alt={member.name}
              fill
              className="object-cover"
              sizes="128px"
              data-ai-hint={member.dataAiHint}
            />
          </div>
          <div>
            <DialogTitle className="text-3xl">{member.name}</DialogTitle>
            <DialogDescription className="text-primary font-medium">{member.role}</DialogDescription>
          </div>
        </DialogHeader>

        <Separator className="my-4 bg-border/50" />

        <div className="space-y-4 text-sm text-center">
            <p className="text-muted-foreground px-2">{member.summary}</p>
            <div>
                 <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                 <ul className="space-y-1.5 text-muted-foreground list-disc list-inside text-left max-w-xs mx-auto">
                    {member.bioHighlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </div>

        <Separator className="my-4 bg-border/50" />

        <div className="flex justify-center space-x-4 pb-4">
          {member.contactLinks.map((link) => {
            const Icon = teamMemberIconMap[link.type] || teamMemberIconMap.default;
            return (
              <Button key={link.type} variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s ${link.type}`}>
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
