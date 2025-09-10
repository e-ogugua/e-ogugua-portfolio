import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

interface SiteHeaderProps {
  persona: "dev" | "ceo";
  onPersonaChange: (persona: "dev" | "ceo") => void;
  className?: string;
}

export function SiteHeader({ persona, onPersonaChange, className }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Persona colors
  const colors = {
    dev: {
      bg: "from-emerald-700/90 to-emerald-900/90",
      border: "border-emerald-500/20",
    },
    ceo: {
      bg: "from-amber-700/90 to-amber-900/90",
      border: "border-amber-500/20",
    },
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        isScrolled
          ? `bg-background/95 backdrop-blur-sm ${colors[persona].border} shadow-sm`
          : "bg-transparent border-transparent",
        className
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">
              {persona === 'dev' ? 'e-Ogugua' : 'Ogugua Group'}
            </span>
          </Link>

          {/* Persona Toggle - Desktop */}
          <div className="hidden md:flex items-center space-x-1 rounded-full bg-muted p-1">
            <button
              onClick={() => onPersonaChange("dev")}
              className={cn(
                "px-3 py-1 text-sm font-medium rounded-full transition-colors",
                persona === "dev"
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground hover:text-foreground/80"
              )}
            >
              Dev
            </button>
            <button
              onClick={() => onPersonaChange("ceo")}
              className={cn(
                "px-3 py-1 text-sm font-medium rounded-full transition-colors",
                persona === "ceo"
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground hover:text-foreground/80"
              )}
            >
              CEO
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <MainNav persona={persona} />
          <Button 
            asChild 
            variant="ghost" 
            size="sm"
            className="ml-2"
          >
            <a 
              href="https://emmanuelos-swart-dashboard.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>SuperExplorer</span>
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            asChild
            className="md:hidden"
          >
            <a 
              href="https://emmanuelos-swart-dashboard.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="SuperExplorer"
            >
              <Globe className="w-5 h-5" />
            </a>
          </Button>
          <MobileNav persona={persona} />
        </div>
      </div>
    </header>
  );
}
