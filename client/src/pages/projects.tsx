import { PageLayout } from "@/components/page-layout";
import { Code, Globe, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    name: 'Emmdra Cloud Platform',
    description: 'A comprehensive cloud-based enterprise solution for business process automation and data analytics, built with microservices architecture.',
    tags: ['React', 'TypeScript', 'Node.js', 'Kubernetes', 'PostgreSQL'],
    year: 2023,
    github: 'https://github.com/emmdra/cloud-platform',
    demo: 'https://demo.emmdra.com',
    features: ['Scalable microservices', 'Real-time analytics', 'Role-based access control']
  },
  {
    name: 'Roka Water Distribution System',
    description: 'End-to-end inventory and distribution management system for Roka Table Water, optimizing delivery routes and inventory tracking.',
    tags: ['React Native', 'Firebase', 'Google Maps API', 'Redux'],
    year: 2022,
    demo: 'https://roka.ng/portal',
    features: ['Real-time tracking', 'Inventory management', 'Route optimization']
  },
  {
    name: 'PoshPOULE E-commerce',
    description: 'High-performance e-commerce platform for luxury fashion brand with custom CMS and payment integration.',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    year: 2022,
    github: 'https://github.com/poshpoule/ecommerce',
    demo: 'https://poshpoule.com',
    features: ['Headless CMS', 'Multi-currency', 'AI recommendations']
  },
  {
    name: 'Jepligom Ministry Portal',
    description: 'Community engagement platform with event management, donations, and content delivery system.',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    year: 2021,
    demo: 'https://jepligom.org',
    features: ['Event management', 'Donation system', 'Content management']
  },
  {
    name: 'Zereth Foods Mobile App',
    description: 'Mobile application for ordering organic food products with subscription and delivery features.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
    year: 2023,
    github: 'https://github.com/zerethfoods/app',
    features: ['Subscription model', 'Real-time tracking', 'In-app payments']
  },
  {
    name: 'CEOTR Analytics Dashboard',
    description: 'Business intelligence dashboard providing real-time insights and analytics for enterprise clients.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    year: 2023,
    demo: 'https://analytics.ceotr.com',
    features: ['Custom visualizations', 'Data export', 'Role-based dashboards']
  }
];

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
            Here are some of my most recent and impactful projects across various domains.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-emerald-500" />
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.name}
              </h3>
              
              <p className="text-foreground mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <p className="text-sm font-medium">Key Features:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="default" size="sm" className="w-full">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

