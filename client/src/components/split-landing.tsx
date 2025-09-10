import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Image paths
const devPng = "/dev_1754842240581.png";
const bizPng = "/biz_1754842174552.png";

export function SplitLanding() {
  const landingRef = useRef<HTMLDivElement>(null);
  const [activePersona, setActivePersona] = useState<"dev" | "ceo">("dev");

  const handleMouseMove = (e: React.MouseEvent) => {
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

  // Preload images
  useEffect(() => {
    [devPng, bizPng].forEach(src => {
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
    </section>
  );
}
