import { PageLayout } from "@/components/page-layout";

// Placeholder component for individual blog post
export const Post = ({ slug }: { slug: string }) => (
  <PageLayout title={`Post: ${slug}`}>
    <p>This blog post is under construction. Check back soon!</p>
  </PageLayout>
);

// Placeholder for Development page
export const Development = () => (
  <PageLayout 
    title="Development Services"
    description="Custom software development solutions tailored to your business needs."
  >
    <div className="py-12 text-center">
      <p className="text-lg text-muted-foreground">
        Our development services page is coming soon. In the meantime, please contact us for more information.
      </p>
    </div>
  </PageLayout>
);

// Placeholder for Consulting page
export const Consulting = () => (
  <PageLayout 
    title="Consulting Services"
    description="Expert consulting to help your business grow and succeed."
  >
    <div className="py-12 text-center">
      <p className="text-lg text-muted-foreground">
        Our consulting services page is coming soon. Please reach out to discuss how we can help your business.
      </p>
    </div>
  </PageLayout>
);

// Placeholder for Training page
export const Training = () => (
  <PageLayout 
    title="Training Programs"
    description="Professional training to upskill your team."
  >
    <div className="py-12 text-center">
      <p className="text-lg text-muted-foreground">
        Our training programs page is under development. Contact us to learn about our training offerings.
      </p>
    </div>
  </PageLayout>
);
