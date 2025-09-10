import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { BlogPost } from '@/types';

// Path is relative to the project root
const contentDirectory = path.join(process.cwd(), 'content/blog');


export async function getBlogPosts(): Promise<BlogPost[]> {
  console.log('Content directory path:', contentDirectory);
  console.log('Directory exists:', fs.existsSync(contentDirectory));
  
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    console.log('Found files:', fileNames);
    
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        return await getPostBySlug(slug);
      })
    );

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error in getBlogPosts:', error);
    throw error;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Calculate read time (average reading speed: 200 words per minute)
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    description: data.description || '',
    tags: data.tags || [],
    content,
    readTime,
    author: data.author || 'Emmanuel Ogugua',
    image: data.image || '/default-blog-image.jpg',
    featured: data.featured || false,
  };
}

export async function getTags(): Promise<string[]> {
  const posts = await getBlogPosts();
  const tags = new Set<string>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}

export async function getFeaturedPosts(limit: number = 2): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter(post => post.featured).slice(0, limit);
}
