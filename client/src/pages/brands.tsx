import { PageLayout } from "@/components/page-layout";
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const brands = [
  {
    name: 'CEOTR',
    description: 'A technology and business consulting firm specializing in digital transformation, process optimization, and strategic growth solutions for enterprises across various industries.',
    logo: '/CEO.png',
    website: 'https://ceotr.com',
    sector: 'Technology & Consulting',
    metrics: '200+ clients | 15+ countries | 98% satisfaction',
    founded: 2015,
    tags: ['Strategy', 'Growth', 'Consulting']
  },
  {
    name: 'Emmdra Technologies',
    description: 'Innovative software development company focused on building scalable enterprise solutions, custom applications, and digital products that drive business growth.',
    logo: '/DEVCEO.png',
    website: 'https://emmdra.com',
    sector: 'Software Development',
    metrics: '50+ projects | 10M+ users | 4.9/5 rating',
    founded: 2018,
    tags: ['Development', 'SaaS', 'Cloud']
  },
  {
    name: 'Roka Table Water',
    description: 'Premium table water brand known for its exceptional purity and refreshing taste, serving both individual consumers and corporate clients.',
    logo: '/roka-logo.png',
    website: 'https://roka.ng',
    sector: 'Beverage',
    metrics: '1M+ bottles sold | 5,000+ retailers | 99.9% purity',
    founded: 2020,
    tags: ['FMCG', 'Retail', 'Distribution']
  },
  {
    name: 'Zereth Foods',
    description: 'Gourmet food production company specializing in healthy, organic food products with a focus on quality ingredients and sustainable sourcing.',
    logo: '/assets/zereth-foods-logo.png',
    website: 'https://zerethfoods.com',
    sector: 'Food Production',
    metrics: '50+ products | 1,000+ retailers | 40% YoY growth',
    founded: 2019,
    tags: ['Organic', 'Health', 'Retail']
  },
  {
    name: 'PoshPOULE',
    description: 'Luxury fashion brand offering premium quality clothing and accessories with a focus on sustainable and ethical manufacturing practices.',
    logo: '/assets/poshpoule-logo.png',
    website: 'https://poshpoule.com',
    sector: 'Fashion & Apparel',
    metrics: '10,000+ customers | 4.8/5 rating',
    founded: 2020,
    tags: ['Fashion', 'Luxury', 'E-commerce']
  },
  {
    name: 'Jepligom Ministry',
    description: 'Spiritual and community development organization focused on faith-based initiatives, education, and social impact programs.',
    logo: '/JEPLIGOM-Ministry.png',
    website: 'https://jepligom.org',
    sector: 'Non-Profit & Ministry',
    metrics: '50+ community programs | 10,000+ lives impacted',
    founded: 2017,
    tags: ['Ministry', 'Community', 'Education']
  }
];

export default function Brands() {
  return (
    <PageLayout
      title="Brands"
      description="Explore the brands and businesses I've had the privilege to work with and grow."
    >
      <div className="space-y-12">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Brand Portfolio
          </h2>
          <p className="mt-2 text-muted-foreground">
            A diverse portfolio of successful businesses and initiatives across multiple industries
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md flex flex-col h-full"
            >
              <div className="h-16 w-16 mb-4 bg-muted/20 rounded-lg flex items-center justify-center p-2">
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
              <h3 className="text-xl font-semibold text-foreground">
                {brand.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {brand.sector} • Est. {brand.founded}
              </p>
              <p className="mt-3 text-foreground">
                {brand.description}
              </p>
              <div className="mt-4 mb-4">
                <p className="text-sm font-medium">Key Metrics:</p>
                <p className="text-sm text-muted-foreground">{brand.metrics}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-4">
                  {brand.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={brand.website} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

