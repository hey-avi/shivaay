
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/lib/constants";
import { CalendarDays, UserCircle } from "lucide-react";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col h-full group">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={post.dataAiHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {post.summary}
        </CardDescription>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground justify-between">
        <div className="flex items-center">
          <CalendarDays className="h-4 w-4 mr-1.5" />
          {post.date}
        </div>
        <div className="flex items-center">
          <UserCircle className="h-4 w-4 mr-1.5" />
          {post.author}
        </div>
      </CardFooter>
    </Card>
  );
}
