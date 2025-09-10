import { useParams } from "wouter";
import { useMemo } from "react";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/pages/blog";
import { Link } from "wouter";
import { Helmet } from 'react-helmet-async';
import { BlogPostMeta } from "@/components/seo/blog-post-meta";
import { CommentsProvider } from "@/contexts/comments-context";
import { CommentsSection } from "@/components/comments/comments-section";

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  
  // Find the blog post with the matching slug
  const post = useMemo(() => {
    return blogPosts.find(p => p.id === slug);
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The requested blog post could not be found.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  const formattedDate = format(new Date(post.publishDate), 'MMMM d, yyyy');

  return (
    <>
      <BlogPostMeta 
        title={post.title}
        excerpt={post.excerpt}
        slug={post.id}
        image={post.image}
        publishDate={post.publishDate}
        author={post.author}
        tags={post.tags}
      />
      
      <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <Button variant="ghost" asChild className="mb-8 -ml-2 group">
        <Link href="/blog" className="transition-colors hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </Button>

      <header className="mb-12">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
          <span className="flex items-center">
            <Calendar className="mr-1.5 h-4 w-4 text-primary" />
            {formattedDate}
          </span>
          <span className="text-muted-foreground/50">•</span>
          <span className="flex items-center">
            <Clock className="mr-1.5 h-4 w-4 text-primary" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-muted/50 text-foreground/80 hover:bg-muted transition-colors"
            >
              <Tag className="mr-1.5 h-3 w-3 text-primary" />
              {tag}
            </span>
          ))}
        </div>

        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl bg-muted/50 mb-12 shadow-lg border border-border/50">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://via.placeholder.com/1200x675';
            }}
          />
        </div>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none pb-12">
        <p className="text-lg md:text-xl leading-relaxed md:leading-normal text-foreground/90 mb-8">
          {post.content}
        </p>
        
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
          Understanding the Core Concepts
        </h2>
        <p className="text-foreground/90 mb-6">
          This is where the main content of the blog post would go. In a real application,
          this would be replaced with your actual blog post content, possibly from a CMS
          or markdown files.
        </p>
        
        <div className="bg-muted/30 border-l-4 border-primary pl-6 py-4 my-8 rounded-r-lg">
          <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
            <span className="text-primary">💡</span> Key Takeaways
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-foreground/90">Important point one about the topic</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-foreground/90">Key insight or finding</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-foreground/90">Practical application or example</span>
            </li>
          </ul>
        </div>
        
        <p className="text-foreground/90 mb-6">
          Additional paragraphs and content would go here. The structure would depend
          on the actual content of each blog post.
        </p>
        
        <div className="bg-muted/20 p-6 rounded-xl my-12">
          <h3 className="text-xl font-semibold mb-3 text-foreground">Did you find this helpful?</h3>
          <p className="text-foreground/80 mb-4">
            Let me know if you have any questions or feedback in the comments below!
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              👍 Helpful
            </Button>
            <Button variant="outline" size="sm">
              💬 Comment
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-border/50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center text-xl font-bold text-primary">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-medium text-foreground">Written by</h3>
              <p className="text-muted-foreground">{post.author}</p>
            </div>
          </div>
          <Button 
            asChild 
            variant="outline" 
            className="group w-full sm:w-auto justify-center"
          >
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Blog
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30">
          <h3 className="text-lg font-semibold mb-4">Read Next</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(post => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.id}`}
                  className="block group"
                >
                  <div className="p-4 rounded-lg hover:bg-muted/30 transition-colors">
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </footer>
    </article>
    </>
  );
}
