import { Button } from "@/components/ui/button";
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
    cta: "Start Learning"
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
    cta: "Advance Now"
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
    cta: "Grow Your Career"
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
    experience: ""
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
      // Here you would typically send the form data to your API or email service
      console.log('Learning path registration:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Registration successful! Check your email for next steps.');
      setFormData({
        name: "",
        email: "",
        path: "",
        goals: "",
        experience: ""
      });
      setSelectedPath(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learn & Grow with Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose your learning path and start your journey to mastery
          </p>
        </div>

        {!selectedPath ? (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {learningPaths.map((path) => (
              <Card key={path.id} className="group hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {path.icon}
                  </div>
                  <CardTitle className="text-2xl">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{path.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {path.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handlePathSelect(path.id)}
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                  >
                    {path.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedPath(null)}
                  className="w-fit mb-4"
                >
                  ← Back to all paths
                </Button>
                <CardTitle className="text-3xl">
                  {learningPaths.find(p => p.id === selectedPath)?.title}
                </CardTitle>
                <CardDescription>
                  {learningPaths.find(p => p.id === selectedPath)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Current Experience Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Learning Goals <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="What do you hope to achieve?"
                      rows={4}
                      required
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Be specific about your goals so we can tailor the experience for you.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Start Learning Journey'
                      )}
                    </Button>
                    <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
                      By continuing, you agree to our{' '}
                      <Link href="/terms" className="text-blue-600 hover:underline dark:text-blue-400">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-blue-600 hover:underline dark:text-blue-400">
                        Privacy Policy
                      </Link>.
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
            <Button 
              asChild
              variant="outline"
              className="border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Link href="/assessment">
                Take Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
