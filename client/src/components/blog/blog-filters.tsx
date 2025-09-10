'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, Tag as TagIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

export interface BlogFiltersProps {
  tags: string[];
  activeTag: string | null;
  searchQuery: string;
}

export function BlogFilters({ tags, activeTag: initialActiveTag, searchQuery: initialSearchQuery }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [activeTag, setActiveTag] = useState<string | null>(initialActiveTag);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUrl(activeTag, searchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (!e.target.value) updateUrl(activeTag, '');
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
    updateUrl(activeTag === tag ? null : tag);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveTag(null);
    updateUrl(null, '');
  };

  const updateUrl = (tag: string | null = activeTag, query: string = searchQuery) => {
    const params = new URLSearchParams();
    
    if (query) params.set('q', query);
    if (tag) params.set('tag', tag);
    
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search posts..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (!e.target.value) updateUrl(activeTag, '');
          }}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              updateUrl(activeTag, '');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {/* Tags */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <TagIcon className="h-4 w-4" />
            Tags
          </h3>
          {(searchQuery || activeTag) && (
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear all
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
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
  );
}
