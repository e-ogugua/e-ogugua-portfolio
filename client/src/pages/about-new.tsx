import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, Linkedin, Twitter, Shield, Code, Database, Network, TrendingUp, Building, Award, Users, Zap } from "lucide-react";

export function About() {
  const techSkills = [
    "Cybersecurity & Penetration Testing",
    "Full-Stack Development",
    "Systems Administration", 
    "Network Security",
    "Database Management",
    "Cloud Architecture"
  ];

  const businessSkills = [
    "Serial Entrepreneurship",
    "Digital Transformation",
    "Brand Strategy",
    "Business Consulting",
    "Growth Hacking",
    "Strategic Planning"
  ];

  const achievements = [
    { icon: Shield, title: "Security Expert", desc: "10+ years in cybersecurity" },
    { icon: Code, title: "Full-Stack Developer", desc: "27+ applications built" },
    { icon: Building, title: "Serial Entrepreneur", desc: "Multiple successful ventures" },
    { icon: Users, title: "Consultant", desc: "50+ businesses transformed" }
  ];

  const randomFacts = [
    "I'm slightly addicted to cybersecurity forums",
    "Building apps is my zen time", 
    "I want to secure every digital infrastructure",
    "I'm a bit of a code perfectionist",
    "I love to mentor young entrepreneurs",
    "I'm into digital transformation",
    "I enjoy creating secure solutions",
    "Security-first is my motto",
    "I drink a lot of coffee while coding"
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
              <a
                href="https://github.com/e-ogugua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-matrix transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuelogugua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-ceo-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/emmachuka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/assets/CEO.png"
                alt="Emmanuel Chukwuka Ogugua"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
              about.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm a cybersecurity expert and serial entrepreneur based in Nigeria. 
              Since 2015, I've enjoyed turning complex security challenges into elegant solutions while building scalable businesses. 
              When I'm not securing infrastructures, you'll find me mentoring entrepreneurs or working on my next venture.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-matrix/20 text-matrix px-4 py-2">CyberSecurity Expert</Badge>
              <Badge className="bg-ceo-gold/20 text-ceo-gold px-4 py-2">Serial Entrepreneur</Badge>
              <Badge className="bg-blue-500/20 text-blue-500 px-4 py-2">Full-Stack Developer</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dual Persona Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Part CyberSec Expert */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-matrix/5 to-green-500/5 border-matrix/20">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-matrix" />
                  <h2 className="text-3xl font-mono font-bold text-matrix">Part CyberSec Expert</h2>
                </div>
                <div className="space-y-3">
                  {techSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-matrix rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Part Entrepreneur */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-ceo-gold/5 to-yellow-500/5 border-ceo-gold/20">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-ceo-gold" />
                  <h2 className="text-3xl font-serif font-bold text-ceo-gold">Part Entrepreneur</h2>
                </div>
                <div className="space-y-3">
                  {businessSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-ceo-gold rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Random Facts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Random facts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {randomFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-matrix to-ceo-gold rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{fact}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Progress */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">My skills</h2>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge className="bg-matrix/20 text-matrix">Expert</Badge>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Cybersecurity</span>
                </div>
                <span className="text-2xl font-bold text-matrix">95%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-matrix to-green-400 h-3 rounded-full" style={{width: '95%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge className="bg-blue-500/20 text-blue-500">Expert</Badge>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Full-Stack Development</span>
                </div>
                <span className="text-2xl font-bold text-blue-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full" style={{width: '90%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge className="bg-ceo-gold/20 text-ceo-gold">Expert</Badge>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Entrepreneurship</span>
                </div>
                <span className="text-2xl font-bold text-ceo-gold">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-ceo-gold to-yellow-400 h-3 rounded-full" style={{width: '85%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge className="bg-purple-500/20 text-purple-500">Advanced</Badge>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Business Strategy</span>
                </div>
                <span className="text-2xl font-bold text-purple-500">80%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-400 h-3 rounded-full" style={{width: '80%'}}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge className="bg-green-500/20 text-green-500">Intermediate</Badge>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Coffee Drinking</span>
                </div>
                <span className="text-2xl font-bold text-green-500">99%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full" style={{width: '99%'}}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Featured here & there</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              I've been fortunate to have my work recognized across the cybersecurity and entrepreneurship communities. 
              I've also spoken at various tech events and enjoy sharing my expertise on digital security and business growth.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                    <achievement.icon className="w-12 h-12 mx-auto mb-4 text-gradient-to-r from-matrix to-ceo-gold" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{achievement.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Story CTA */}
      <section className="py-20 bg-gradient-to-r from-matrix to-ceo-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">My story</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Learn more about my journey from cybersecurity analyst to serial entrepreneur, 
              how I built my expertise, and the key lessons I've learned along the way.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => window.open('/blog', '_blank')}
              >
                Read my story
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3"
                onClick={() => window.open('/learn', '_blank')}
              >
                Learn from me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
