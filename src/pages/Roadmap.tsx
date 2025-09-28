import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { 
  MapPin, Target, CheckCircle2, Clock, Star, 
  ArrowRight, BookOpen, Code, Award, Users, 
  Briefcase, TrendingUp, Zap 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Roadmap = () => {
  const topCompanies = [
    {
      name: "Google",
      logo: "🏢",
      difficulty: "Expert",
      duration: "12-16 weeks",
      openings: 50,
      skills: ["Python", "Machine Learning", "System Design", "Algorithms"],
      progress: 65,
      status: "In Progress",
      color: "bg-blue-500"
    },
    {
      name: "Microsoft",
      logo: "🖥️",
      difficulty: "Advanced",
      duration: "10-12 weeks",
      openings: 75,
      skills: ["C#", "Azure", "React", "SQL"],
      progress: 40,
      status: "Planning",
      color: "bg-green-500"
    },
    {
      name: "Amazon",
      logo: "📦",
      difficulty: "Advanced",
      duration: "12 weeks",
      openings: 100,
      skills: ["Java", "AWS", "System Design", "Leadership"],
      progress: 20,
      status: "Not Started",
      color: "bg-orange-500"
    },
    {
      name: "Apple",
      logo: "🍎",
      difficulty: "Expert",
      duration: "14 weeks",
      openings: 30,
      skills: ["Swift", "iOS Development", "Design", "Hardware"],
      progress: 0,
      status: "Not Started",
      color: "bg-gray-500"
    },
    {
      name: "Meta",
      logo: "📘",
      difficulty: "Advanced",
      duration: "12 weeks",
      openings: 60,
      skills: ["React", "Python", "ML", "Product Sense"],
      progress: 30,
      status: "Planning",
      color: "bg-blue-600"
    },
    {
      name: "Tesla",
      logo: "⚡",
      difficulty: "Expert",
      duration: "16 weeks",
      openings: 25,
      skills: ["Python", "Embedded Systems", "AI", "Engineering"],
      progress: 10,
      status: "Not Started",
      color: "bg-red-500"
    },
    {
      name: "ISRO",
      logo: "🚀",
      difficulty: "Advanced",
      duration: "8-10 weeks",
      openings: 40,
      skills: ["C++", "Space Tech", "Mathematics", "Physics"],
      progress: 80,
      status: "Almost Ready",
      color: "bg-purple-500"
    },
    {
      name: "Tata Group",
      logo: "🏭",
      difficulty: "Intermediate",
      duration: "8 weeks",
      openings: 120,
      skills: ["Java", "Business Analysis", "Operations", "Management"],
      progress: 90,
      status: "Ready to Apply",
      color: "bg-indigo-500"
    }
  ];

  const skillCategories = [
    {
      category: "Technical Skills",
      icon: Code,
      skills: [
        { name: "Data Structures & Algorithms", importance: "Critical", completed: true },
        { name: "System Design", importance: "High", completed: false },
        { name: "Machine Learning", importance: "High", completed: true },
        { name: "Cloud Computing", importance: "Medium", completed: false }
      ]
    },
    {
      category: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Communication", importance: "Critical", completed: true },
        { name: "Leadership", importance: "High", completed: false },
        { name: "Problem Solving", importance: "Critical", completed: true },
        { name: "Teamwork", importance: "High", completed: true }
      ]
    },
    {
      category: "Domain Knowledge",
      icon: BookOpen,
      skills: [
        { name: "Product Management", importance: "Medium", completed: false },
        { name: "Business Analysis", importance: "Medium", completed: false },
        { name: "User Experience", importance: "Medium", completed: true },
        { name: "Data Analysis", importance: "High", completed: true }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready to Apply": return "text-green-500 bg-green-500/10";
      case "Almost Ready": return "text-blue-500 bg-blue-500/10";
      case "In Progress": return "text-yellow-500 bg-yellow-500/10";
      case "Planning": return "text-purple-500 bg-purple-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Expert": return "text-red-500 bg-red-500/10";
      case "Advanced": return "text-orange-500 bg-orange-500/10";
      case "Intermediate": return "text-blue-500 bg-blue-500/10";
      default: return "text-green-500 bg-green-500/10";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-4">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Career Roadmap</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your Path to <span className="gradient-text">Dream Internships</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore roadmaps for top internships and track your progress towards your goals
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold gradient-text mb-1">8</div>
                <div className="text-sm text-muted-foreground">Companies Tracked</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-500" />
                <div className="text-2xl font-bold text-green-500 mb-1">3</div>
                <div className="text-sm text-muted-foreground">Ready to Apply</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
                <div className="text-2xl font-bold text-yellow-500 mb-1">2</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-3 text-purple-500" />
                <div className="text-2xl font-bold text-purple-500 mb-1">65%</div>
                <div className="text-sm text-muted-foreground">Avg. Progress</div>
              </CardContent>
            </Card>
          </div>

          {/* Company Roadmaps */}
          <Card className="glass-card mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Briefcase className="h-6 w-6 mr-3 text-primary" />
                Top Company Internships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {topCompanies.map((company, index) => (
                  <Card key={index} className="border border-border/50 hover:glow-effect transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{company.logo}</div>
                          <div>
                            <h3 className="text-xl font-semibold">{company.name}</h3>
                            <p className="text-sm text-muted-foreground">{company.duration}</p>
                          </div>
                        </div>
                        <Badge className={getDifficultyColor(company.difficulty)}>
                          {company.difficulty}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{company.progress}%</span>
                        </div>
                        <Progress value={company.progress} className="h-2" />
                        
                        <div className="flex items-center justify-between">
                          <Badge className={getStatusColor(company.status)}>
                            {company.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {company.openings} openings
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Required Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {company.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group-hover:glow-effect"
                        disabled={company.progress < 80}
                      >
                        {company.progress >= 80 ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Apply Now
                          </>
                        ) : (
                          <>
                            <Target className="h-4 w-4 mr-2" />
                            Continue Preparation
                          </>
                        )}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skill Development */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Zap className="h-6 w-6 mr-3 text-primary" />
                Skill Development Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card key={index} className="border border-border/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center text-lg">
                          <Icon className="h-5 w-5 mr-2 text-primary" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                {skill.completed ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span className={`text-sm ${skill.completed ? 'line-through text-muted-foreground' : ''}`}>
                                  {skill.name}
                                </span>
                              </div>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${
                                  skill.importance === 'Critical' ? 'border-red-500 text-red-500' :
                                  skill.importance === 'High' ? 'border-orange-500 text-orange-500' :
                                  'border-blue-500 text-blue-500'
                                }`}
                              >
                                {skill.importance}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/quiz">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Get Personalized Learning Plan
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Roadmap;