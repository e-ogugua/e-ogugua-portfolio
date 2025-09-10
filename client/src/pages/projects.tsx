import { PageLayout } from "@/components/page-layout";

export default function Projects() {
  return (
    <PageLayout
      title="Projects"
      description="A selection of my recent development projects and contributions."
    >
      <div className="space-y-12">
        <div className="border-l-4 border-emerald-500 pl-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            Here are some of my most recent and impactful projects.
          </p>
        </div>
        
        {/* Project cards will be mapped here */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-4 w-4 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-colors" />
              <h3 className="mt-4 text-lg font-medium text-foreground">
                Project {i}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Brief description of the project and its key features.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js'].map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

