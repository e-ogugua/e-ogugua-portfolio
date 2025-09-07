import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Code, Database, Network, Cloud, Lock, Zap, CheckCircle, ArrowRight } from "lucide-react";

export function Development() {
  const services = [
    {
      id: "cybersecurity",
      title: "Cybersecurity Solutions",
      icon: Shield,
      price: "₦4,500,000",
      duration: "3-6 months",
      description: "Comprehensive security audits, penetration testing, and security infrastructure implementation.",
      features: [
        "Security Assessment & Vulnerability Analysis",
        "Penetration Testing & Ethical Hacking",
        "Security Infrastructure Design",
        "Incident Response Planning",
        "Security Training & Awareness",
        "Compliance & Risk Management"
      ],
      technologies: ["Kali Linux", "Metasploit", "Nmap", "Wireshark", "OWASP", "ISO 27001"]
    },
    {
      id: "fullstack",
      title: "Full-Stack Development",
      icon: Code,
      price: "₦3,200,000",
      duration: "2-4 months",
      description: "End-to-end web application development with modern technologies and security-first approach.",
      features: [
        "Frontend Development (React/Next.js)",
        "Backend API Development (Node.js/Python)",
        "Database Design & Optimization",
        "Authentication & Authorization",
        "Performance Optimization",
        "Security Implementation"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      id: "systems",
      title: "Systems Administration",
      icon: Network,
      price: "₦2,800,000",
      duration: "1-3 months",
      description: "Server setup, network configuration, and infrastructure management with security hardening.",
      features: [
        "Server Setup & Configuration",
        "Network Architecture Design",
        "Security Hardening",
        "Monitoring & Logging",
        "Backup & Disaster Recovery",
        "Performance Tuning"
      ],
      technologies: ["Linux", "Docker", "Kubernetes", "AWS", "Nginx", "Prometheus"]
    },
    {
      id: "database",
      title: "Database Management",
      icon: Database,
      price: "₦2,500,000",
      duration: "1-2 months",
      description: "Database design, optimization, and security implementation for high-performance applications.",
      features: [
        "Database Design & Modeling",
        "Query Optimization",
        "Security Implementation",
        "Backup & Recovery",
        "Performance Monitoring",
        "Migration Services"
      ],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "InfluxDB"]
    },
    {
      id: "cloud",
      title: "Cloud Architecture",
      icon: Cloud,
      price: "₦3,800,000",
      duration: "2-5 months",
      description: "Scalable cloud infrastructure design and implementation with enterprise-grade security.",
      features: [
        "Cloud Strategy & Planning",
        "Infrastructure as Code",
        "Auto-scaling & Load Balancing",
        "Security & Compliance",
        "Cost Optimization",
        "Migration Services"
      ],
      technologies: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "Kubernetes"]
    },
    {
      id: "security-audit",
      title: "Security Auditing",
      icon: Lock,
      price: "₦1,800,000",
      duration: "2-4 weeks",
      description: "Comprehensive security assessment and vulnerability analysis for existing systems.",
      features: [
        "Code Security Review",
        "Infrastructure Assessment",
        "Vulnerability Scanning",
        "Compliance Checking",
        "Risk Assessment",
        "Remediation Recommendations"
      ],
      technologies: ["OWASP ZAP", "Nessus", "Burp Suite", "SonarQube", "Checkmarx", "Veracode"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "CTO, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "Emmanuel's cybersecurity expertise saved our healthcare platform from potential breaches. His comprehensive security audit identified critical vulnerabilities we never knew existed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, FinanceFlow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "The full-stack development work was exceptional. Emmanuel delivered a secure, scalable platform that handles our financial data with bank-level security.",
      rating: 5
    },
    {
      name: "Amina Kone",
      role: "IT Director, EduConnect",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "His systems administration work transformed our infrastructure. We now have 99.9% uptime and rock-solid security across all our educational platforms.",
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
              <Badge className="bg-matrix/20 text-matrix">Development Services</Badge>
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
              <Shield className="w-12 h-12 text-matrix" />
              <Code className="w-12 h-12 text-blue-500" />
              <Network className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-6xl font-mono font-bold text-gray-900 dark:text-white mb-6">
              <code>&lt;Development/&gt;</code>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Secure, scalable, and high-performance development services. From cybersecurity solutions to full-stack applications, 
              I build digital infrastructures that protect and perform at enterprise scale.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-matrix/20 text-matrix px-4 py-2">Security-First Development</Badge>
              <Badge className="bg-blue-500/20 text-blue-500 px-4 py-2">Enterprise Scale</Badge>
              <Badge className="bg-green-500/20 text-green-500 px-4 py-2">10+ Years Experience</Badge>
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Development Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                    <div className="text-center mb-6">
                      <service.icon className="w-16 h-16 mx-auto mb-4 text-matrix" />
                      <h3 className="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-matrix mb-2">
                          {service.price}
                        </div>
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                          <Zap className="w-4 h-4 mr-2" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-matrix" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-matrix/10 text-matrix text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full py-3 bg-gradient-to-r from-matrix to-green-400 text-black font-mono font-bold hover:from-matrix/90 hover:to-green-400/90 shadow-lg hover:shadow-matrix/50 transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('/#contact', '_blank')}
                    >
                      <code>./request_service</code>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Client Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-white dark:bg-gray-800 shadow-lg">
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
                        <span key={i} className="text-yellow-400 text-lg">★</span>
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
      <section className="py-20 bg-gradient-to-r from-matrix to-green-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Ready to Secure Your Digital Future?</h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your development needs and create a secure, scalable solution that grows with your business.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                className="bg-black text-white hover:bg-gray-800 font-mono font-bold px-8 py-3"
                onClick={() => window.open('/#contact', '_blank')}
              >
                <code>./start_project</code>
              </Button>
              <Button 
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white font-mono font-bold px-8 py-3"
                onClick={() => window.open('/about', '_blank')}
              >
                <code>./view_credentials</code>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
