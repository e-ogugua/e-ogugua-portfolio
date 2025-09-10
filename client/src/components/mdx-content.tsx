import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import { cn } from '@/lib/utils';

interface MdxContentProps {
  source: string;
  className?: string;
}

const components = {
  h1: (props: any) => (
    <h1 className="mb-4 text-4xl font-bold tracking-tight" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mt-10 mb-4 text-3xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-8 mb-3 text-2xl font-semibold tracking-tight" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-7 [&:not(:first-child)]:mt-6" {...props} />
  ),
  a: (props: any) => (
    <a
      className="font-medium text-primary underline underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="mt-6 border-l-2 pl-6 italic text-muted-foreground"
      {...props}
    />
  ),
  hr: (props: any) => (
    <hr className="my-4 md:my-8 border-border" {...props} />
  ),
  table: (props: any) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: (props: any) => (
    <tr className="m-0 border-t p-0 even:bg-muted/50" {...props} />
  ),
  th: (props: any) => (
    <th
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre className="mb-6 mt-6 overflow-x-auto rounded-lg border bg-muted p-4" {...props} />
  ),
  // Add more components as needed
};

export function MdxContent({ source, className }: MdxContentProps) {
  return (
    <div className={cn('prose max-w-none dark:prose-invert', className)}>
      {/* @ts-ignore */}
      <MDXRemote source={source} components={components} />
    </div>
  );
}
