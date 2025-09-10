import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug, getBlogPosts } from '@/lib/blog-utils';
import { PageLayout } from '@/components/layout/page-layout';
import { MdxContent } from '@/components/mdx-content';
import { format } from 'date-fns';
import { Calendar, Clock, Tag as TagIcon } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Emmanuel Ogugua's Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <PageLayout title={post.title}>
      <article className="prose prose-slate mx-auto dark:prose-invert lg:prose-lg">
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex items-center gap-1">
                <TagIcon className="h-4 w-4" />
                <span>{post.tags.join(', ')}</span>
              </div>
            )}
          </div>
        </div>

        <div className="prose prose-slate mx-auto dark:prose-invert lg:prose-lg">
          <MdxContent source={post.content} />
        </div>

        <div className="mt-12 border-t pt-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
