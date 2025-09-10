'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Code, MessageSquare, BarChart2, Zap, ArrowRight } from 'lucide-react';

type Currency = 'NGN' | 'USD' | 'GBP';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: Record<Currency, number>;
  popular?: boolean;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'development',
    title: 'Development',
    description: 'Custom software development tailored to your needs',
    features: [
      'Custom Web Applications',
      'Mobile App Development',
      'API Development',
      'Database Design',
      'Code Review & Optimization'
    ],
    price: {
      NGN: 500000,
      USD: 1000,
      GBP: 800
    },
    popular: true,
    icon: <Code className="h-6 w-6" />
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Expert advice for your technology strategy',
    features: [
      'Technical Strategy',
      'System Architecture',
      'Technology Stack Selection',
      'Performance Optimization',
      'Security Audits'
    ],
    price: {
      NGN: 300000,
      USD: 600,
      GBP: 450
    },
    icon: <MessageSquare className="h-6 w-6" />
  },
  {
    id: 'training',
    title: 'Training',
    description: 'Skill development for your team',
    features: [
      'Custom Training Programs',
      'Technical Workshops',
      'Code Mentorship',
      'Team Upskilling',
      'Ongoing Support'
    ],
    price: {
      NGN: 200000,
      USD: 400,
      GBP: 300
    },
    icon: <BarChart2 className="h-6 w-6" />
  }
];

const currencySymbols: Record<Currency, string> = {
  NGN: '₦',
  USD: '$',
  GBP: '£'
};

const conversionRates: Record<Currency, number> = {
  NGN: 1,
  USD: 0.002,
  GBP: 0.0016
};

export default function Services() {
  const [currency, setCurrency] = useState<Currency>('NGN');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPrice = (price: number) => {
    if (currency === 'NGN') {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price).replace('NGN', '₦');
    } else if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price);
    } else {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price);
    }
  };

  const handleContact = (service: string) => {
    setIsSubmitting(true);
    // In a real app, this would open a contact form or redirect to a contact page
    console.log(`Contacting about ${service} service`);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="py-12 md:py-20 bg-muted/20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Services & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible solutions tailored to your needs
          </p>
          
          <div className="mt-8 inline-flex items-center bg-muted p-1 rounded-lg">
            {(['NGN', 'USD', 'GBP'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currency === curr
                    ? 'bg-background text-foreground shadow'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6">
          {services.map((service) => (
            <div key={service.id} className="relative">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1 rounded-full text-xs font-medium">
                    <Zap className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              <Card className={`h-full flex flex-col transition-all hover:shadow-lg ${
                service.popular ? 'border-2 border-primary' : ''
              }`}>
                <CardHeader>
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                    <span className="text-4xl font-bold">
                      {formatPrice(service.price[currency])}
                    </span>
                    <span className="text-muted-foreground"> / project</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    size="lg"
                    onClick={() => handleContact(service.id)}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Get Started'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <Button variant="outline" size="lg">
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
