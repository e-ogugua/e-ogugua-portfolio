import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";
import { BlogCategory } from "@/lib/blog-utils";

interface BlogFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: BlogCategory[];
  tags: string[];
  onTagToggle: (tag: string) => void;
  selectedTags: string[];
  onClearFilters: () => void;
}

export function BlogFilters({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  categories,
  tags,
  onTagToggle,
  selectedTags,
  onClearFilters
}: BlogFiltersProps) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [hasFilters, setHasFilters] = useState(false);

  useEffect(() => {
    setHasFilters(
      searchQuery !== '' || 
      activeCategory !== 'all' || 
      selectedTags.length > 0
    );
  }, [searchQuery, activeCategory, selectedTags]);

  const handleClearFilters = () => {
    onSearchChange('');
    onCategoryChange('all');
    onClearFilters();
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Mobile Filters Toggle */}
      <Button
        variant="outline"
        className="md:hidden w-full flex items-center justify-between"
        onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
      >
        <span>Filters</span>
        <span className="flex items-center">
          {hasFilters && (
            <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
          )}
          <svg
            className={`h-4 w-4 transform transition-transform ${
              isMobileFiltersOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </Button>

      <div
        className={`space-y-6 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}
      >
        {/* Categories */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Categories</h3>
            <Link 
              href="/blog/categories" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="space-y-1">
            <button
              onClick={() => onCategoryChange('all')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm ${
                activeCategory === 'all'
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'hover:bg-muted/50'
              }`}
            >
              <span>All Articles</span>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                {categories.reduce((sum, cat) => sum + cat.count, 0)}
              </span>
            </button>
            {categories.slice(0, 5).map((category) => (
              <button
                key={category.slug}
                onClick={() => onCategoryChange(category.slug)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm ${
                  activeCategory === category.slug
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'hover:bg-muted/50'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
            {categories.length > 5 && (
              <Button
                variant="ghost"
                size="sm"
                className="w-full mt-2 text-muted-foreground hover:text-foreground"
                asChild
              >
                <Link href="/blog/categories" className="text-xs">
                  View all categories <ChevronDown className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Tags */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Tags</h3>
            {selectedTags.length > 0 && (
              <button
                onClick={onClearFilters}
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={`text-xs px-2.5 py-1 rounded-full border ${
                  selectedTags.includes(tag)
                    ? 'bg-primary/10 text-primary border-primary/20'
                    : 'bg-background text-muted-foreground border-border hover:border-foreground/30'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
