'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const brands = [
  {
    name: 'CEOTR',
    description: 'Leading provider of innovative technology solutions and business consulting services.',
    logo: '/assets/ceotr-logo.png',
    website: 'https://ceotr.com',
    sector: 'Technology & Consulting'
  },
  {
    name: 'PoshPOULE',
    description: 'Premium fashion brand offering elegant and sophisticated clothing lines.',
    logo: '/assets/poshpoule-logo.png',
    website: 'https://poshpoule.com',
    sector: 'Fashion & Apparel'
  },
  {
    name: 'Emmdra',
    description: 'Cutting-edge software development and digital transformation services.',
    logo: '/assets/emmdra-logo.png',
    website: 'https://emmdra.com',
    sector: 'Software Development'
  },
  {
    name: 'Roka Table Water',
    description: 'Premium quality table water brand known for purity and refreshing taste.',
    logo: '/assets/roka-logo.png',
    website: 'https://roka.ng',
    sector: 'Beverage'
  },
  {
    name: 'Zereth Foods',
    description: 'Gourmet food production and distribution with a focus on quality and taste.',
    logo: '/assets/zereth-foods-logo.png',
    website: 'https://zerethfoods.com',
    sector: 'Food Production'
  },
  {
    name: 'Jepligom Ministry',
    description: 'Spiritual ministry dedicated to spreading faith and community development.',
    logo: '/assets/jepligom-ministry.png',
    website: 'https://jepligom.org',
    sector: 'Ministry & Community'
  }
];

export default function Brands() {
  return (
    <section className="py-12 md:py-20 bg-background" id="brands">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A portfolio of successful ventures across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6">
          {brands.map((brand, index) => (
            <Card key={index} className="h-full flex flex-col transition-all hover:shadow-lg mx-auto w-full max-w-sm sm:max-w-none">
              <CardHeader className="pb-2">
                <div className="h-16 w-16 mb-4 bg-muted rounded-lg flex items-center justify-center p-2">
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
                <CardTitle>{brand.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{brand.sector}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{brand.description}</p>
              </CardContent>
              <CardFooter>
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
      </div>
    </section>
  );
}
