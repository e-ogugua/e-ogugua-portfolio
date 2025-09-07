import { useState } from "react";
import { SplitLanding } from "@/components/split-landing";
import { PortfolioSection } from "@/components/portfolio-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ServicesSection } from "@/components/services-section";
import { ContactForm } from "@/components/contact-form";
import { DealForm } from "@/components/deal-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<"landing" | "portfolio" | "contact">("landing");
  const [selectedPersona, setSelectedPersona] = useState<"dev" | "ceo" | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showDealForm, setShowDealForm] = useState(false);

  const scrollToSection = (section: "portfolio" | "contact") => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(section);
    }
  };

  const handlePersonaSelect = (persona: "dev" | "ceo") => {
    setSelectedPersona(persona);
    scrollToSection("portfolio");
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setShowDealForm(true);
  };

  const handleCloseDealForm = () => {
    setShowDealForm(false);
    setSelectedService(null);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-6 h-6" />;
      case "linkedin":
        return <Linkedin className="w-6 h-6" />;
      case "twitter":
        return <Twitter className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      
      <SplitLanding onPersonaSelect={handlePersonaSelect} />
      
      <PortfolioSection selectedPersona={selectedPersona} />
      
      <TestimonialsSection />
      
      <ServicesSection onServiceSelect={handleServiceSelect} />
      
      <ContactForm selectedPersona={selectedPersona} />
      
      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="font-mono text-matrix">Emmanuel</span>
                <span className="font-serif text-ceo-gold">Chukwuka Ogugua</span>
              </h3>
              <p className="text-gray-400 mb-6">
                CyberSecurity Expert - Full-Stack Developer & Entrepreneur crafting secure digital solutions for the future.
              </p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      link.name === "GitHub"
                        ? "text-matrix hover:text-matrix/80"
                        : link.name === "LinkedIn"
                        ? "text-ceo-gold hover:text-ceo-gold/80"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {getIcon(link.icon)}
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-matrix transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-matrix transition-colors">About</a></li>
                <li><a href="/learn" className="text-gray-400 hover:text-matrix transition-colors">Learn</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-matrix transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-ceo-gold transition-colors">Development</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-ceo-gold transition-colors">Consulting</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-ceo-gold transition-colors">Training</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-ceo-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* SuperExplorer */}
            <div>
              <h4 className="text-white font-semibold mb-4">Explore More</h4>
              <div className="bg-gradient-to-r from-matrix to-ceo-gold p-4 rounded-lg">
                <h5 className="text-white font-bold mb-2">SuperExplorer</h5>
                <p className="text-white/90 text-sm mb-3">
                  Discover my growing collection of 27+ apps and the journey to 1k/10k apps.
                </p>
                <a
                  href="https://emmanuelos-swart-dashboard.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-900 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  Explore Apps →
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Emmanuel Chukwuka Ogugua. Crafted with code and strategy.
            </p>
            <div className="text-sm text-gray-500">
              <span className="font-mono">Developer.exe</span> × <span className="font-serif">Strategic.mind</span>
            </div>
          </div>
        </div>
      </footer>
      
      {showDealForm && (
        <DealForm 
          selectedService={selectedService}
          onClose={handleCloseDealForm}
        />
      )}
    </div>
  );
}
