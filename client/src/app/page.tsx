import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Brands from '@/components/brands';
import Services from '@/components/services';
import About from '@/components/about';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Brands />
      <Services />
      
      {/* Footer */}
      <footer className="bg-background border-t py-12">
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

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
