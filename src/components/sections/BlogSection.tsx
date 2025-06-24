
import { BlogPostCard } from "@/components/BlogPostCard";
import { blogPosts } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const POSTS_TO_SHOW_ON_HOME = 3;

export function BlogSection({ isPage = false }: { isPage?: boolean }) {
  const displayedPosts = isPage ? blogPosts : blogPosts.slice(0, POSTS_TO_SHOW_ON_HOME);

  return (
    <section className={`py-16 md:py-24 ${isPage ? 'bg-background' : 'bg-background'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Latest <span className="text-primary">Insights</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Stay updated with our latest articles, tips, and news from the world of web development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        {!isPage && blogPosts.length > POSTS_TO_SHOW_ON_HOME && (
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/blog">
                Read All Posts <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
