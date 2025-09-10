import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function PageLayout({
  title,
  description,
  children,
  className,
}: PageLayoutProps) {
  return (
    <div className={cn("container mx-auto px-4 py-12 sm:px-6 lg:px-8", className)}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {description}
          </p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}
