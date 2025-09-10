'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Shield, Leaf, Droplets } from 'lucide-react';

const projects = [
  {
    title: "Palace Security Enhancement",
    description: "Comprehensive security structure enhancement for Igwe Cosmos Odiri Morah Palace, Nneyi Umueri, Anambra State.",
    icon: <Shield className="h-6 w-6 text-primary" />,
    tags: ["Security", "Infrastructure", "Construction"],
    status: "In Progress"
  },
  {
    title: "ENSUBEB Classroom Project",
    description: "Renovation and completion of 3-classroom block for Enugu State Universal Basic Education Board.",
    icon: <Building className="h-6 w-6 text-primary" />,
    tags: ["Education", "Renovation", "Construction"],
    status: "Completed"
  },
  {
    title: "Igwe Nneyi Beautification",
    description: "Landscape design and construction for the beautification of Igwe Nneyi surroundings and extended perimeter.",
    icon: <Leaf className="h-6 w-6 text-primary" />,
    tags: ["Landscaping", "Design", "Construction"],
    status: "In Progress"
  },
  {
    title: "Organic Farming Operations",
    description: "Development and management of organic farming operations across multiple locations with IT integration.",
    icon: <Leaf className="h-6 w-6 text-primary" />,
    tags: ["Agriculture", "Technology", "Operations"],
    status: "Ongoing"
  },
  {
    title: "Jesus Power Arena",
    description: "Redesign and completion of the Jesus Power Arena project, Ogugua Ikejehova Family Legacy.",
    icon: <Building className="h-6 w-6 text-primary" />,
    tags: ["Religious", "Construction", "Renovation"],
    status: "Planning"
  },
  {
    title: "Clean Water Initiative",
    description: "Rebranding and setup of water production and distribution business for the Family Legacy.",
    icon: <Droplets className="h-6 w-6 text-primary" />,
    tags: ["Water", "Infrastructure", "Business"],
    status: "Planning"
  }
];

export default function Projects() {
  return (
    <section className="py-12 md:py-20 bg-muted/20" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my development and construction projects that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col transition-all hover:shadow-lg mx-auto w-full max-w-sm sm:max-w-none">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {project.icon}
                  </div>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'outline'}
                    className={project.status === 'In Progress' ? 'border-amber-500 text-amber-600' : 
                              project.status === 'Planning' ? 'border-blue-500 text-blue-600' :
                              project.status === 'Ongoing' ? 'border-green-500 text-green-600' : ''}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
