import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Emmanuel Ogugua
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Full-Stack Developer & Technical Leader
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background border-t py-12 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Have a project in mind or want to discuss potential opportunities? 
              I'd love to hear from you.
            </p>
            <Button size="lg">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="mt-12 pt-8 border-t border-muted">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Emmanuel Ogugua. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
