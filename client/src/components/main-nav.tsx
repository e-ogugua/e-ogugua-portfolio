import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, Code2, Home, BookOpen, BookText, User } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  persona: "all" | "dev" | "ceo";
};

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="w-4 h-4" />,
    persona: "all",
  },
  {
    name: "About",
    href: "/about",
    icon: <User className="w-4 h-4" />,
    persona: "all",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <Briefcase className="w-4 h-4" />,
    persona: "dev",
  },
  {
    name: "Brands",
    href: "/brands",
    icon: <Briefcase className="w-4 h-4" />,
    persona: "ceo",
  },
  {
    name: "Learn",
    href: "/learn",
    icon: <BookOpen className="w-4 h-4" />,
    persona: "all",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <BookText className="w-4 h-4" />,
    persona: "all",
  },
];

export interface MainNavProps {
  persona: "dev" | "ceo";
  className?: string;
}

export function MainNav({ persona, className }: MainNavProps) {
  const [location] = useLocation();

  // Filter nav items based on persona
  const filteredNavItems = navItems.filter(
    (item) => item.persona === "all" || item.persona === persona
  );

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {filteredNavItems.map((item) => {
        const isActive = location === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80",
              isActive ? "text-foreground" : "text-foreground/60"
            )}
          >
            <span className="flex items-center gap-2">
              {item.icon}
              {item.name}
            </span>
            {isActive && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeNavIndicator"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
