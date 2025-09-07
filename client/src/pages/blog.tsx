import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Search, Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "development" | "business" | "insights">("all");

  const blogPosts = [
    {
      id: "1",
      title: "The Future of Full-Stack Development in Africa",
      excerpt: "Exploring how African developers are shaping the global tech landscape with innovative full-stack solutions and unique market insights.",
      content: "As the African tech ecosystem continues to mature, full-stack developers are playing a crucial role in building solutions that address local challenges while competing globally...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Full-Stack", "Africa", "Tech", "Innovation"],
      featured: true
    },
    {
      id: "2",
      title: "Building Scalable SaaS Products: Lessons from the Field",
      excerpt: "Key architectural decisions and business strategies that determine the success of SaaS products in emerging markets.",
      content: "After building multiple SaaS products for African and global markets, I've learned that scalability isn't just about technical architecture...",
      category: "business",
      author: "Emmanuel Ogugua", 
      publishDate: "2024-01-10",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["SaaS", "Scalability", "Business", "Strategy"],
      featured: false
    },
    {
      id: "3",
      title: "React Performance: Beyond the Basics",
      excerpt: "Advanced techniques for optimizing React applications, from code splitting to memory management and beyond.",
      content: "Performance optimization in React goes far beyond basic memoization. In this deep dive, we'll explore advanced patterns...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2024-01-05",
      readTime: "15 min read", 
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["React", "Performance", "JavaScript", "Frontend"],
      featured: false
    },
    {
      id: "4",
      title: "Digital Transformation in Nigerian SMEs",
      excerpt: "How small and medium enterprises in Nigeria are leveraging technology to compete in the global marketplace.",
      content: "The digital transformation journey for Nigerian SMEs presents unique opportunities and challenges...",
      category: "business",
      author: "Emmanuel Ogugua",
      publishDate: "2023-12-28",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Digital Transformation", "Nigeria", "SME", "Technology"],
      featured: false
    },
    {
      id: "5",
      title: "The Art of Technical Leadership",
      excerpt: "Bridging the gap between technical excellence and business impact through effective leadership strategies.",
      content: "Technical leadership is more than just being the best coder on the team. It's about creating an environment where...",
      category: "insights",
      author: "Emmanuel Ogugua",
      publishDate: "2023-12-20",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Leadership", "Management", "Career", "Growth"],
      featured: false
    },
    {
      id: "6",
      title: "Building APIs That Scale: Node.js Best Practices",
      excerpt: "Production-ready patterns and practices for building robust, scalable APIs with Node.js and TypeScript.",
      content: "Building APIs that can handle millions of requests requires more than just knowing Express.js. Here are the patterns...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-12-15",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Node.js", "API", "Backend", "Scalability"],
      featured: false
    },
    {
      id: "7",
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential security practices and tools for protecting distributed teams and remote infrastructure.",
      content: "The shift to remote work has fundamentally changed the cybersecurity landscape. Organizations must adapt their security strategies...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-12-10",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Cybersecurity", "Remote Work", "Security", "Infrastructure"],
      featured: false
    },
    {
      id: "8",
      title: "Microservices Architecture: When and How",
      excerpt: "A practical guide to implementing microservices architecture, including when to use it and common pitfalls to avoid.",
      content: "Microservices aren't always the answer. Here's how to determine when they make sense and how to implement them effectively...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-12-05",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Microservices", "Architecture", "Scalability", "Backend"],
      featured: false
    },
    {
      id: "9",
      title: "Fundraising for African Startups: A Practical Guide",
      excerpt: "Navigating the funding landscape for African tech startups, from seed to Series A and beyond.",
      content: "Raising capital in Africa requires understanding both local and international funding ecosystems...",
      category: "business",
      author: "Emmanuel Ogugua",
      publishDate: "2023-11-28",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Fundraising", "Startups", "Africa", "Investment"],
      featured: false
    },
    {
      id: "10",
      title: "Database Design for High-Performance Applications",
      excerpt: "Advanced database design patterns, indexing strategies, and optimization techniques for modern applications.",
      content: "Database performance can make or break your application. Here are the design principles that matter most...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-11-22",
      readTime: "16 min read",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Database", "Performance", "SQL", "Optimization"],
      featured: false
    },
    {
      id: "11",
      title: "Building a Personal Brand as a Tech Leader",
      excerpt: "Strategies for establishing thought leadership and building influence in the technology industry.",
      content: "Personal branding isn't just for influencers. Tech leaders need to build their reputation to attract opportunities...",
      category: "insights",
      author: "Emmanuel Ogugua",
      publishDate: "2023-11-18",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Personal Brand", "Leadership", "Career", "Networking"],
      featured: false
    },
    {
      id: "12",
      title: "Cloud Security: AWS, Azure, and GCP Best Practices",
      excerpt: "Comprehensive security guidelines for major cloud platforms, covering IAM, encryption, and monitoring.",
      content: "Cloud security is a shared responsibility. Here's how to secure your applications across major cloud providers...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-11-12",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Cloud Security", "AWS", "Azure", "GCP"],
      featured: false
    },
    {
      id: "13",
      title: "The Psychology of Product Development",
      excerpt: "Understanding user psychology and behavioral patterns to build products that users actually want and need.",
      content: "Great products aren't just technically sound—they understand human psychology and behavior patterns...",
      category: "business",
      author: "Emmanuel Ogugua",
      publishDate: "2023-11-08",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Product Development", "Psychology", "UX", "Strategy"],
      featured: false
    },
    {
      id: "14",
      title: "DevOps Culture: Beyond Tools and Automation",
      excerpt: "Building a DevOps culture that emphasizes collaboration, continuous improvement, and shared responsibility.",
      content: "DevOps is more than CI/CD pipelines and automation tools. It's about creating a culture of collaboration...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-11-02",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["DevOps", "Culture", "Automation", "Collaboration"],
      featured: false
    },
    {
      id: "15",
      title: "Scaling Teams: From Startup to Enterprise",
      excerpt: "Lessons learned from scaling engineering teams from 5 to 50+ developers while maintaining productivity and culture.",
      content: "Scaling teams is one of the hardest challenges in growing companies. Here's what I've learned from the trenches...",
      category: "insights",
      author: "Emmanuel Ogugua",
      publishDate: "2023-10-28",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Team Scaling", "Management", "Culture", "Growth"],
      featured: false
    },
    {
      id: "16",
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      excerpt: "Exploring practical blockchain applications in supply chain, identity management, and business processes.",
      content: "While cryptocurrency gets the headlines, blockchain technology has numerous practical applications...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-10-22",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Blockchain", "Technology", "Innovation", "Applications"],
      featured: false
    },
    {
      id: "17",
      title: "Customer Discovery: Validating Ideas Before Building",
      excerpt: "A systematic approach to customer discovery and market validation for tech entrepreneurs and product managers.",
      content: "The biggest mistake entrepreneurs make is building products nobody wants. Here's how to validate first...",
      category: "business",
      author: "Emmanuel Ogugua",
      publishDate: "2023-10-18",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Customer Discovery", "Validation", "Entrepreneurship", "Product"],
      featured: false
    },
    {
      id: "18",
      title: "AI and Machine Learning in Business: Practical Applications",
      excerpt: "How businesses can leverage AI and ML technologies to solve real problems and create competitive advantages.",
      content: "AI isn't just for tech giants. Here's how small and medium businesses can leverage AI for competitive advantage...",
      category: "business",
      author: "Emmanuel Ogugua",
      publishDate: "2023-10-12",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["AI", "Machine Learning", "Business", "Innovation"],
      featured: false
    },
    {
      id: "19",
      title: "Code Review Best Practices: Building Quality Software",
      excerpt: "Effective code review processes that improve code quality, knowledge sharing, and team collaboration.",
      content: "Code reviews are about more than catching bugs. They're opportunities for learning and team building...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-10-08",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Code Review", "Quality", "Collaboration", "Best Practices"],
      featured: false
    },
    {
      id: "20",
      title: "The Future of Work: Remote, Hybrid, and Digital Nomadism",
      excerpt: "Exploring the evolution of work culture and its implications for businesses, employees, and society.",
      content: "The pandemic accelerated changes in work culture that were already underway. Here's what the future holds...",
      category: "insights",
      author: "Emmanuel Ogugua",
      publishDate: "2023-10-02",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Future of Work", "Remote Work", "Culture", "Trends"],
      featured: false
    },
    {
      id: "21",
      title: "Incident Response: Learning from Production Failures",
      excerpt: "Building resilient systems and effective incident response processes based on real-world production incidents.",
      content: "Every production incident is a learning opportunity. Here's how to build systems that fail gracefully...",
      category: "development",
      author: "Emmanuel Ogugua",
      publishDate: "2023-09-28",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["Incident Response", "Reliability", "Monitoring", "Operations"],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development": return "bg-matrix/20 text-matrix";
      case "business": return "bg-ceo-gold/20 text-ceo-gold";
      case "insights": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
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
              Insights & Thoughts
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Sharing knowledge, experiences, and insights from the intersection of technology and business. 
              Practical wisdom for developers and strategists.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex justify-center flex-wrap gap-4">
              {[
                { key: "all", label: "All Posts" },
                { key: "development", label: "Development" },
                { key: "business", label: "Business" },
                { key: "insights", label: "Insights" }
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

      {/* Featured Post */}
      {featuredPost && activeCategory === "all" && (
        <section className="pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-xl border-0">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4 bg-gradient-to-r from-matrix to-ceo-gold text-white border-0">
                      Featured
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredPost.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} className={getCategoryColor(featuredPost.category)}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="bg-matrix text-black hover:bg-matrix/80 font-semibold group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0 h-full group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-matrix transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto font-semibold text-matrix hover:text-matrix/80 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-matrix to-ceo-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest insights on development, business strategy, and technology trends 
              delivered directly to your inbox.
            </p>
            <div className="flex justify-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/90 border-0 text-gray-900"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
