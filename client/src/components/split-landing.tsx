import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const devPng = "/assets/dev_1754842240581.png";
const bizPng = "/assets/biz_1754842174552.png";
const logoPng = "/assets/eogugua_logo_1754842314245.png";

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

  return (
    <section
      ref={landingRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      id="landing"
      onMouseMove={handleMouseMove}
    >
      {/* DESKTOP VIEW */}
      {!isMobile ? (
        <>
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${activePersona === "dev" ? devPng : bizPng})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            key={activePersona}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/40" />
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
              <AnimatePresence>
                {activePersona === "dev" && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.6 }}
                      className="absolute bottom-4 left-8 pointer-events-auto"
                    >
                      <div className="bg-gradient-to-br from-slate-900/95 via-emerald-900/30 to-cyan-900/20 backdrop-blur-xl rounded-lg p-2.5 w-48 h-20 border border-emerald-400/40 shadow-md shadow-emerald-500/20 hover:shadow-emerald-400/40 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 hover:-translate-y-1 group cursor-pointer">
                        <h3 className="text-sm font-mono font-bold text-emerald-300 mb-1 tracking-wider group-hover:text-emerald-200 transition-colors duration-300"><code>&lt;CyberSec/&gt;</code></h3>
                        <p className="text-xs text-slate-200 mb-1 leading-tight group-hover:text-white transition-colors duration-300">Securing digital infrastructures</p>
                        <div className="text-xs text-green-400 font-mono mb-1 space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            <span className="text-gray-300">Cybersecurity & Penetration Testing</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            <span className="text-gray-300">Full-Stack Development</span>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 hover:from-emerald-300 hover:to-cyan-400 font-mono font-bold px-2.5 py-1 text-xs rounded-md shadow-md hover:shadow-emerald-400/50 transition-all duration-300 transform hover:scale-105 group-hover:animate-pulse" onClick={() => onPersonaSelect("dev")}>
                          <code>./explore_portfolio</code>
                        </Button>
                      </div>
                    </motion.div>
                    <motion.nav
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute top-8 left-36 pointer-events-auto"
                    >
                      <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-xl rounded-full px-3 py-1.5 border border-emerald-400/40 shadow-sm shadow-emerald-500/20 hover:shadow-emerald-400/40 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105">
                        <button onClick={() => onPersonaSelect("dev")} className="text-emerald-300 hover:text-white hover:bg-emerald-400/20 font-mono text-xs transition-all duration-300 px-1.5 py-0.5 rounded-full hover:scale-110">Projects</button>
                        <a href="#about" className="text-slate-300 hover:text-emerald-300 hover:bg-emerald-400/10 font-mono text-xs transition-all duration-300 px-1.5 py-0.5 rounded-full hover:scale-110">About</a>
                        <a href="#learn" className="text-slate-300 hover:text-emerald-300 hover:bg-emerald-400/10 font-mono text-xs transition-all duration-300 px-1.5 py-0.5 rounded-full hover:scale-110">Learn</a>
                        <a href="#blog" className="text-slate-300 hover:text-emerald-300 hover:bg-emerald-400/10 font-mono text-xs transition-all duration-300 px-1.5 py-0.5 rounded-full hover:scale-110">Blog</a>
                        <a href="https://emmanuelos-swart-dashboard.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-white hover:bg-emerald-400/20 font-mono text-xs transition-all duration-300 px-1.5 py-0.5 rounded-full hover:scale-110 bg-emerald-500/10 border border-emerald-400/30">SuperExplorer</a>
                      </div>
                    </motion.nav>
                  </>
                )}
              </AnimatePresence>

              {/* CEO UI */}
              <AnimatePresence>
                {activePersona === "ceo" && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.6 }}
                      className="absolute bottom-8 right-8 pointer-events-auto"
                    >
                      <div className="bg-gradient-to-br from-slate-900/95 via-amber-900/30 to-orange-900/20 backdrop-blur-xl rounded-lg p-3 w-56 h-24 border border-amber-400/40 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 hover:border-amber-400/60 transition-all duration-500 hover:scale-105 hover:-translate-y-1 group cursor-pointer">
                        <h3 className="text-base font-serif font-bold text-amber-300 mb-1.5 tracking-wide group-hover:text-amber-200 transition-colors duration-300">Serial Entrepreneur</h3>
                        <p className="text-xs text-slate-200 mb-1.5 leading-tight italic group-hover:text-white transition-colors duration-300">Building scalable businesses through digital transformation</p>
                        <div className="text-xs text-yellow-500 font-serif mb-1.5 space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500">◆</span>
                            <span className="text-gray-300">Digital Transformation Consulting</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500">◆</span>
                            <span className="text-gray-300">Brand Strategy & Business Growth</span>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 hover:from-amber-300 hover:to-orange-400 font-serif font-bold px-3 py-1.5 text-xs rounded-md shadow-md hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105 group-hover:animate-pulse" onClick={() => onPersonaSelect("ceo")}>
                          Explore Brands
                        </Button>
                      </div>
                    </motion.div>
                    <motion.nav
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute top-8 right-8 pointer-events-auto"
                    >
                       <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-xl rounded-full px-4 py-2 border border-amber-400/40 shadow-md shadow-amber-500/20 hover:shadow-amber-400/40 hover:border-amber-400/60 transition-all duration-300 hover:scale-105">
                        <button onClick={() => onPersonaSelect("ceo")} className="text-amber-300 hover:text-white hover:bg-amber-400/20 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full hover:scale-110">Brands</button>
                        <a href="#about" className="text-slate-300 hover:text-amber-300 hover:bg-amber-400/10 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full hover:scale-110">About</a>
                        <a href="#learn" className="text-slate-300 hover:text-amber-300 hover:bg-amber-400/10 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full hover:scale-110">Learn</a>
                        <a href="#blog" className="text-slate-300 hover:text-amber-300 hover:bg-amber-400/10 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full hover:scale-110">Blog</a>
                        <a href="https://emmanuelos-swart-dashboard.vercel.app" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white hover:bg-amber-400/20 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full hover:scale-110 bg-amber-500/10 border border-amber-400/30">SuperExplorer</a>
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
        <div className="h-full w-full flex flex-col items-center justify-center text-white p-4 bg-gray-900">
            <div className="w-24 h-24 mb-6 bg-white shadow-xl flex items-center justify-center border-4 border-white/80 backdrop-blur-sm rounded-full">
                <img src={logoPng} alt="EO Logo" className="w-20 h-20 object-contain" />
            </div>
            <h1 className="text-4xl font-bold mb-2 text-center">Emmanuel Chukwuka Ogugua</h1>
            <p className="text-lg text-gray-300 mb-8 text-center">CyberSecurity Expert - Full-Stack Developer & Entrepreneur</p>
            
            <div className="w-full max-w-sm space-y-4">
                <Button
                    className="w-full bg-matrix text-black hover:bg-matrix/80 font-mono font-semibold py-6 text-lg transition-transform transform hover:scale-105"
                    onClick={() => handleMobileClick("dev")}
                >
                    &lt;CyberSec Portfolio /&gt;
                </Button>
                <Button
                    className="w-full bg-ceo-gold text-white hover:bg-ceo-gold/80 font-serif font-semibold py-6 text-lg transition-transform transform hover:scale-105"
                    onClick={() => handleMobileClick("ceo")}
                >
                    Serial Entrepreneur
                </Button>
            </div>
        </div>
      )}
    </section>
  );
}
