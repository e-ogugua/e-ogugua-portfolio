import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Code2, Briefcase, Globe, ArrowUpRight } from "lucide-react";

// Updated image paths with proper error handling
const devPng = "/dev_1754842240581.png";
const bizPng = "/biz_1754842174552.png";
const logoPng = "/eogugua_logo_1754842314245.png";

// Premium color scheme
const colors = {
  dev: {
    primary: "#10b981", // emerald-500
    secondary: "#06b6d4", // cyan-500
    bg: "from-slate-900/95 via-emerald-900/30 to-cyan-900/20",
    border: "border-emerald-400/40 hover:border-emerald-400/60",
    shadow: "shadow-emerald-500/20 hover:shadow-emerald-400/40",
    text: {
      primary: "text-emerald-300 group-hover:text-emerald-200",
      secondary: "text-slate-200 group-hover:text-white",
      accent: "text-green-400"
    },
    button: "from-emerald-400 to-cyan-500 hover:from-emerald-300 hover:to-cyan-400"
  },
  ceo: {
    primary: "#f59e0b", // amber-500
    secondary: "#f97316", // orange-500
    bg: "from-slate-900/95 via-amber-900/30 to-orange-900/20",
    border: "border-amber-400/40 hover:border-amber-400/60",
    shadow: "shadow-amber-500/20 hover:shadow-amber-400/40",
    text: {
      primary: "text-amber-300 group-hover:text-amber-200",
      secondary: "text-slate-200 group-hover:text-white",
      accent: "text-yellow-500"
    },
    button: "from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400"
  }
};

interface SplitLandingProps {
  onPersonaSelect: (persona: "dev" | "ceo") => void;
}

export function SplitLanding({ onPersonaSelect }: SplitLandingProps) {
  const isMobile = useIsMobile();
  const landingRef = useRef<HTMLDivElement>(null);
  const [activePersona, setActivePersona] = useState<"dev" | "ceo">("dev");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = landingRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const centerX = rect.width / 2;

    // Switch persona based on which half of the screen the mouse is in
    if (mouseX < centerX) {
      if (activePersona !== "dev") setActivePersona("dev");
    } else {
      if (activePersona !== "ceo") setActivePersona("ceo");
    }
  };

  const handleMobileClick = (persona: "dev" | "ceo") => {
    onPersonaSelect(persona);
  };

  // Preload images
  useEffect(() => {
    [devPng, bizPng, logoPng].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      ref={landingRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
      id="landing"
      onMouseMove={handleMouseMove}
    >
      {/* DESKTOP VIEW */}
      {!isMobile ? (
        <>
          {/* Background Image with Parallax Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${activePersona === "dev" ? devPng : bizPng})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
            key={activePersona}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 1.5 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>

          {/* Left-side click area */}
          <div
            className="absolute left-0 top-0 w-1/2 h-full z-10 cursor-pointer"
            onClick={() => onPersonaSelect("dev")}
          />

          {/* Right-side click area */}
          <div
            className="absolute right-0 top-0 w-1/2 h-full z-10 cursor-pointer"
            onClick={() => onPersonaSelect("ceo")}
          />

          {/* Interactive UI Container - Allows pointer events */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="relative w-full h-full">
              
              {/* Logo */}
              <div className="absolute top-8 left-8 pointer-events-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-20 h-20 bg-white shadow-xl flex items-center justify-center border-4 border-white/80 backdrop-blur-sm rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => window.location.href = '/'}
                >
                  <img
                    src={logoPng}
                    alt="EO Logo"
                    className="w-16 h-16 object-contain filter brightness-110 contrast-125"
                  />
                </motion.div>
              </div>

              {/* Developer UI */}
              <AnimatePresence mode="wait">
                {activePersona === "dev" && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 30, x: -50 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: 30, x: -50 }}
                      transition={{ 
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        x: { duration: 0.6 }
                      }}
                      className="absolute bottom-1/4 left-12 pointer-events-auto z-30"
                    >
                      <div className={cn(
                        "bg-gradient-to-br backdrop-blur-xl rounded-xl p-6 w-80 border transition-all duration-500 group cursor-pointer",
                        colors.dev.bg,
                        colors.dev.border,
                        colors.dev.shadow,
                        "hover:scale-[1.02] hover:-translate-y-1"
                      )}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                          <h3 className={cn("text-lg font-mono font-bold tracking-wider", colors.dev.text.primary)}>
                            &lt;CyberSecurity Expert/&gt;
                          </h3>
                        </div>
                        
                        <p className="text-sm text-slate-200 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                          Crafting secure, scalable digital solutions with cutting-edge technology and innovative approaches to protect your digital assets.
                        </p>
                        
                        <div className="space-y-2 mb-5">
                          {[
                            "Cybersecurity & Penetration Testing",
                            "Full-Stack Development",
                            "Cloud Architecture & DevOps",
                            "AI/ML Integration"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2 group/item">
                              <span className={cn("mt-1.5 text-xs", colors.dev.text.accent)}>→</span>
                              <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          className={cn(
                            "w-full bg-gradient-to-r text-slate-900 font-mono font-bold py-2 px-4 rounded-lg shadow-lg",
                            "hover:shadow-emerald-400/50 transition-all duration-300 transform hover:scale-[1.02]",
                            colors.dev.button,
                            "group-hover:animate-pulse"
                          )}
                          onClick={() => onPersonaSelect("dev")}
                        >
                          <code className="text-sm tracking-wider">./explore_portfolio</code>
                        </Button>
                      </div>
                    </motion.div>
                    {/* Navigation */}
                    <motion.nav
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="absolute top-8 left-32 pointer-events-auto z-40"
                    >
                      <div className={cn(
                        "flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl rounded-full px-4 py-2 border transition-all duration-300 hover:scale-105",
                        colors.dev.border,
                        colors.dev.shadow,
                        "hover:shadow-lg"
                      )}>
                        {[
                          { label: "Projects", action: () => onPersonaSelect("dev") },
                          { label: "About", href: "#about" },
                          { label: "Learn", href: "#learn" },
                          { label: "Blog", href: "#blog" }
                        ].map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            onClick={(e) => {
                              if (item.action) {
                                e.preventDefault();
                                item.action();
                              }
                            }}
                            className={cn(
                              "text-sm font-mono transition-all duration-300 px-3 py-1 rounded-full hover:scale-110",
                              i === 0 
                                ? "text-emerald-300 hover:bg-emerald-400/20 hover:text-white"
                                : "text-slate-300 hover:text-emerald-300 hover:bg-emerald-400/10"
                            )}
                          >
                            {item.label}
                          </a>
                        ))}
                        
                        <a 
                          href="https://emmanuelos-swart-dashboard.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={cn(
                            "ml-2 text-sm font-mono transition-all duration-300 px-3 py-1 rounded-full",
                            "bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 border border-emerald-400/30",
                            "text-emerald-200 hover:text-white hover:bg-emerald-400/20 hover:scale-110",
                            "flex items-center gap-1.5"
                          )}
                        >
                          <span>SuperExplorer</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                            <path d="M7 7h10v10"/>
                            <path d="M7 17 17 7"/>
                          </svg>
                        </a>
                      </div>
                    </motion.nav>
                  </>
                )}
              </AnimatePresence>

              {/* CEO UI */}
              <AnimatePresence mode="wait">
                {activePersona === "ceo" && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 30, x: 50 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: 30, x: 50 }}
                      transition={{ 
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        x: { duration: 0.6 }
                      }}
                      className="absolute bottom-1/4 right-12 pointer-events-auto z-30"
                    >
                      <div className={cn(
                        "bg-gradient-to-br backdrop-blur-xl rounded-xl p-6 w-80 border transition-all duration-500 group cursor-pointer",
                        colors.ceo.bg,
                        colors.ceo.border,
                        colors.ceo.shadow,
                        "hover:scale-[1.02] hover:-translate-y-1"
                      )}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                          <h3 className={cn("text-lg font-serif font-bold tracking-wide", colors.ceo.text.primary)}>
                            Serial Entrepreneur
                          </h3>
                        </div>
                        
                        <p className="text-sm text-slate-200 mb-4 leading-relaxed italic group-hover:text-white transition-colors duration-300">
                          Transforming innovative ideas into successful businesses through strategic planning, digital transformation, and sustainable growth.
                        </p>
                        
                        <div className="space-y-2 mb-5">
                          {[
                            "Digital Transformation Consulting",
                            "Brand Strategy & Business Growth",
                            "Startup Development & Scaling",
                            "Investment & Partnership"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2 group/item">
                              <span className={cn("mt-1.5 text-xs", colors.ceo.text.accent)}>◆</span>
                              <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          className={cn(
                            "w-full bg-gradient-to-r text-slate-900 font-serif font-semibold py-2 px-4 rounded-lg shadow-lg",
                            "hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-[1.02]",
                            colors.ceo.button,
                            "group-hover:animate-pulse"
                          )}
                          onClick={() => onPersonaSelect("ceo")}
                        >
                          Explore Brands & Ventures
                        </Button>
                      </div>
                    </motion.div>
                    {/* Navigation */}
                    <motion.nav
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="absolute top-8 right-12 pointer-events-auto z-40"
                    >
                      <div className={cn(
                        "flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl rounded-full px-4 py-2 border transition-all duration-300 hover:scale-105",
                        colors.ceo.border,
                        colors.ceo.shadow,
                        "hover:shadow-lg"
                      )}>
                        {[
                          { label: "Brands", action: () => onPersonaSelect("ceo") },
                          { label: "About", href: "#about" },
                          { label: "Learn", href: "#learn" },
                          { label: "Blog", href: "#blog" }
                        ].map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            onClick={(e) => {
                              if (item.action) {
                                e.preventDefault();
                                item.action();
                              }
                            }}
                            className={cn(
                              "text-sm font-serif transition-all duration-300 px-3 py-1 rounded-full hover:scale-110",
                              i === 0 
                                ? "text-amber-300 hover:bg-amber-400/20 hover:text-white"
                                : "text-slate-300 hover:text-amber-300 hover:bg-amber-400/10"
                            )}
                          >
                            {item.label}
                          </a>
                        ))}
                        
                        <a 
                          href="https://emmanuelos-swart-dashboard.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={cn(
                            "ml-2 text-sm font-serif transition-all duration-300 px-3 py-1 rounded-full",
                            "bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/30",
                            "text-amber-200 hover:text-white hover:bg-amber-400/20 hover:scale-110",
                            "flex items-center gap-1.5"
                          )}
                        >
                          <span>SuperExplorer</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                            <path d="M7 7h10v10"/>
                            <path d="M7 17 17 7"/>
                          </svg>
                        </a>
                      </div>
                    </motion.nav>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </>
      ) : (
        /* MOBILE VIEW */
        <div className="min-h-screen w-full flex flex-col items-center justify-start pt-20 pb-12 px-6 bg-black relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-50"
            style={{
              backgroundImage: `url(${activePersona === "dev" ? devPng : bizPng})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(4px)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 bg-white shadow-xl flex items-center justify-center border-4 border-white/80 backdrop-blur-sm rounded-full mb-8"
            >
              <img
                src={logoPng}
                alt="EO Logo"
                className="w-20 h-20 object-contain"
              />
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-emerald-400">Emmanuel</span>{' '}
              <span className="text-amber-400">Ogugua</span>
            </motion.h1>

            {/* Persona Buttons */}
            <motion.div 
              className="w-full space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => handleMobileClick("dev")}
                className={cn(
                  "w-full bg-gradient-to-r text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105",
                  "flex items-center justify-center gap-3 shadow-lg",
                  colors.dev.button,
                  "border border-emerald-400/40 hover:border-emerald-400/60"
                )}
              >
                <Code2 className="w-5 h-5" />
                <span>Developer Mode</span>
              </button>

              <button
                onClick={() => handleMobileClick("ceo")}
                className={cn(
                  "w-full bg-gradient-to-r text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105",
                  "flex items-center justify-center gap-3 shadow-lg",
                  colors.ceo.button,
                  "border border-amber-400/40 hover:border-amber-400/60"
                )}
              >
                <Briefcase className="w-5 h-5" />
                <span>Business Mode</span>
              </button>
            </motion.div>

            {/* SuperExplorer Button */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://emmanuelos-swart-dashboard.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500",
                  "text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105",
                  "flex items-center justify-center gap-2 shadow-lg border border-purple-400/40 hover:border-purple-400/60"
                )}
              >
                <Globe className="w-5 h-5" />
                <span>SuperExplorer</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Navigation Links */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Learn", href: "#learn" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
