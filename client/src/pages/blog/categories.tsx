import { Link } from "wouter";
import { PageLayout } from "@/components/page-layout";
import { getAllCategories } from "@/lib/blog-utils";

export default function BlogCategories() {
  const categories = getAllCategories();

  return (
    <PageLayout 
      title="Blog Categories" 
      description="Browse all blog post categories"
    >
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">Blog Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              href={`/blog/category/${category.slug}`}
              className="group"
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
      </div>
    </PageLayout>
  );
}
