import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/page-layout";
import { PostCard } from "@/components/blog/post-card";
import { BlogFilters } from "@/components/blog/blog-filters";
import { Pagination } from "@/components/blog/pagination";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { getAllCategories } from "@/lib/blog-utils";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
};

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Full-Stack Development in Africa",
    excerpt: "Exploring how African developers are shaping the global tech landscape with innovative full-stack solutions and unique market insights.",
    content: "As the African tech ecosystem continues to mature, full-stack developers are playing a crucial role in building solutions that address local challenges while competing globally...",
    category: "development",
    author: "Emmanuel Ogugua",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Full-Stack", "Africa", "Tech", "Innovation"],
    featured: true
  },
  {
    id: "2",
    title: "Building Scalable SaaS Products: Lessons from the Field",
    excerpt: "Key architectural decisions and business strategies that determine the success of SaaS products in emerging markets.",
    content: "After building multiple SaaS products for African and global markets, I've learned that scalability isn't just about technical architecture...",
    category: "business",
    author: "Emmanuel Ogugua",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["SaaS", "Scalability", "Business", "Strategy"],
    featured: true
  },
  {
    id: "3",
    title: "React Performance: Beyond the Basics",
    excerpt: "Advanced techniques for optimizing React applications, from code splitting to memory management and beyond.",
    content: "Performance optimization in React goes far beyond basic memoization. In this deep dive, we'll explore advanced patterns...",
    category: "development",
    author: "Emmanuel Ogugua",
    publishDate: "2024-01-05",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React", "Performance", "JavaScript", "Frontend"],
    featured: false
  },
  {
    id: "4",
    title: "The Rise of African Tech Hubs",
    excerpt: "How innovation hubs across Africa are nurturing the next generation of tech entrepreneurs.",
    content: "From Lagos to Nairobi, tech hubs are springing up across the continent, providing resources and community for aspiring founders...",
    category: "insights",
    author: "Emmanuel Ogugua",
    publishDate: "2023-12-20",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1581093450233-5941e5ab2cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Africa", "Startups", "Innovation", "Ecosystem"],
    featured: false
  },
  {
    id: "5",
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt: "Lessons learned from implementing TypeScript in enterprise-level applications.",
    content: "TypeScript has become a game-changer for large codebases. Here's how we've leveraged its features to improve our development workflow...",
    category: "development",
    author: "Emmanuel Ogugua",
    publishDate: "2023-12-15",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["TypeScript", "Best Practices", "Web Development", "JavaScript"],
    featured: false
  },
  {
    id: "6",
    title: "Building a Remote-First Company Culture",
    excerpt: "Strategies for maintaining productivity and team cohesion in a distributed workforce.",
    content: "The future of work is remote, but building an effective remote culture requires intention and the right tools...",
    category: "business",
    author: "Emmanuel Ogugua",
    publishDate: "2023-12-10",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Remote Work", "Company Culture", "Productivity", "Management"],
    featured: false
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get all categories with post counts
  const categories = useMemo(() => {
    return getAllCategories();
  }, []);

  // Get all unique tags from blog posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter blog posts based on search, category, and tags
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = 
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === 'all' || 
        post.category === activeCategory;
      
      const matchesTags = 
        selectedTags.length === 0 ||
        selectedTags.every(tag => post.tags.includes(tag));
      
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, activeCategory, selectedTags]);

  // Get featured posts (first 2 featured posts)
  const featuredPosts = useMemo(() => {
    return filteredPosts
      .filter(post => post.featured)
      .slice(0, 2);
  }, [filteredPosts]);

  // Get regular posts (non-featured or featured beyond the first 2)
  const regularPosts = useMemo(() => {
    // Skip featured posts that are already shown in the featured section
    const featuredIds = new Set(featuredPosts.map(p => p.id));
    return filteredPosts.filter(post => !featuredIds.has(post.id));
  }, [filteredPosts, featuredPosts]);

  // Pagination logic
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const currentPosts = regularPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Handle tag toggle
  const handleTagToggle = (tag: string) => {
    setCurrentPage(1); // Reset to first page when changing tags
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Handle clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setSelectedTags([]);
    setCurrentPage(1);
  };

  return (
    <PageLayout 
      title="Blog" 
      description="Thoughts, stories and ideas about software development, business, and technology."
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with filters */}
        <aside className="lg:w-72 xl:w-80 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <Button variant="outline" asChild className="hidden lg:flex">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <BlogFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              categories={categories}
              tags={allTags}
              onTagToggle={handleTagToggle}
              selectedTags={selectedTags}
              onClearFilters={handleClearFilters}
            />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Back button for mobile */}
          <Button variant="outline" asChild className="lg:hidden mb-6 w-full">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
              <div className="grid gap-6">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} {...post} featured />
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {searchQuery || activeCategory !== 'all' || selectedTags.length > 0
                  ? 'Filtered Posts'
                  : 'All Posts'}
              </h2>
              <div className="text-sm text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
              </div>
            </div>

            {currentPosts.length > 0 ? (
              <>
                <div className="grid gap-6">
                  <AnimatePresence>
                    {currentPosts.map((post) => (
                      <PostCard key={post.id} {...post} />
                    ))}
                  </AnimatePresence>
                </div>

                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No posts found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button 
                  variant="ghost" 
                  className="mt-4"
                  onClick={handleClearFilters}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
