import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { usePersona } from "@/contexts/persona-context";
import { 
  Briefcase, 
  Code, 
  Globe, 
  Users,
  Shield,
  Rocket,
  Lightbulb,
  ArrowLeft,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

type Metric = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const AboutPage = () => {
  const { persona } = usePersona();

  const timeline: TimelineItem[] = [
    {
      year: "2010-2013",
      title: "Early Career in Tech",
      description: "Started career in IT support and systems administration, developing a passion for cybersecurity and software development.",
      icon: <Code className="w-5 h-5" />,
      color: "text-emerald-500"
    },
    {
      year: "2014-2016",
      title: "Cybersecurity Focus",
      description: "Specialized in cybersecurity, earning certifications and working on penetration testing and secure system design.",
      icon: <Shield className="w-5 h-5" />,
      color: "text-amber-500"
    },
    {
      year: "2017-2019",
      title: "Entrepreneurial Journey",
      description: "Founded first technology consultancy firm, helping businesses with digital transformation and security.",
      icon: <Rocket className="w-5 h-5" />,
      color: "text-purple-500"
    },
    {
      year: "2020-Present",
      title: "Tech Leadership",
      description: "Leading technology initiatives and mentoring the next generation of African tech talent.",
      icon: <Lightbulb className="w-5 h-5" />,
      color: "text-blue-500"
    }
  ];

  const metrics: Metric[] = [
    {
      value: "10+",
      label: "Years Experience",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      value: "50+",
      label: "Projects Completed",
      icon: <Code className="w-6 h-6" />
    },
    {
      value: "15+",
      label: "Countries Reached",
      icon: <Globe className="w-6 h-6" />
    },
    {
      value: "1000+",
      label: "People Mentored",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const skills = [
    "Cybersecurity & Penetration Testing",
    "Full-Stack Development",
    "Systems Administration", 
    "Network Security",
    "Database Management",
    "Cloud Architecture",
    "DevOps & CI/CD",
    "Blockchain Technology"
  ];

  return (
    <PageLayout 
      title={persona === 'dev' ? "About the Developer" : "About the CEO"} 
      description={persona === 'dev' 
        ? "My journey in technology and software development" 
        : "Leadership, vision, and entrepreneurial journey"
      }
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 mb-16">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6"
          >
            <img 
              src="/CEO.png" 
              alt="Emmanuel Ogugua" 
              className="w-20 h-20 rounded-full object-cover border-4 border-white/80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/150';
              }}
            />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Emmanuel Chukwuka Ogugua
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {persona === 'dev' 
              ? "Full-Stack Developer & Cybersecurity Specialist" 
              : "Tech Entrepreneur & Business Strategist"}
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4 mr-2" /> Twitter
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-6 rounded-xl text-center border"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 text-primary">
                {metric.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-1 rounded-full ${item.color} mb-2`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Badge variant="secondary" className="text-sm font-medium px-3 py-1.5">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
