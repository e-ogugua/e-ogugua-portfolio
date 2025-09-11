import { useState, useEffect } from 'react';
import { Link } from "wouter";
import { PageLayout } from "@/components/page-layout";
import { getAllCategories, getBlogPosts } from "@/lib/blog-utils";

interface CategoryInfo {
  name: string;
  slug: string;
  count: number;
}

export default function BlogCategories() {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const [categoryNames, allPosts] = await Promise.all([
          getAllCategories(),
          getBlogPosts()
        ]);

        // Count posts per category
        const categoryMap = new Map<string, number>();
        allPosts.forEach(post => {
          post.tags?.forEach(tag => {
            categoryMap.set(tag, (categoryMap.get(tag) || 0) + 1);
          });
        });

        // Create category objects with counts
        const categoryData = categoryNames.map(name => ({
          name,
          slug: name.toLowerCase().replace(/\s+/g, '-'),
          count: categoryMap.get(name) || 0
        }));

        setCategories(categoryData);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <PageLayout 
      title="Blog Categories" 
      description="Browse all blog post categories"
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">Blog Categories</h1>
        
        {loading ? (
          <div>Loading categories...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : categories.length === 0 ? (
          <div>No categories found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
            <Link 
              key={category.slug} 
              href={`/blog/category/${category.slug}`}
              className="group block h-full"
            >
              <div className="p-6 border rounded-lg hover:border-primary/50 transition-colors h-full">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {category.count} {category.count === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm">
                  Browse all posts in {category.name}
                </p>
              </div>
            </Link>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
