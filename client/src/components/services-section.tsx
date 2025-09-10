import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Code, Briefcase, BookOpen, MessageSquare, Check, X, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Need guidance"
];

const services = [
  {
    id: "development",
    title: "Custom Development",
    icon: <Code className="w-8 h-8 mb-4 text-matrix" />,
    description: "End-to-end development of scalable web and mobile applications",
    features: [
      "Responsive Web Applications (React, Next.js, TypeScript)",
      "Cross-platform Mobile Apps (React Native, Flutter)",
      "Backend Development (Node.js, Python, Go)",
      "Database Design & Optimization (PostgreSQL, MongoDB)",
      "API Development (REST, GraphQL, gRPC)",
      "Cloud Deployment (AWS, GCP, Azure)"
    ],
    pricing: {
      small: { price: "$5,000+", desc: "Basic website or MVP" },
      medium: { price: "$15,000+", desc: "Custom web application" },
      large: { price: "$50,000+", desc: "Enterprise solution" },
      note: "Pricing varies based on project scope and requirements"
    },
    cta: "Start Your Project",
    href: "/contact?service=development"
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    icon: <Briefcase className="w-8 h-8 mb-4 text-ceo-gold" />,
    description: "Strategic guidance to solve complex technical challenges",
    features: [
      "System Architecture & Scalability Planning",
      "Technical Due Diligence & Code Audits",
      "Tech Stack Selection & Migration",
      "Performance Optimization & Security Audits",
      "CI/CD Pipeline Setup & Optimization",
      "Legacy System Modernization"
    ],
    pricing: {
      hourly: { price: "$150/hr", desc: "Standard consulting" },
      day: { price: "$1,200/day", desc: "On-site consulting" },
      retainer: { price: "$3,500+", desc: "Monthly retainer" },
      note: "Custom packages available for long-term engagements"
    },
    cta: "Schedule Consultation",
    href: "/contact?service=consulting"
  },
  {
    id: "training",
    title: "Team Training",
    icon: <BookOpen className="w-8 h-8 mb-4 text-blue-500" />,
    description: "Comprehensive training programs for teams of all sizes",
    features: [
      "Modern JavaScript/TypeScript Masterclass",
      "React & Next.js Deep Dive",
      "Cloud Architecture & Serverless",
      "DevOps & CI/CD Best Practices",
      "Technical Leadership & Architecture",
      "Code Quality & Testing Strategies"
    ],
    pricing: {
      workshop: { price: "$2,500", desc: "2-day workshop (up to 10 people)" },
      team: { price: "$5,000", desc: "Week-long intensive training" },
      corporate: { price: "Custom", desc: "Ongoing team development" },
      note: "Custom curriculums available for specific needs"
    },
    cta: "View Training Programs",
    href: "/training"
  },
  {
    id: "support",
    title: "Ongoing Support",
    icon: <MessageSquare className="w-8 h-8 mb-4 text-green-500" />,
    description: "Reliable maintenance and support for your applications",
    features: [
      "24/7 Application Monitoring",
      "Bug Fixes & Critical Updates",
      "Performance Optimization",
      "Security Patches & Updates",
      "Third-party Integration Support",
      "SLA-backed Support Plans"
    ],
    pricing: {
      basic: { price: "$500/mo", desc: "Up to 5 support hours" },
      standard: { price: "$1,500/mo", desc: "Up to 20 support hours" },
      premium: { price: "Custom", desc: "Dedicated support team" },
      note: "Emergency support available at higher rates"
    },
    cta: "Get Support",
    href: "/contact?service=support"
  }
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
    setFormData({ ...initialFormData, service: id });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your API or email service
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Request received! We\'ll get back to you within 24 hours.');
      setFormData(initialFormData);
      setExpandedService(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentService = services.find(s => s.id === expandedService) || services[0];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to bring your ideas to life and grow your business
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full text-left p-6 md:p-8 focus:outline-none"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-6">
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-3">
                        {expandedService === service.id ? 'Hide details' : 'View details'}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${
                          expandedService === service.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedService === service.id ? 'auto' : 0,
                    opacity: expandedService === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What's Included</h4>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                          <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">How it works:</h5>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
                            <li>Fill out the form with your details</li>
                            <li>I'll review your request within 24 hours</li>
                            <li>We'll schedule a quick call to discuss details</li>
                            <li>Get started immediately after agreement</li>
                          </ol>
                        </div>
                      </div>
                      
                      <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Your Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className="w-full"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full"
                              />
                            </div>
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Phone (optional)
                              </label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                className="w-full"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Budget Range <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              {budgetRanges.map((range) => (
                                <label key={range} className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                  <input
                                    type="radio"
                                    name="budget"
                                    value={range}
                                    checked={formData.budget === range}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-matrix focus:ring-matrix border-gray-300 dark:border-gray-600"
                                    required
                                  />
                                  <span className="text-sm text-gray-700 dark:text-gray-300">{range}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Tell me about your project <span className="text-red-500">*</span>
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Briefly describe what you need help with..."
                              rows={4}
                              className="w-full"
                            />
                          </div>
                          
                          <div className="pt-2">
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-gradient-to-r from-matrix to-ceo-gold hover:opacity-90 transition-opacity text-white font-medium py-3"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  Send Request
                                  <svg 
                                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </>
                              )}
                            </Button>
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                              I'll get back to you within 24 hours to discuss your project.
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-matrix/10 to-ceo-gold/10 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <Button 
              onClick={() => {
                const firstService = document.getElementById('services');
                if (firstService) {
                  firstService.scrollIntoView({ behavior: 'smooth' });
                  setExpandedService('development');
                }
              }}
              size="lg"
              className="bg-gradient-to-r from-matrix to-ceo-gold text-white hover:opacity-90 transition-opacity"
            >
              View Services
              <svg 
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
