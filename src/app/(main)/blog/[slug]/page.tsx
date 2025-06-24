
import { blogPosts, teamMembers } from "@/lib/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, UserCircle, Tag } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const blogContents: { [key: string]: string } = {
  "future-of-web-dev-nextjs-14": `
    <p class="mb-4 text-lg leading-relaxed">The web development landscape is in a constant state of flux, and Next.js continues to lead the charge. With the release of Next.js 14, the team at Vercel has once again pushed the boundaries of what's possible, focusing on improving performance and developer experience. As students passionate about modern web technologies, we're incredibly excited to explore what this new version brings to the table.</p>
    <h2 class="text-2xl font-semibold my-6 text-primary">A Focus on Speed and Simplicity</h2>
    <p class="mb-4 text-lg leading-relaxed">Next.js 14 isn't about adding a plethora of new APIs. Instead, it refines the foundations laid by previous versions, particularly the App Router. The major highlights include a significantly faster development server with Turbopack and more stable Server Actions.</p>
    <ul class="list-disc list-inside mb-4 space-y-2 text-lg leading-relaxed">
      <li><strong>Turbopack:</strong> Now powering \`next dev\`, it offers up to 53% faster local server startup and 94% faster code updates with Fast Refresh. This means less waiting and more coding.</li>
      <li><strong>Server Actions:</strong> Now stable, this feature allows you to write server-side code directly within your React components, simplifying data mutations and form submissions without needing to create separate API routes.</li>
      <li><strong>Partial Prerendering (Preview):</strong> This is a groundbreaking feature that combines the best of static site generation (SSG) and server-side rendering (SSR). It provides a fast initial static response while streaming dynamic content, creating a seamless and highly performant user experience.</li>
    </ul>
    <blockquote class="border-l-4 border-primary pl-4 italic my-6 py-2 text-muted-foreground">
      "Next.js 14 represents a significant leap forward in our mission to make the web faster. We're doubling down on performance and improving the developer experience from \`next dev\` to \`next build\`." - Vercel
    </blockquote>
    <p class="mb-4 text-lg leading-relaxed">For us, this means building more complex and dynamic applications with greater ease and efficiency. The stabilization of Server Actions, in particular, changes how we think about interacting with our backend, making our code cleaner and more colocated. We're excited to leverage these features in our upcoming hackathon projects!</p>
  `,
  "mastering-responsive-design": `
    <p class="mb-4 text-lg leading-relaxed">In today's multi-device world, a website that looks great only on a desktop is a website that fails its users. Responsive web design is no longer a "nice-to-have"—it's an absolute necessity. It's the practice of building a website that adapts gracefully to any screen size, from a tiny smartphone to a massive desktop monitor, ensuring a consistent and optimal user experience for everyone.</p>
    <h2 class="text-2xl font-semibold my-6 text-primary">The Three Pillars of Responsive Design</h2>
    <p class="mb-4 text-lg leading-relaxed">At its core, responsive design is built on three key technical principles that work together to create fluid, adaptable layouts.</p>
    <ul class="list-disc list-inside mb-4 space-y-2 text-lg leading-relaxed">
      <li><strong>Fluid Grids:</strong> Instead of using fixed-pixel widths, fluid grids use relative units like percentages. This allows the layout to expand and contract with the browser viewport, keeping content in proportion.</li>
      <li><strong>Flexible Media:</strong> Images, videos, and other media are sized in relative units so they can scale within their containing elements, preventing them from breaking the layout on smaller screens.</li>
      <li><strong>Media Queries:</strong> This is the magic ingredient. Media queries are a CSS feature that allows you to apply different styles based on the characteristics of the device, such as its width, height, or orientation. This is how you can significantly alter the layout for mobile, tablet, and desktop views.</li>
    </ul>
    <blockquote class="border-l-4 border-primary pl-4 italic my-6 py-2 text-muted-foreground">
      "The goal of responsive design is to build a single website that provides an optimal viewing experience for all users, regardless of the device they are using."
    </blockquote>
    <p class="mb-4 text-lg leading-relaxed">As a UI/UX enthusiast, mastering these principles is fundamental. Adopting a mobile-first approach—designing for the smallest screen first and then scaling up—often leads to a cleaner, more focused design. It forces you to prioritize content and create a solid foundation for all screen sizes.</p>
  `,
  "secure-php-authentication": `
    <p class="mb-4 text-lg leading-relaxed">When you're building a web application that handles user data, security is paramount. A user's trust is hard to earn and easy to lose. A secure authentication system is the first line of defense in protecting user accounts and sensitive information. While PHP is a powerful language, it also comes with a history of security pitfalls that every developer must be aware of and actively avoid.</p>
    <h2 class="text-2xl font-semibold my-6 text-primary">From Common Mistakes to Best Practices</h2>
    <p class="mb-4 text-lg leading-relaxed">Building a secure login system involves more than just checking if a username and password match. It requires a defensive mindset and adherence to modern security standards.</p>
    <ul class="list-disc list-inside mb-4 space-y-2 text-lg leading-relaxed">
      <li><strong>Never Store Plain Text Passwords:</strong> This is the cardinal sin of web security. Always hash passwords using a strong, one-way algorithm. PHP's built-in \`password_hash()\` and \`password_verify()\` functions are the modern standard and should always be used.</li>
      <li><strong>Prevent SQL Injection:</strong> Use prepared statements with placeholders (using PDO or MySQLi) for all your database queries. This separates the SQL command from the data, preventing malicious users from manipulating your database.</li>
      <li><strong>Manage Sessions Securely:</strong> Use \`session_start()\` at the beginning of your scripts and regenerate the session ID upon login (\`session_regenerate_id(true)\`) to prevent session fixation attacks.</li>
    </ul>
    <blockquote class="border-l-4 border-primary pl-4 italic my-6 py-2 text-muted-foreground">
      "Security is not a feature; it's a process. It's a continuous effort to stay ahead of threats and protect your users."
    </blockquote>
    <p class="mb-4 text-lg leading-relaxed">As a backend developer, understanding these principles is non-negotiable. It's our responsibility to build systems that are not only functional but also resilient against attacks. Taking the time to implement these best practices builds a foundation of trust with your users and protects your application's integrity.</p>
  `
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postContent = blogContents[params.slug] || `<p>Content for this post is not available yet. Please check back later.</p>`;

  const authorDetails = teamMembers.find(member => member.name === post.author);
  const authorImageUrl = authorDetails?.photoUrl || `https://placehold.co/100x100.png?text=${post.author.substring(0,1)}`;
  const authorDataAiHint = authorDetails?.dataAiHint || "professional portrait";

  return (
    <article className="max-w-3xl mx-auto py-8 md:py-16">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center text-sm text-muted-foreground space-x-4 mb-6">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            {post.date}
          </div>
          <div className="flex items-center">
            <UserCircle className="h-4 w-4 mr-1.5" />
            By {post.author}
          </div>
          {/* Example tags, can be added to blogPost constant */}
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1.5" />
            <Badge variant="secondary" className="mr-1">Next.js</Badge>
            <Badge variant="secondary">Web Dev</Badge>
          </div>
        </div>
        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
          <Image src={post.imageUrl} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" data-ai-hint={post.dataAiHint} />
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: postContent }} />
      
      <hr className="my-12 border-border" />

      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={authorImageUrl} alt={post.author} data-ai-hint={authorDataAiHint} />
          <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-muted-foreground">Written by</p>
          <p className="text-lg font-semibold text-foreground">{post.author}</p>
          {/* Add author bio here if available */}
        </div>
      </div>
       <div className="mt-12 text-center">
          <Link href="/blog" className="text-primary hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
    </article>
  );
}
