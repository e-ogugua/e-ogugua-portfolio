import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, ChevronDown, ChevronUp, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string) => void;
  onClearFilters: () => void;
}

export function BlogFilters({
  searchQuery,
  onSearchChange,
  tags,
  activeTag,
  onTagClick,
  onClearFilters
}: BlogFiltersProps) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [hasFilters, setHasFilters] = useState(false);

  useEffect(() => {
    setHasFilters(searchQuery !== '' || activeTag !== null);
  }, [searchQuery, activeTag]);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
        {searchQuery && (
          <button
            type="button"
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
        {/* Tags */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Tags
            </h3>
            {hasFilters && (
              <button
                onClick={onClearFilters}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => onTagClick(tag)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                  activeTag === tag
                    ? 'bg-primary/10 text-primary border-primary/20'
                    : 'bg-muted/50 hover:bg-muted/80 border-border'
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
