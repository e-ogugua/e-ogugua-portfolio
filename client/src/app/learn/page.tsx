import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getLearnModules } from "@/lib/learn-utils";

export default async function LearnPage() {
  try {
    const modules = await getLearnModules();
    
    if (!modules || modules.length === 0) {
      return (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Learning Center</h1>
            <p className="text-muted-foreground">No learning modules available at the moment. Please check back later.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of learning modules and lessons to enhance your skills.
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <Link key={module.id} href={`/learn/${module.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 w-12">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{module.title}</CardTitle>
                    <CardDescription>
                      {module.description || `Explore ${module.title} lessons`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {module.lessons.length > 0 ? (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Lessons ({module.lessons.length}):</h4>
                        <ul className="space-y-1 text-sm">
                          {module.lessons.slice(0, 3).map((lesson) => (
                            <li key={lesson.slug} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="truncate">{lesson.title}</span>
                            </li>
                          ))}
                          {module.lessons.length > 3 && (
                            <li className="text-xs text-muted-foreground">
                              +{module.lessons.length - 3} more lessons
                            </li>
                          )}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No lessons available yet.</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <div className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                      View Module
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading learning modules:', error);
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="text-muted-foreground">
            We're having trouble loading the learning center. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
