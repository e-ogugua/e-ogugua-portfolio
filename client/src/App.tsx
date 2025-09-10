import { Route, Router, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/use-theme";
import { PersonaProvider, usePersona } from "@/contexts/persona-context";
import { SiteHeader } from "@/components/site-header";
// Using toast from sonner as an alternative
import { Toaster as SonnerToaster } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

// Import pages
import Home from "@/pages/home";
import About from "@/pages/about-page";
import Projects from "@/pages/projects";
import Brands from "@/pages/brands";
import NotFound from "@/pages/not-found";

// Note: Blog and Learn routes are now handled by the App Router

// Import placeholder pages
import { Development, Consulting, Training } from "@/pages/placeholder-pages";

const queryClient = new QueryClient();

// Layout component that includes the header and handles page transitions
function Layout({ children }: { children: React.ReactNode }) {
  const { persona, setPersona } = usePersona();
  const [location] = useLocation();
  
  // Fix for 404 page appearing below footer
  useEffect(() => {
    // Remove any 404 elements that might be incorrectly rendered
    const cleanup404Elements = () => {
      const notFoundElements = document.querySelectorAll('.min-h-screen.w-full.flex.items-center.justify-center.bg-gray-50');
      if (notFoundElements.length > 1) {
        // Keep only the first one if it's part of the main content
        for (let i = 1; i < notFoundElements.length; i++) {
          notFoundElements[i].remove();
        }
      }
    };
    
    cleanup404Elements();
    // Run cleanup on location change
    return () => cleanup404Elements();
  }, [location]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader persona={persona} onPersonaChange={setPersona} />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <SonnerToaster position="top-right" richColors />
    </div>
  );
}

// Wrapper component to provide persona context to pages
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PersonaProvider>
      <Layout>{children}</Layout>
    </PersonaProvider>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Route path="/">
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Route>
          <Route path="/about">
            <PageWrapper>
              <About />
            </PageWrapper>
          </Route>
          <Route path="/projects">
            <PageWrapper>
              <Projects />
            </PageWrapper>
          </Route>
          <Route path="/brands">
            <PageWrapper>
              <Brands />
            </PageWrapper>
          </Route>
          <Route path="/development">
            <PageWrapper>
              <Development />
            </PageWrapper>
          </Route>
          <Route path="/consulting">
            <PageWrapper>
              <Consulting />
            </PageWrapper>
          </Route>
          <Route path="/training">
            <PageWrapper>
              <Training />
            </PageWrapper>
          </Route>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
