import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Users, Clock, Star, CheckCircle, ArrowRight, Play, BookOpen } from "lucide-react";

export function Training() {
  const programs = [
    {
      id: "cybersecurity-bootcamp",
      title: "Cybersecurity Mastery Bootcamp",
      icon: GraduationCap,
      price: "₦850,000",
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      description: "Comprehensive cybersecurity training covering ethical hacking, penetration testing, and security architecture.",
      features: [
        "Hands-on Penetration Testing",
        "Security Assessment Techniques",
        "Incident Response Planning",
        "Compliance & Risk Management",
        "Real-world Case Studies",
        "Industry Certification Prep"
      ],
      outcomes: ["CISSP/CEH Certification Ready", "Security Analyst Role Ready", "Penetration Tester Skills"],
      students: 150,
      rating: 4.9
    },
    {
      id: "fullstack-development",
      title: "Full-Stack Development Intensive",
      icon: BookOpen,
      price: "₦650,000",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      description: "Complete web development training from frontend to backend with modern technologies and security practices.",
      features: [
        "React & Next.js Development",
        "Node.js & Express Backend",
        "Database Design & Management",
        "API Development & Integration",
        "Security Best Practices",
        "Deployment & DevOps"
      ],
      outcomes: ["Full-Stack Developer Ready", "Portfolio of 5+ Projects", "Job Interview Preparation"],
      students: 320,
      rating: 4.8
    },
    {
      id: "entrepreneurship-accelerator",
      title: "Entrepreneurship Accelerator",
      icon: Star,
      price: "₦1,200,000",
      duration: "8 weeks",
      level: "All Levels",
      description: "Intensive program for aspiring entrepreneurs covering business strategy, funding, and scaling techniques.",
      features: [
        "Business Model Development",
        "Market Validation Techniques",
        "Funding & Investment Strategies",
        "Digital Marketing & Growth",
        "Team Building & Leadership",
        "Pitch Deck Creation"
      ],
      outcomes: ["Validated Business Idea", "Investment-Ready Pitch", "Go-to-Market Strategy"],
      students: 85,
      rating: 4.9
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation Leadership",
      icon: Users,
      price: "₦950,000",
      duration: "6 weeks",
      level: "Executive Level",
      description: "Strategic program for business leaders driving digital transformation in their organizations.",
      features: [
        "Digital Strategy Framework",
        "Technology Assessment",
        "Change Management",
        "Process Automation",
        "Data-Driven Decision Making",
        "Leadership in Digital Age"
      ],
      outcomes: ["Digital Strategy Expertise", "Transformation Roadmap", "Leadership Skills"],
      students: 60,
      rating: 4.9
    },
    {
      id: "systems-administration",
      title: "Systems & Network Administration",
      icon: Clock,
      price: "₦550,000",
      duration: "10 weeks",
      level: "Intermediate",
      description: "Comprehensive training on server management, network configuration, and infrastructure security.",
      features: [
        "Linux Server Administration",
        "Network Configuration & Security",
        "Cloud Infrastructure Management",
        "Monitoring & Logging",
        "Backup & Disaster Recovery",
        "Performance Optimization"
      ],
      outcomes: ["Systems Administrator Ready", "Cloud Certification Prep", "Infrastructure Skills"],
      students: 95,
      rating: 4.7
    },
    {
      id: "business-strategy",
      title: "Strategic Business Planning",
      icon: Star,
      price: "₦750,000",
      duration: "4 weeks",
      level: "Management Level",
      description: "Intensive course on strategic planning, competitive analysis, and business growth strategies.",
      features: [
        "Strategic Planning Framework",
        "Market Analysis Techniques",
        "Competitive Intelligence",
        "Financial Planning & Modeling",
        "Growth Strategy Development",
        "Performance Measurement"
      ],
      outcomes: ["Strategic Planning Skills", "Business Growth Plan", "Analytical Capabilities"],
      students: 110,
      rating: 4.8
    }
  ];

  const instructorStats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Students Trained", value: "1,200+" },
    { label: "Success Rate", value: "95%" },
    { label: "Industry Certifications", value: "15+" }
  ];

  const testimonials = [
    {
      name: "Kemi Adebayo",
      role: "Security Analyst at MTN",
      program: "Cybersecurity Mastery Bootcamp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "Emmanuel's cybersecurity training was transformative. I went from IT support to a security analyst role at MTN within 3 months of completing the program.",
      rating: 5
    },
    {
      name: "David Okafor",
      role: "Full-Stack Developer at Paystack",
      program: "Full-Stack Development Intensive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "The hands-on approach and real-world projects prepared me perfectly for my role at Paystack. Best investment I've made in my career.",
      rating: 5
    },
    {
      name: "Aisha Mohammed",
      role: "Founder, EduTech Solutions",
      program: "Entrepreneurship Accelerator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "The entrepreneurship program gave me the framework and confidence to launch my EdTech startup. We're now serving 10,000+ students across Nigeria.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Play,
      title: "Live Interactive Sessions",
      description: "Real-time learning with Q&A and hands-on practice"
    },
    {
      icon: Users,
      title: "Small Cohort Sizes",
      description: "Maximum 20 students per cohort for personalized attention"
    },
    {
      icon: CheckCircle,
      title: "Project-Based Learning",
      description: "Build real-world projects for your portfolio"
    },
    {
      icon: Star,
      title: "Industry Mentorship",
      description: "Connect with industry professionals and potential employers"
    },
    {
      icon: GraduationCap,
      title: "Certification & Support",
      description: "Industry-recognized certificates and job placement assistance"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Weekend and evening options for working professionals"
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
              <Badge className="bg-blue-500/20 text-blue-500">Training Programs</Badge>
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
              <GraduationCap className="w-12 h-12 text-blue-500" />
              <BookOpen className="w-12 h-12 text-green-500" />
              <Users className="w-12 h-12 text-purple-500" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Training
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Accelerate your career with intensive, hands-on training programs in cybersecurity, development, and entrepreneurship. 
              Learn from industry experience with practical skills that employers value.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-blue-500/20 text-blue-500 px-4 py-2">1,200+ Students Trained</Badge>
              <Badge className="bg-green-500/20 text-green-500 px-4 py-2">95% Success Rate</Badge>
              <Badge className="bg-purple-500/20 text-purple-500 px-4 py-2">Industry Recognized</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Stats */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Why Learn From Me?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {instructorStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Training Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                    <div className="text-center mb-6">
                      <program.icon className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {program.title}
                      </h3>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <Badge className="bg-blue-500/20 text-blue-500 text-xs">{program.level}</Badge>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 mr-1" />
                          <span className="text-sm font-semibold">{program.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {program.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-blue-500 mb-2">
                          {program.price}
                        </div>
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-2">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{program.students} students trained</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white">What You'll Learn:</h4>
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-blue-500" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Career Outcomes:</h4>
                      <div className="space-y-2">
                        {program.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('/#contact', '_blank')}
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Learning Experience</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
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
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Student Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
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
                    <Badge className="bg-blue-500/20 text-blue-500 text-xs mb-4">{testimonial.program}</Badge>
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Career?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of professionals who have transformed their careers through our intensive training programs.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3"
                onClick={() => window.open('/#contact', '_blank')}
              >
                Enroll Today
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-3"
                onClick={() => window.open('/learn', '_blank')}
              >
                View All Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
