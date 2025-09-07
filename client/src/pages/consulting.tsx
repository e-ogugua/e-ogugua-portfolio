import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Building, Users, Target, Lightbulb, BarChart, CheckCircle, ArrowRight } from "lucide-react";

export function Consulting() {
  const services = [
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      icon: TrendingUp,
      price: "₦5,200,000",
      duration: "4-8 months",
      description: "Complete digital transformation strategy and implementation for traditional businesses entering the digital age.",
      features: [
        "Digital Strategy Development",
        "Technology Stack Assessment",
        "Process Automation Design",
        "Change Management Planning",
        "Staff Training & Development",
        "ROI Measurement & Analytics"
      ],
      outcomes: ["40-60% efficiency increase", "Digital-first operations", "Competitive advantage"]
    },
    {
      id: "business-strategy",
      title: "Business Strategy & Growth",
      icon: Target,
      price: "₦3,800,000",
      duration: "2-4 months",
      description: "Strategic planning and growth acceleration for startups and established businesses looking to scale.",
      features: [
        "Market Analysis & Research",
        "Competitive Intelligence",
        "Growth Strategy Development",
        "Revenue Model Optimization",
        "Go-to-Market Planning",
        "Performance KPI Setup"
      ],
      outcomes: ["2-3x revenue growth", "Market expansion", "Operational excellence"]
    },
    {
      id: "brand-strategy",
      title: "Brand Strategy & Identity",
      icon: Building,
      price: "₦2,900,000",
      duration: "1-3 months",
      description: "Complete brand development from strategy to visual identity, positioning your business for market leadership.",
      features: [
        "Brand Positioning Strategy",
        "Visual Identity Development",
        "Brand Guidelines Creation",
        "Marketing Strategy",
        "Digital Presence Optimization",
        "Brand Asset Development"
      ],
      outcomes: ["Strong brand recognition", "Premium positioning", "Customer loyalty"]
    },
    {
      id: "startup-advisory",
      title: "Startup Advisory & Mentorship",
      icon: Lightbulb,
      price: "₦1,800,000",
      duration: "3-6 months",
      description: "End-to-end startup guidance from idea validation to market launch and scaling strategies.",
      features: [
        "Business Model Validation",
        "MVP Development Strategy",
        "Funding & Investment Guidance",
        "Team Building & Hiring",
        "Product-Market Fit Analysis",
        "Scaling Strategy Development"
      ],
      outcomes: ["Validated business model", "Successful market entry", "Investment readiness"]
    },
    {
      id: "process-optimization",
      title: "Process Optimization",
      icon: BarChart,
      price: "₦2,400,000",
      duration: "1-2 months",
      description: "Streamline operations, eliminate inefficiencies, and implement data-driven decision making processes.",
      features: [
        "Process Mapping & Analysis",
        "Bottleneck Identification",
        "Automation Opportunities",
        "Workflow Optimization",
        "Performance Metrics Setup",
        "Continuous Improvement Framework"
      ],
      outcomes: ["30-50% cost reduction", "Improved productivity", "Better decision making"]
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      icon: Users,
      price: "₦2,100,000",
      duration: "2-4 months",
      description: "Executive coaching and leadership development programs for entrepreneurs and business leaders.",
      features: [
        "Leadership Assessment",
        "Executive Coaching Sessions",
        "Team Management Training",
        "Strategic Thinking Development",
        "Communication Skills Enhancement",
        "Performance Management Systems"
      ],
      outcomes: ["Enhanced leadership skills", "Better team performance", "Strategic mindset"]
    }
  ];

  const caseStudies = [
    {
      company: "TechStart Nigeria",
      industry: "FinTech",
      challenge: "Struggling to scale beyond 1000 users",
      solution: "Digital transformation and growth strategy implementation",
      results: "Grew to 50,000+ users in 6 months, secured Series A funding",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop"
    },
    {
      company: "Heritage Foods Ltd",
      industry: "Food & Agriculture",
      challenge: "Traditional operations limiting growth",
      solution: "Complete digital transformation and process optimization",
      results: "200% revenue increase, expanded to 5 new markets",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop"
    },
    {
      company: "EduTech Solutions",
      industry: "Education Technology",
      challenge: "Poor brand positioning and market penetration",
      solution: "Brand strategy overhaul and go-to-market planning",
      results: "Became market leader in online education space",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      role: "CEO, Lagos Tech Hub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "Emmanuel's strategic guidance transformed our startup from struggling to securing $2M in Series A funding. His entrepreneurial experience is invaluable.",
      rating: 5
    },
    {
      name: "Fatima Al-Rashid",
      role: "Founder, Green Energy Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "The digital transformation strategy Emmanuel developed helped us modernize our entire operation. We're now the most efficient company in our sector.",
      rating: 5
    },
    {
      name: "Chinedu Okwu",
      role: "Managing Director, Heritage Bank",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "His brand strategy work repositioned us as a premium financial institution. Our customer acquisition costs dropped by 40% while revenue increased 150%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-ceo-gold/20 text-ceo-gold">Consulting Services</Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-12 h-12 text-ceo-gold" />
              <Building className="w-12 h-12 text-amber-500" />
              <Users className="w-12 h-12 text-yellow-500" />
            </div>
            <h1 className="text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Strategic Consulting
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with strategic consulting that combines entrepreneurial insight with proven methodologies. 
              From digital transformation to growth acceleration, I help businesses achieve sustainable competitive advantage.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-ceo-gold/20 text-ceo-gold px-4 py-2">Serial Entrepreneur</Badge>
              <Badge className="bg-amber-500/20 text-amber-500 px-4 py-2">50+ Businesses Transformed</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-500 px-4 py-2">Proven Results</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Consulting Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700">
                    <div className="text-center mb-6">
                      <service.icon className="w-16 h-16 mx-auto mb-4 text-ceo-gold" />
                      <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-ceo-gold mb-2">
                          {service.price}
                        </div>
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                          <Target className="w-4 h-4 mr-2" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-ceo-gold" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Expected Outcomes:</h4>
                      <div className="space-y-2">
                        {service.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-2 h-2 bg-ceo-gold rounded-full mr-3"></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full py-3 bg-gradient-to-r from-ceo-gold to-yellow-400 text-black font-serif font-bold hover:from-ceo-gold/90 hover:to-yellow-400/90 shadow-lg hover:shadow-ceo-gold/50 transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('/#contact', '_blank')}
                    >
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900 dark:text-white">{study.company}</h4>
                        <Badge className="bg-ceo-gold/20 text-ceo-gold text-xs">{study.industry}</Badge>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-red-600 dark:text-red-400 text-sm">Challenge:</h5>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-600 dark:text-blue-400 text-sm">Solution:</h5>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{study.solution}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-600 dark:text-green-400 text-sm">Results:</h5>
                          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{study.results}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-ceo-gold/5 to-yellow-500/5 border-ceo-gold/20">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-ceo-gold text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ceo-gold to-yellow-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your business challenges and develop a strategic roadmap for sustainable growth and market leadership.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                className="bg-black text-white hover:bg-gray-800 font-serif font-bold px-8 py-3"
                onClick={() => window.open('/#contact', '_blank')}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white font-serif font-bold px-8 py-3"
                onClick={() => window.open('/about', '_blank')}
              >
                View Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
