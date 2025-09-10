import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, GraduationCap, Users, Clock, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const learningPaths = [
  {
    id: "beginner",
    title: "Beginner's Journey",
    description: "Start your tech journey with these fundamental skills",
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    duration: "4-6 weeks",
    features: [
      "Basic programming concepts",
      "Introduction to web development",
      "Version control with Git",
      "Building your first project"
    ],
    cta: "Get Started",
    color: "blue"
  },
  {
    id: "intermediate",
    title: "Skill Advancement",
    description: "Level up your existing skills with advanced concepts",
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
    duration: "8-12 weeks",
    features: [
      "Advanced programming patterns",
      "Database design & optimization",
      "API development",
      "Cloud deployment"
    ],
    cta: "Level Up",
    color: "purple"
  },
  {
    id: "career",
    title: "Career Growth",
    description: "Accelerate your career in tech",
    icon: <Users className="w-6 h-6 text-green-500" />,
    duration: "Ongoing",
    features: [
      "Technical interviews prep",
      "Resume & portfolio review",
      "Salary negotiation",
      "Career path guidance"
    ],
    cta: "Grow Now",
    color: "green"
  }
];

type FormData = {
  name: string;
  email: string;
  path: string;
  goals: string;
  experience: string;
};

export default function LearnPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    path: "",
    goals: "",
    experience: "beginner"
  });

  const handlePathSelect = (pathId: string) => {
    setSelectedPath(pathId);
    setFormData(prev => ({ ...prev, path: pathId }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success('Registration successful!', {
        description: 'We\'ll be in touch soon to discuss your learning journey.'
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        path: selectedPath || "",
        goals: "",
        experience: "beginner"
      });
      
      // Go back to path selection
      setSelectedPath(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong', {
        description: 'Please try again or contact support if the issue persists.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedPathData = learningPaths.find(path => path.id === selectedPath);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learn & Grow with Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose your learning path and start your journey to mastery
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Click on any card below to get started
          </p>
        </div>

        {!selectedPath ? (
          <div className="grid md:grid-cols-3 gap-8 mb-16 px-4">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className={`relative rounded-xl overflow-hidden border-2 border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-${path.color}-500 cursor-pointer`}
                onClick={() => handlePathSelect(path.id)}
              >
                <div className={`absolute inset-0.5 bg-gradient-to-r ${path.color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300 ${selectedPath === path.id ? 'scale-105' : ''}`}></div>
                <Card className="relative bg-white dark:bg-gray-800 rounded-xl h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-transparent group-hover:-translate-y-1">
                  <CardHeader className="flex-1">
                    <div className={`p-3 bg-gradient-to-r ${path.color} rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white`}>
                      {path.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">{path.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{path.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {path.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <button
                    type="button"
                    className={`w-full bg-${path.color}-500 hover:bg-${path.color}-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center`}
                  >
                    {path.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto px-4">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
                <button
                  type="button"
                  onClick={() => setSelectedPath(null)}
                  className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Back to all paths
                </button>
                <CardTitle className="text-3xl text-white">
                  {selectedPathData?.title}
                </CardTitle>
                <p className="text-indigo-100">
                  {selectedPathData?.description}
                </p>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Let's Get Started</h3>
                  <p className="text-gray-600 dark:text-gray-300">Share a few details and we'll be in touch</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Current Experience Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white dark:bg-gray-800"
                      required
                    >
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Learning Goals <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="What skills do you want to develop? What are your career aspirations?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      required
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Be specific about your goals so we can tailor the experience for you.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-${selectedPathData?.color}-500 hover:bg-${selectedPathData?.color}-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        `Start ${selectedPathData?.title}`
                      )}
                    </button>
                    <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
                      By continuing, you agree to our{' '}
                      <Link href="/terms" className="text-indigo-600 hover:underline dark:text-indigo-400 font-medium">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-indigo-600 hover:underline dark:text-indigo-400 font-medium">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Have questions?{' '}
                <Link href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Not sure which path is right for you?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Take our 2-minute assessment and we'll recommend the best learning path based on your goals and experience.
            </p>
            <Link 
              href="/assessment"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium transition-colors"
            >
              Take Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
