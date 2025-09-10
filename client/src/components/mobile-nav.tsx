import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { MainNav, type MainNavProps } from "./main-nav";

export function MobileNav({ persona }: { persona: "dev" | "ceo" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-foreground/70 hover:text-foreground focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "absolute left-0 right-0 top-16 z-50 border-b bg-background/95 backdrop-blur-sm p-4 shadow-lg",
              persona === "dev" ? "border-emerald-500/20" : "border-amber-500/20"
            )}
          >
            <div className="flex flex-col space-y-2">
              <MainNav 
                persona={persona} 
                className="flex-col space-y-2 space-x-0 items-start" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
