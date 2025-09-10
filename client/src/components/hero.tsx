'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const devCodeSnippets = [
  'const project = new Project({\n    name: "Palace Security",\n    tech: ["Node.js", "React", "TypeScript"],\n    status: "In Progress"\n  });',
  'function optimizePerformance() {\n    // Optimizing load times\n    return "Performance boosted by 3x";\n  }',
  'const solution = (problem) => {\n    return problem.solve();\n  };'
];

const ceoContent = [
  {
    title: "Strategic Vision",
    description: "Driving innovation through technology and business acumen"
  },
  {
    title: "Leadership",
    description: "Building high-performing teams and fostering growth"
  },
  {
    title: "Results",
    description: "Delivering exceptional value to stakeholders"
  }
];

export default function Hero() {
  const [activePersona, setActivePersona] = useState<'dev' | 'ceo'>('dev');
  const [codeIndex, setCodeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');

  // Typewriter effect for DEV card
  useEffect(() => {
    if (!isTyping) return;

    const currentSnippet = devCodeSnippets[codeIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentSnippet.length) {
        setDisplayText(currentSnippet.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setCharIndex(0);
          setCodeIndex((codeIndex + 1) % devCodeSnippets.length);
        }, 2000);
      }
    }, 30);

    return () => clearTimeout(timeout);
  }, [charIndex, codeIndex, isTyping]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Emmanuel Ogugua</span>
            <span className="text-primary">
              {activePersona === 'dev' ? 'Full-Stack Developer' : 'CEO & Entrepreneur'}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {activePersona === 'dev' 
              ? 'Crafting elegant solutions to complex problems' 
              : 'Leading innovation and driving business success'}
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {/* DEV Card */}
          <div 
            className={cn(
              'relative h-[200px] md:h-[221px] w-full max-w-full md:max-w-[480px] rounded-lg overflow-hidden transition-all duration-300',
              activePersona === 'dev' ? 'ring-2 ring-primary shadow-lg' : 'opacity-70 hover:opacity-90',
              'mx-auto' // Center on mobile
            )}
            onMouseEnter={() => setActivePersona('dev')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6 font-mono text-green-400 text-sm leading-relaxed overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-green-300">terminal</span>
              </div>
              <pre className="whitespace-pre-wrap">
                <code>
                  {displayText}
                  <span className="animate-pulse">|</span>
                </code>
              </pre>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-medium">Developer Mode</h3>
              <p className="text-green-300 text-sm">Building digital experiences</p>
            </div>
          </div>

          {/* CEO Card */}
          <div 
            className={cn(
              'relative h-[221px] w-full max-w-[480px] rounded-lg overflow-hidden transition-all duration-300',
              activePersona === 'ceo' ? 'ring-2 ring-primary shadow-lg' : 'opacity-70 hover:opacity-90'
            )}
            onMouseEnter={() => setActivePersona('ceo')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 p-6 text-white">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01M12 14a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Business Dashboard</h3>
                  <p className="text-sm text-blue-200">Executive Overview</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {ceoContent.map((item, index) => (
                  <div key={index} className="bg-white/10 p-3 rounded-lg">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-blue-100 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-medium">Executive Mode</h3>
              <p className="text-blue-200 text-sm">Leading with vision</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="px-8 py-6 text-lg">
            View My {activePersona === 'dev' ? 'Projects' : 'Brands'}
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            Contact Me
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-8 w-8 text-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
