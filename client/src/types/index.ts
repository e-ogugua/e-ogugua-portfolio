export interface SearchParams {
  [key: string]: string | string[] | undefined;
  q?: string;
  tag?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
  readTime: number;
  author: string;
  image: string;
  featured?: boolean;
}
