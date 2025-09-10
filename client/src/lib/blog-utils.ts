import { blogPosts } from "@/pages/blog";

export interface BlogCategory {
  slug: string;
  name: string;
  count: number;
}

export function getAllCategories(): BlogCategory[] {
  const categoryMap = new Map<string, number>();
  
  // Count posts per category
  blogPosts.forEach(post => {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  });

  // Convert to array of category objects
  return Array.from(categoryMap.entries()).map(([slug, count]) => ({
    slug,
    name: slug.charAt(0).toUpperCase() + slug.slice(1), // Capitalize first letter
    count
  }));
}

export function getPostsByCategory(categorySlug: string) {
  return blogPosts.filter(post => 
    post.category.toLowerCase() === categorySlug.toLowerCase()
  );
}

export function getCategoryName(slug: string): string {
  return slug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
