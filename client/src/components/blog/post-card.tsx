import Link from 'next/link';
import { Calendar, Clock, Tag as TagIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: number;
  image?: string;
  featured?: boolean;
}

export function PostCard({
  slug,
  title,
  date,
  description,
  tags = [],
  readTime,
  image,
  featured = false,
}: PostCardProps) {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md',
        featured && 'md:col-span-2'
      )}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime} min read</span>
          </div>
        </div>
        
        <h3 className="mb-2 text-xl font-semibold leading-tight">
          <Link href={`/blog/${slug}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        
        <p className="mb-4 flex-1 text-muted-foreground">{description}</p>
        
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t">
          <Link 
            href={`/blog/${slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Read more
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
