import { Suspense } from 'react';
import path from 'path';
import { PageLayout } from '@/components/layout/page-layout';
import { BlogList } from '@/components/blog/blog-list';
import { BlogFilters } from '@/components/blog/blog-filters';
import { getBlogPosts, getTags } from '@/lib/blog-utils';
import { notFound } from 'next/navigation';

type SearchParams = {
  q?: string;
  tag?: string;
  [key: string]: string | string[] | undefined;
};

interface BlogPageProps {
  searchParams: SearchParams;
}


export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { q: searchQuery, tag: activeTag } = searchParams;
  
  try {
    // Debug: Log the current working directory and content directory path
    console.log('Current working directory:', process.cwd());
    console.log('Content directory path:', path.join(process.cwd(), 'content/blog'));
    
    // Get all posts and filter based on search and tag
    const allPosts = await getBlogPosts();
    const filteredPosts = allPosts.filter((post) => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      
      return matchesSearch && matchesTag;
    });
    
    // Get all unique tags for the filter component
    const allTags = await getTags();
    
    // If no posts found, show a message
    if (allPosts.length === 0) {
      return (
        <PageLayout 
          title="Blog" 
          description="Thoughts, stories and ideas about software development, business, and technology."
        >
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">No blog posts found</h2>
              <p className="text-muted-foreground">
                Check back later for new content!
              </p>
            </div>
          </div>
        </PageLayout>
      );
    }
  
    return (
      <PageLayout 
        title="Blog" 
        description="Thoughts, stories and ideas about software development, business, and technology."
      >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="w-full lg:w-72 shrink-0">
            <BlogFilters 
              tags={allTags} 
              activeTag={activeTag || ''}
              searchQuery={searchQuery || ''}
            />
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <Suspense fallback={<div>Loading blog posts...</div>}>
              <BlogList posts={filteredPosts} />
            </Suspense>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No posts found</h3>
                <p className="text-muted-foreground mt-2">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
        </div>
      </PageLayout>
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    notFound();
  }
}
