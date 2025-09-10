'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Briefcase, Award, Leaf, Heart, Zap, Puzzle, Wrench } from 'lucide-react';

type Persona = 'dev' | 'ceo';

const skills = {
  dev: [
    { name: 'Web Development', level: 95 },
    { name: 'Mobile Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'DevOps', level: 75 },
    { name: 'Blockchain', level: 70 },
  ],
  ceo: [
    { name: 'Strategic Planning', level: 95 },
    { name: 'Business Development', level: 90 },
    { name: 'Leadership', level: 92 },
    { name: 'Financial Management', level: 88 },
    { name: 'Market Analysis', level: 85 },
  ]
};

const funFacts = [
  {
    icon: <Leaf className="h-6 w-6 text-green-500" />,
    title: 'Gardening Enthusiast',
    description: 'Finds peace and creativity in nurturing plants and watching them grow.'
  },
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: 'Avid Cook',
    description: 'Loves experimenting with new recipes and hosting dinner parties.'
  },
  {
    icon: <Puzzle className="h-6 w-6 text-blue-500" />,
    title: 'Puzzle Solver',
    description: 'Enjoys challenging the mind with chess and complex puzzles.'
  },
  {
    icon: <Wrench className="h-6 w-6 text-yellow-500" />,
    title: 'Fixer & Creator',
    description: 'Always working on building or fixing something, both physically and digitally.'
  }
];

export default function About() {
  const [activePersona, setActivePersona] = useState<Persona>('dev');

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {activePersona === 'dev' 
              ? 'Turning ideas into elegant, functional code' 
              : 'Leading with vision and driving business success'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Image and Toggle */}
          <div className="w-full lg:w-1/3">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={activePersona === 'dev' ? '/assets/DEVCEO.png' : '/assets/CEO.png'}
                alt={activePersona === 'dev' ? 'Developer Persona' : 'CEO Persona'}
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <div className="flex justify-center space-x-2">
                  <Button
                    variant={activePersona === 'dev' ? 'default' : 'outline'}
                    onClick={() => setActivePersona('dev')}
                    className="transition-all"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Developer
                  </Button>
                  <Button
                    variant={activePersona === 'ceo' ? 'default' : 'outline'}
                    onClick={() => setActivePersona('ceo')}
                    className="transition-all"
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    CEO
                  </Button>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-medium flex items-center">
                <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                Fun Facts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {funFacts.map((fact, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-muted rounded-lg">
                          {fact.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{fact.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {fact.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle>Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activePersona === 'dev' ? (
                    <>
                      <p>
                        I'm a passionate full-stack developer with a strong focus on creating efficient, 
                        scalable, and user-friendly applications. With years of experience in the tech industry, 
                        I've honed my skills in various programming languages and frameworks to bring ideas to life.
                      </p>
                      <p>
                        My journey in technology started with a curiosity about how things work, which 
                        evolved into a career where I solve complex problems through code. I believe in 
                        writing clean, maintainable code and staying up-to-date with the latest industry trends.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        As a CEO and entrepreneur, I lead with vision and strategy, driving business growth 
                        through innovation and strong leadership. My experience spans across multiple industries, 
                        allowing me to bring diverse perspectives to every challenge.
                      </p>
                      <p>
                        I'm passionate about building successful businesses that make a positive impact. 
                        My leadership style focuses on empowering teams, fostering innovation, and delivering 
                        exceptional value to customers and stakeholders.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {activePersona === 'dev' ? 'Technical Skills' : 'Business Skills'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills[activePersona].map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">
                        {activePersona === 'dev' 
                          ? 'Senior Full-Stack Developer' 
                          : 'CEO & Founder'}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        Present
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activePersona === 'dev' 
                        ? 'Leading development of innovative web applications' 
                        : 'Leading multiple successful business ventures'}
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">
                        {activePersona === 'dev' 
                          ? 'Frontend Lead' 
                          : 'Business Development Director'}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        2018-2022
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activePersona === 'dev' 
                        ? 'Led frontend development for enterprise applications' 
                        : 'Drove business growth and strategic partnerships'}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">
                        {activePersona === 'dev' 
                          ? 'M.Sc. Computer Science' 
                          : 'MBA in Business Administration'}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        2016-2018
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activePersona === 'dev' 
                        ? 'Specialized in AI and Machine Learning' 
                        : 'Focused on Entrepreneurship and Innovation'}
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">
                        {activePersona === 'dev' 
                          ? 'B.Sc. Computer Science' 
                          : 'B.Sc. Business Administration'}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        2012-2016
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activePersona === 'dev' 
                        ? 'First Class Honors' 
                        : 'Summa Cum Laude'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
