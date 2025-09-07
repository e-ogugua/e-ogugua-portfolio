import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, BookOpen, Video, FileText, Search, Clock, Users, Star } from "lucide-react";

export default function Learn() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "development" | "business" | "tutorials">("all");

  const learningResources = [
    {
      id: "1",
      title: "Full-Stack Development Masterclass",
      description: "Complete guide to building modern web applications with React, Node.js, and PostgreSQL",
      type: "course",
      category: "development",
      duration: "12 hours",
      level: "Intermediate",
      students: 1250,
      rating: 4.9,
      price: "₦25,000",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["React", "Node.js", "PostgreSQL", "Full-Stack"]
    },
    {
      id: "2", 
      title: "Digital Strategy for African Businesses",
      description: "Strategic framework for digital transformation in the African market context",
      type: "course",
      category: "business",
      duration: "8 hours",
      level: "Beginner",
      students: 890,
      rating: 4.8,
      price: "₦20,000",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Strategy", "Digital Transformation", "Africa", "Business"]
    },
    {
      id: "3",
      title: "Building Scalable APIs with Node.js",
      description: "Learn to design and build production-ready APIs that can handle millions of requests",
      type: "tutorial",
      category: "development", 
      duration: "3 hours",
      level: "Advanced",
      students: 650,
      rating: 4.7,
      price: "₦15,000",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Node.js", "API", "Scalability", "Backend"]
    },
    {
      id: "4",
      title: "Brand Development Workshop",
      description: "Create compelling brand identities that resonate with your target audience",
      type: "workshop",
      category: "business",
      duration: "6 hours",
      level: "Beginner",
      students: 420,
      rating: 4.6,
      price: "₦18,000",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Branding", "Design", "Marketing", "Identity"]
    },
    {
      id: "5",
      title: "React Performance Optimization",
      description: "Advanced techniques to make your React applications lightning fast",
      type: "tutorial",
      category: "development",
      duration: "4 hours", 
      level: "Advanced",
      students: 780,
      rating: 4.8,
      price: "₦12,000",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["React", "Performance", "Optimization", "Frontend"]
    },
    {
      id: "6",
      title: "Startup Growth Strategies",
      description: "Proven frameworks for scaling your startup from idea to market leader",
      type: "course",
      category: "business",
      duration: "10 hours",
      level: "Intermediate",
      students: 960,
      rating: 4.9,
      price: "₦30,000",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Startup", "Growth", "Strategy", "Scaling"]
    },
    {
      id: "7",
      title: "Cybersecurity Fundamentals",
      description: "Essential security practices for developers and business owners to protect digital assets",
      type: "course",
      category: "development",
      duration: "15 hours",
      level: "Beginner",
      students: 1150,
      rating: 4.8,
      price: "₦35,000",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Cybersecurity", "Security", "Protection", "Risk Management"]
    },
    {
      id: "8",
      title: "Database Design & Optimization",
      description: "Master database architecture, indexing, and performance optimization techniques",
      type: "tutorial",
      category: "development",
      duration: "6 hours",
      level: "Advanced",
      students: 720,
      rating: 4.7,
      price: "₦22,000",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Database", "SQL", "Performance", "Architecture"]
    },
    {
      id: "9",
      title: "Digital Marketing for Tech Startups",
      description: "Growth hacking and digital marketing strategies specifically for technology companies",
      type: "workshop",
      category: "business",
      duration: "8 hours",
      level: "Intermediate",
      students: 540,
      rating: 4.6,
      price: "₦28,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Digital Marketing", "Growth Hacking", "Startups", "SEO"]
    },
    {
      id: "10",
      title: "Cloud Architecture with AWS",
      description: "Design and deploy scalable cloud solutions using Amazon Web Services",
      type: "course",
      category: "development",
      duration: "20 hours",
      level: "Advanced",
      students: 890,
      rating: 4.9,
      price: "₦45,000",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["AWS", "Cloud", "Architecture", "DevOps"]
    },
    {
      id: "11",
      title: "Leadership in Technology Teams",
      description: "Develop leadership skills to manage and inspire high-performing tech teams",
      type: "workshop",
      category: "business",
      duration: "12 hours",
      level: "Intermediate",
      students: 380,
      rating: 4.8,
      price: "₦32,000",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Leadership", "Management", "Teams", "Communication"]
    },
    {
      id: "12",
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile applications using React Native and modern tools",
      type: "course",
      category: "development",
      duration: "18 hours",
      level: "Intermediate",
      students: 1020,
      rating: 4.7,
      price: "₦38,000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["React Native", "Mobile", "Cross-platform", "JavaScript"]
    },
    {
      id: "13",
      title: "Financial Planning for Entrepreneurs",
      description: "Master financial planning, budgeting, and investment strategies for business owners",
      type: "course",
      category: "business",
      duration: "14 hours",
      level: "Beginner",
      students: 670,
      rating: 4.6,
      price: "₦26,000",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Finance", "Planning", "Investment", "Budgeting"]
    },
    {
      id: "14",
      title: "DevOps and CI/CD Pipelines",
      description: "Implement continuous integration and deployment workflows for modern applications",
      type: "tutorial",
      category: "development",
      duration: "10 hours",
      level: "Advanced",
      students: 820,
      rating: 4.8,
      price: "₦33,000",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["DevOps", "CI/CD", "Automation", "Docker"]
    },
    {
      id: "15",
      title: "Product Management Essentials",
      description: "Learn product strategy, roadmapping, and user research techniques",
      type: "workshop",
      category: "business",
      duration: "16 hours",
      level: "Intermediate",
      students: 450,
      rating: 4.7,
      price: "₦29,000",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Product Management", "Strategy", "User Research", "Roadmapping"]
    },
    {
      id: "16",
      title: "Machine Learning for Developers",
      description: "Practical introduction to ML algorithms and implementation with Python",
      type: "course",
      category: "development",
      duration: "25 hours",
      level: "Advanced",
      students: 950,
      rating: 4.9,
      price: "₦50,000",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Machine Learning", "Python", "AI", "Data Science"]
    },
    {
      id: "17",
      title: "Blockchain Development Fundamentals",
      description: "Build decentralized applications and smart contracts on Ethereum",
      type: "tutorial",
      category: "development",
      duration: "12 hours",
      level: "Intermediate",
      students: 580,
      rating: 4.5,
      price: "₦40,000",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Blockchain", "Ethereum", "Smart Contracts", "Web3"]
    },
    {
      id: "18",
      title: "Sales and Customer Acquisition",
      description: "Master sales techniques and customer acquisition strategies for B2B and B2C",
      type: "workshop",
      category: "business",
      duration: "9 hours",
      level: "Beginner",
      students: 720,
      rating: 4.6,
      price: "₦24,000",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Sales", "Customer Acquisition", "B2B", "B2C"]
    },
    {
      id: "19",
      title: "System Design Interview Prep",
      description: "Prepare for system design interviews at top tech companies",
      type: "course",
      category: "development",
      duration: "16 hours",
      level: "Advanced",
      students: 1100,
      rating: 4.8,
      price: "₦42,000",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["System Design", "Interviews", "Architecture", "Scalability"]
    },
    {
      id: "20",
      title: "Content Marketing Strategy",
      description: "Create compelling content that drives engagement and business growth",
      type: "tutorial",
      category: "business",
      duration: "7 hours",
      level: "Beginner",
      students: 640,
      rating: 4.5,
      price: "₦19,000",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Content Marketing", "Strategy", "Engagement", "Growth"]
    },
    {
      id: "21",
      title: "Microservices Architecture Patterns",
      description: "Design and implement microservices using industry best practices",
      type: "course",
      category: "development",
      duration: "22 hours",
      level: "Advanced",
      students: 760,
      rating: 4.9,
      price: "₦48,000",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["Microservices", "Architecture", "Patterns", "Distributed Systems"]
    }
  ];

  const filteredResources = learningResources.filter(resource => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory || resource.type === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course": return <BookOpen className="w-5 h-5" />;
      case "tutorial": return <Video className="w-5 h-5" />;
      case "workshop": return <Users className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggle />
      
      {/* Navigation */}
      <nav className="fixed top-8 left-8 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.history.back()}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Learn & Grow
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Master the skills that matter. From cutting-edge development techniques to strategic business insights, 
              unlock your potential with expert-led courses and tutorials.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search courses, tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex justify-center flex-wrap gap-4">
              {[
                { key: "all", label: "All Resources" },
                { key: "development", label: "Development" },
                { key: "business", label: "Business" },
                { key: "tutorials", label: "Tutorials" }
              ].map((category) => (
                <Button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key as any)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category.key
                      ? "bg-matrix text-black"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0 h-full">
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getLevelColor(resource.level)} border-0`}>
                        {resource.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/70 text-white border-0">
                        {getTypeIcon(resource.type)}
                        <span className="ml-1 capitalize">{resource.type}</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {resource.students}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {resource.rating}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-matrix">
                        {resource.price}
                      </div>
                      <Button className="bg-matrix text-black hover:bg-matrix/80 font-semibold">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No resources found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-matrix to-ceo-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Training?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Looking for specialized training for your team or organization? I offer custom workshops 
              and training programs tailored to your specific needs.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => window.location.href = '/#contact'}
              >
                Request Custom Training
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
                onClick={() => window.location.href = '/'}
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
