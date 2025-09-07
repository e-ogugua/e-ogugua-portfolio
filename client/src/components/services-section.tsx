import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, ArrowRight } from "lucide-react";
import { PROFESSIONAL_SERVICES } from "@/lib/constants";

interface ServicesSectionProps {
  onServiceSelect?: (service: any) => void;
}

export function ServicesSection({ onServiceSelect }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"development" | "business">("development");

  const services = PROFESSIONAL_SERVICES[activeCategory];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with expert development and strategic consulting services
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-200 dark:bg-gray-800 rounded-full p-1">
              <Button
                onClick={() => setActiveCategory("development")}
                className={`px-8 py-3 rounded-full font-mono transition-all ${
                  activeCategory === "development"
                    ? "bg-matrix text-black"
                    : "text-gray-600 dark:text-gray-400 bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                Development Services
              </Button>
              <Button
                onClick={() => setActiveCategory("business")}
                className={`px-8 py-3 rounded-full font-serif transition-all ${
                  activeCategory === "business"
                    ? "bg-ceo-gold text-white"
                    : "text-gray-600 dark:text-gray-400 bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                Business Services
              </Button>
            </div>
          </div>
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    activeCategory === "development" 
                      ? "font-mono text-matrix" 
                      : "font-serif text-ceo-gold"
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className={`text-4xl font-bold mb-2 ${
                      activeCategory === "development" ? "text-matrix" : "text-ceo-gold"
                    }`}>
                      {service.price}
                    </div>
                    <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 ${
                        activeCategory === "development" ? "text-matrix" : "text-ceo-gold"
                      }`} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full py-3 transition-all duration-300 transform hover:scale-105 group ${
                    activeCategory === "development"
                      ? "bg-gradient-to-r from-matrix to-green-400 text-black font-mono font-bold hover:from-matrix/90 hover:to-green-400/90 shadow-lg hover:shadow-matrix/50"
                      : "bg-gradient-to-r from-ceo-gold to-yellow-400 text-black font-serif font-bold hover:from-ceo-gold/90 hover:to-yellow-400/90 shadow-lg hover:shadow-ceo-gold/50"
                  }`}
                  onClick={() => onServiceSelect?.(service)}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-matrix to-ceo-gold p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-xl mb-6 opacity-90">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <Button 
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3"
              onClick={() => onServiceSelect?.({ id: "custom", title: "Custom Solution", category: "custom" })}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
