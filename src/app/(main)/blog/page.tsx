
import { BlogSection } from "@/components/sections/BlogSection";

export default function BlogPage() {
  return (
    <div className="space-y-8 md:space-y-12">
       <section className="py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Blog</span></h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Dive into our collection of articles, tutorials, and insights on web development, design trends, and industry best practices.
        </p>
      </section>
      <BlogSection isPage={true} />
    </div>
  );
}
