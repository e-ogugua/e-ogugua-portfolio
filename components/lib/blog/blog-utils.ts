import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
  readTime: string;
  author?: string;
  image?: string;
  featured?: boolean;
}

export interface BlogCategory {
  slug: string;
  name: string;
  count: number;
}

const BLOG_POSTS_DIR = path.join(process.cwd(), 'content/blog');

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(BLOG_POSTS_DIR);
  
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(BLOG_POSTS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      tags: data.tags || [],
      content,
      readTime: calculateReadTime(content),
      author: data.author || 'Emmanuel Ogugua',
      image: data.image || '',
      featured: data.featured || false,
    };
  });

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllCategories(): BlogCategory[] {
  const posts = getAllBlogPosts();
  const tagMap = new Map<string, number>();
  
  // Count posts per tag
  posts.forEach(post => {
    post.tags.forEach(tag => {
      const count = tagMap.get(tag) || 0;
      tagMap.set(tag, count + 1);
    });
  });

  // Convert to array of category objects
  return Array.from(tagMap.entries()).map(([slug, count]) => ({
    slug: slug.toLowerCase(),
    name: slug,
    count
  }));
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug);
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.featured).slice(0, limit);
}
