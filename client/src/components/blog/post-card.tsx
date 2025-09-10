import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export function PostCard({
  id,
  title,
  excerpt,
  category,
  publishDate,
  readTime,
  image,
  tags,
  featured = false
}: PostCardProps) {
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group ${featured ? 'col-span-1 md:col-span-2' : ''}`}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-800/50">
        <div className={`flex flex-col ${featured ? 'md:flex-row' : 'flex-col'}`}>
          <div className={`${featured ? 'md:w-1/2' : 'w-full'}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-48 md:h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/600x400';
              }}
            />
          </div>
          <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">{category}</Badge>
              {featured && (
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                  Featured
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">{excerpt}</p>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4 gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button 
              asChild 
              variant="ghost" 
              className="group-hover:underline p-0 h-auto"
            >
              <Link href={`/blog/${id}`}>
                Read more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
