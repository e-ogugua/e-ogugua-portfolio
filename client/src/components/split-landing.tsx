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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = landingRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;

    setMousePosition({ x: mouseX, y: mouseY });

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
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        y: mousePosition.y > 400 ? -100 : 0
                      }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-1/2 left-8 transform -translate-y-1/2 pointer-events-auto"
                      style={{
                        left: Math.max(50, Math.min(mousePosition.x - 200, window.innerWidth - 400))
                      }}
                    >
                      <div className="bg-gradient-to-br from-black/90 via-gray-900/90 to-green-900/20 backdrop-blur-md rounded-xl p-6 max-w-xs border border-green-400/60 shadow-2xl shadow-green-400/30">
                        <h2 className="text-2xl font-mono font-bold text-green-400 mb-2 tracking-wider"><code>&lt;CyberSec/&gt;</code></h2>
                        <p className="text-xs text-gray-200 mb-4 leading-relaxed">Securing digital infrastructures with advanced cybersecurity solutions</p>
                        <div className="text-xs text-green-400 font-mono mb-4 space-y-1 bg-black/40 p-3 rounded-lg border border-green-400/20">
                          <div className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            <span className="text-gray-300">Cybersecurity & Penetration Testing</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            <span className="text-gray-300">Full-Stack Development</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            <span className="text-gray-300">Systems & Network Administration</span>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-green-400 to-green-500 text-black hover:from-green-400/90 hover:to-green-500/90 font-mono font-bold px-6 py-2 text-xs rounded-lg shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105" onClick={() => onPersonaSelect("dev")}>
                          <code>./explore_portfolio</code>
                        </Button>
                      </div>
                    </motion.div>
                    <motion.nav
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute pointer-events-auto"
                      style={{
                        top: Math.max(20, mousePosition.y - 50),
                        left: Math.max(20, Math.min(mousePosition.x - 150, window.innerWidth - 320))
                      }}
                    >
                      <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-green-400/50 shadow-lg shadow-green-400/20">
                        <button onClick={() => onPersonaSelect("dev")} className="text-green-400 hover:text-white hover:bg-green-400/20 font-mono text-xs transition-all duration-300 px-2 py-1 rounded-full">Projects</button>
                        <a href="/about" className="text-gray-300 hover:text-green-400 hover:bg-green-400/10 font-mono text-xs transition-all duration-300 px-2 py-1 rounded-full">About</a>
                        <a href="/learn" className="text-gray-300 hover:text-green-400 hover:bg-green-400/10 font-mono text-xs transition-all duration-300 px-2 py-1 rounded-full">Learn</a>
                        <a href="/blog" className="text-gray-300 hover:text-green-400 hover:bg-green-400/10 font-mono text-xs transition-all duration-300 px-2 py-1 rounded-full">Blog</a>
                        <a 
                          href="https://emmanuelos-swart-dashboard.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-white bg-green-400/20 hover:bg-green-400/40 font-mono text-xs font-semibold transition-all duration-300 px-3 py-1 rounded-full border border-green-400/30"
                        >
                          SuperExplorer
                        </a>
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
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        y: mousePosition.y > 400 ? -100 : 0
                      }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-1/2 right-8 transform -translate-y-1/2 pointer-events-auto"
                      style={{
                        right: Math.max(50, Math.min(window.innerWidth - mousePosition.x - 200, window.innerWidth - 400))
                      }}
                    >
                      <div className="bg-gradient-to-br from-black/90 via-amber-900/20 to-yellow-900/30 backdrop-blur-md rounded-xl p-6 max-w-xs border border-yellow-500/60 shadow-2xl shadow-yellow-500/30">
                        <h2 className="text-2xl font-serif font-bold text-yellow-500 mb-2 tracking-wide">Entrepreneur</h2>
                        <p className="text-xs text-gray-200 mb-4 leading-relaxed italic">Building scalable businesses through digital transformation and strategic innovation</p>
                        <div className="text-xs text-yellow-500 font-serif mb-4 space-y-1 bg-black/40 p-3 rounded-lg border border-yellow-500/20">
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500">◆</span>
                            <span className="text-gray-300">Serial Entrepreneurship</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500">◆</span>
                            <span className="text-gray-300">Digital Transformation Consulting</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500">◆</span>
                            <span className="text-gray-300">Brand Strategy & Business Growth</span>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-500/90 hover:to-yellow-400/90 font-serif font-bold px-6 py-2 text-xs rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105" onClick={() => onPersonaSelect("ceo")}>
                          Explore Brands
                        </Button>
                      </div>
                    </motion.div>
                    <motion.nav
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute pointer-events-auto"
                      style={{
                        top: Math.max(20, mousePosition.y - 50),
                        right: Math.max(20, Math.min(window.innerWidth - mousePosition.x - 150, window.innerWidth - 320))
                      }}
                    >
                       <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-yellow-500/50 shadow-lg shadow-yellow-500/20">
                        <button onClick={() => onPersonaSelect("ceo")} className="text-yellow-500 hover:text-white hover:bg-yellow-500/20 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full">Brands</button>
                        <a href="/about" className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full">About</a>
                        <a href="/learn" className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full">Learn</a>
                        <a href="/blog" className="text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 font-serif text-xs transition-all duration-300 px-2 py-1 rounded-full">Blog</a>
                        <a 
                          href="https://emmanuelos-swart-dashboard.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-yellow-500 hover:text-white bg-yellow-500/20 hover:bg-yellow-500/40 font-serif text-xs font-semibold transition-all duration-300 px-3 py-1 rounded-full border border-yellow-500/30"
                        >
                          SuperExplorer
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
