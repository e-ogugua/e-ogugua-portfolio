'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const brands = {
  ceo: [
    {
      name: 'CEOTR',
      description: 'A technology and business consulting firm specializing in digital transformation, process optimization, and strategic growth solutions for enterprises across various industries.',
      logo: '/CEO.png',
      website: 'https://ceotr.com',
      sector: 'Technology & Consulting',
      metrics: '200+ clients | 15+ countries | 98% satisfaction',
      founded: 2015
    },
    {
      name: 'Emmdra Technologies',
      description: 'Innovative software development company focused on building scalable enterprise solutions, custom applications, and digital products that drive business growth.',
      logo: '/DEVCEO.png',
      website: 'https://emmdra.com',
      sector: 'Software Development',
      metrics: '50+ projects | 10M+ users | 4.9/5 rating',
      founded: 2018
    },
    {
      name: 'Roka Table Water',
      description: 'Premium table water brand known for its exceptional purity and refreshing taste, serving both individual consumers and corporate clients.',
      logo: '/roka-logo.png',
      website: 'https://roka.ng',
      sector: 'Beverage',
      metrics: '1M+ bottles sold | 5,000+ retailers | 99.9% purity',
      founded: 2020
    }
  ],
  developer: [
    {
      name: 'Emmdra Technologies',
      description: 'Full-stack development agency specializing in building high-performance web and mobile applications using modern technologies like React, Node.js, and cloud-native architectures.',
      logo: '/DEVCEO.png',
      website: 'https://emmdra.tech',
      sector: 'Software Development',
      techStack: 'React, Node.js, TypeScript, AWS, Kubernetes',
      metrics: '50+ projects | 10M+ users | 99.9% uptime',
      founded: 2018
    },
    {
      name: 'CodeCraft Studios',
      description: 'Boutique development shop focused on creating elegant, maintainable code and developer tools that improve software development workflows.',
      logo: '/assets/codecraft-logo.png',
      website: 'https://codecraft.dev',
      sector: 'Developer Tools',
      techStack: 'TypeScript, Rust, Go, WebAssembly',
      metrics: '15+ OSS projects | 10K+ GitHub stars',
      founded: 2019
    },
    {
      name: 'API Forge',
      description: 'Developer platform providing scalable API solutions and microservices architecture consulting for startups and enterprises.',
      logo: '/assets/api-forge-logo.png',
      website: 'https://apiforge.dev',
      sector: 'API Development',
      techStack: 'GraphQL, Node.js, PostgreSQL, Redis',
      metrics: '100M+ API calls/month | <50ms response time',
      founded: 2021
    }
  ],
  entrepreneur: [
    {
      name: 'Zereth Foods',
      description: 'Gourmet food production company specializing in healthy, organic food products with a focus on quality ingredients and sustainable sourcing.',
      logo: '/assets/zereth-foods-logo.png',
      website: 'https://zerethfoods.com',
      sector: 'Food Production',
      metrics: '50+ products | 1,000+ retailers | 40% YoY growth',
      founded: 2019
    },
    {
      name: 'PoshPOULE',
      description: 'Luxury fashion brand offering premium quality clothing and accessories with a focus on sustainable and ethical manufacturing practices.',
      logo: '/assets/poshpoule-logo.png',
      website: 'https://poshpoule.com',
      sector: 'Fashion & Apparel',
      metrics: '10,000+ customers | 4.8/5 rating',
      founded: 2020
    },
    {
      name: 'Jepligom Ministry',
      description: 'Spiritual and community development organization focused on faith-based initiatives, education, and social impact programs.',
      logo: '/JEPLIGOM-Ministry.png',
      website: 'https://jepligom.org',
      sector: 'Non-Profit & Ministry',
      metrics: '50+ community programs | 10,000+ lives impacted',
      founded: 2017
    }
  ]
};

import { usePersona } from '@/contexts/persona-context';

interface Brand {
  name: string;
  description: string;
  logo: string;
  website: string;
  sector: string;
  metrics: string;
  founded: number;
  techStack?: string;
}

export default function Brands() {
  const { persona } = usePersona();
  const currentBrands = brands[persona as keyof typeof brands] || [];

  return (
    <section className="py-12 md:py-20 bg-background" id="brands">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {persona === 'ceo' ? 'Our Portfolio' : persona === 'dev' ? 'Development Ventures' : 'Business Ventures'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {persona === 'ceo' 
              ? 'A diverse portfolio of successful businesses and initiatives' 
              : persona === 'dev' 
                ? 'Technical projects and development initiatives'
                : 'Business ventures and entrepreneurial projects'}
          </p>
        </div>

        {currentBrands.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6">
            {currentBrands.map((brand: Brand, index: number) => (
              <Card key={index} className="h-full flex flex-col transition-all hover:shadow-lg mx-auto w-full max-w-sm sm:max-w-none">
                <CardHeader className="pb-2">
                  <div className="h-24 w-24 mb-4 bg-muted/20 rounded-lg flex items-center justify-center p-2 mx-auto">
                    <div className="relative w-full h-full">
                      <Image 
                        src={brand.logo} 
                        alt={`${brand.name} logo`} 
                        fill 
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-center">{brand.name}</CardTitle>
                  <p className="text-sm text-muted-foreground text-center">{brand.sector} • Est. {brand.founded}</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <p className="text-muted-foreground">{brand.description}</p>
                  {brand.techStack && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Tech Stack:</p>
                      <p className="text-sm text-muted-foreground">{brand.techStack}</p>
                    </div>
                  )}
                  <div className="mt-2">
                    <p className="text-sm font-medium">Key Metrics:</p>
                    <p className="text-sm text-muted-foreground">{brand.metrics}</p>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <a href={brand.website} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No brands available for the current persona.</p>
          </div>
        )}
      </div>
    </section>
  );
}
