import { useState, useEffect } from 'react';
import { useParams } from "wouter";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { PostCard } from "@/components/blog/post-card";
import { getPostsByCategory, getCategoryName } from "@/lib/blog-utils";
import type { BlogPost } from "@/types";

interface CategoryPageProps {
  slug: string;
}

export default function CategoryPage({ slug }: CategoryPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const categoryName = getCategoryName(slug);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const categoryPosts = await getPostsByCategory(slug);
        setPosts(categoryPosts);
      } catch (err) {
        console.error('Error fetching category posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [slug]);

  return (
    <PageLayout 
      title={`${categoryName} Posts`} 
      description={`Browse all posts in the ${categoryName} category`}
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <Button 
          variant="ghost" 
          asChild 
          className="mb-8 -ml-2 group"
        >
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Blog
          </Link>
        </Button>

        {loading ? (
          <div>Loading posts...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            <div className="mb-12">
              <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
              <p className="text-muted-foreground">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
              </p>
            </div>

            <div className="space-y-8">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No posts found</h3>
                <p className="text-muted-foreground mb-6">
                  There are no posts in this category yet.
                </p>
                <Button asChild>
                  <Link href="/blog">Browse all posts</Link>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </PageLayout>
  );
}
