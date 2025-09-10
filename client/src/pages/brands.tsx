import { PageLayout } from "@/components/page-layout";

export default function Brands() {
  return (
    <PageLayout
      title="Brands"
      description="Explore the brands and businesses I've had the privilege to work with and grow."
    >
      <div className="space-y-12">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Brand Portfolio
          </h2>
          <p className="mt-2 text-muted-foreground">
            A showcase of brands and businesses I've helped build and grow.
          </p>
        </div>
        
        {/* Brand cards will be mapped here */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="h-4 w-4 rounded-full bg-amber-500/20 group-hover:bg-amber-500/40 transition-colors" />
              <h3 className="mt-4 text-lg font-medium text-foreground">
                Brand {i}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Brief description of the brand and its impact.
              </p>
              <div className="mt-6">
                <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground/50">Brand Logo</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Strategy', 'Growth', 'Marketing'].map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800"
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

