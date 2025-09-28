import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, Download, Eye, Star, Clock, Users, 
  BookOpen, CheckCircle, Target, Lightbulb, Brain,
  Award, TrendingUp, Play
} from "lucide-react";

const InterviewPrep = () => {
  const prepMaterials = [
    {
      id: 1,
      title: "Software Engineering Interview Guide",
      description: "Complete preparation guide covering DSA, system design, and behavioral questions for SDE internships.",
      type: "PDF Guide",
      pages: 85,
      downloads: "15.2K",
      rating: 4.9,
      tags: ["SDE", "DSA", "System Design", "Coding"],
      category: "Technical",
      color: "from-blue-500 to-cyan-500",
      icon: FileText,
      size: "12.5 MB",
      lastUpdated: "Jan 2024"
    },
    {
      id: 2,
      title: "Data Science Interview Preparation Kit",
      description: "Comprehensive resource covering ML algorithms, statistics, Python, and case study questions.",
      type: "PDF Bundle",
      pages: 120,
      downloads: "8.7K",
      rating: 4.8,
      tags: ["Data Science", "ML", "Statistics", "Python"],
      category: "Technical",
      color: "from-green-500 to-emerald-500",
      icon: Brain,
      size: "18.3 MB",
      lastUpdated: "Dec 2023"
    },
    {
      id: 3,
      title: "Product Management Interview Handbook",
      description: "Strategic thinking, product design, metrics, and case study solutions for PM internship interviews.",
      type: "Interactive PDF",
      pages: 95,
      downloads: "6.4K",
      rating: 4.7,
      tags: ["Product Management", "Strategy", "Metrics", "Cases"],
      category: "Business",
      color: "from-purple-500 to-pink-500",
      icon: Target,
      size: "15.7 MB",
      lastUpdated: "Jan 2024"
    },
    {
      id: 4,
      title: "Behavioral Interview Masterclass",
      description: "STAR method, leadership examples, and company-specific behavioral questions with sample answers.",
      type: "Guide + Audio",
      pages: 45,
      downloads: "12.8K",
      rating: 4.9,
      tags: ["Behavioral", "STAR Method", "Leadership", "Communication"],
      category: "Soft Skills",
      color: "from-orange-500 to-red-500",
      icon: Users,
      size: "8.2 MB",
      lastUpdated: "Jan 2024"
    },
    {
      id: 5,
      title: "Finance & Consulting Interview Prep",
      description: "Financial modeling, case studies, brain teasers, and industry-specific interview questions.",
      type: "PDF + Excel",
      pages: 78,
      downloads: "4.1K",
      rating: 4.6,
      tags: ["Finance", "Consulting", "Modeling", "Cases"],
      category: "Finance",
      color: "from-teal-500 to-blue-500",
      icon: TrendingUp,
      size: "22.1 MB",
      lastUpdated: "Dec 2023"
    },
    {
      id: 6,
      title: "Design & UX Interview Portfolio",
      description: "Design process, portfolio presentation, design challenges, and visual communication strategies.",
      type: "PDF + Templates",
      pages: 65,
      downloads: "3.8K",
      rating: 4.8,
      tags: ["Design", "UX", "Portfolio", "Creative"],
      category: "Design",
      color: "from-pink-500 to-rose-500",
      icon: Lightbulb,
      size: "25.4 MB",
      lastUpdated: "Jan 2024"
    }
  ];

  const categories = [
    { name: "All", count: 25, active: true },
    { name: "Technical", count: 12, active: false },
    { name: "Business", count: 6, active: false },
    { name: "Soft Skills", count: 4, active: false },
    { name: "Finance", count: 2, active: false },
    { name: "Design", count: 3, active: false }
  ];

  const quickTips = [
    {
      title: "Research the Company",
      description: "Study company culture, recent news, products, and values. Show genuine interest.",
      icon: BookOpen
    },
    {
      title: "Practice STAR Method",
      description: "Structure behavioral answers using Situation, Task, Action, Result framework.",
      icon: Star
    },
    {
      title: "Prepare Questions",
      description: "Ask thoughtful questions about the role, team, and growth opportunities.",
      icon: Lightbulb
    },
    {
      title: "Technical Practice",
      description: "Solve coding problems daily and practice explaining your thought process.",
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-4">
              <Award className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Interview Preparation</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Master Your <span className="gradient-text">Interview Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive preparation materials, practice questions, and expert guidance 
              to help you ace your dream internship interviews with confidence.
            </p>
          </div>

          {/* Quick Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Quick Interview Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickTips.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <Card key={index} className="glass-card text-center hover-scale">
                    <CardContent className="p-4">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-primary/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={category.active ? "bg-gradient-primary" : ""}
                size="sm"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Preparation Materials */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prepMaterials.map((material) => {
                const IconComponent = material.icon;
                return (
                  <Card key={material.id} className="glass-card hover-scale group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${material.color} flex items-center justify-center mb-3`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <Badge className="bg-gradient-primary">
                          {material.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {material.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {material.description}
                      </p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Type:</span>
                          <span className="font-medium">{material.type}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Pages:</span>
                          <span className="font-medium">{material.pages}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{material.size}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {material.downloads}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {material.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {material.lastUpdated}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {material.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Mock Interview Section */}
          <section className="mb-12">
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-primary/10">
                        <Play className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Mock Interview Practice</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Practice with AI-powered mock interviews tailored to your target role. 
                      Get instant feedback on your answers, communication skills, and areas for improvement.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Realistic interview simulation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Instant AI feedback and scoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Company-specific questions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Progress tracking and analytics</span>
                      </div>
                    </div>
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                      Start Mock Interview
                      <Play className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-lg font-semibold">Interactive Mock Interview</p>
                        <p className="text-sm text-muted-foreground">AI-powered practice sessions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Success Stories */}
          <section>
            <Card className="glass-card text-center">
              <CardContent className="p-12">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    Join <span className="gradient-text">50,000+</span> Students Who Aced Their Interviews
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our interview preparation materials have helped students secure internships 
                    at top companies including Google, Microsoft, Amazon, Goldman Sachs, and more.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
                      <div className="text-sm text-muted-foreground">Students Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">4.9★</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    Get Premium Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default InterviewPrep;