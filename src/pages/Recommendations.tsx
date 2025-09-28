import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { 
  Target, Star, MapPin, Clock, Building, Users, 
  Search, Filter, ArrowRight, Heart, BookOpen,
  TrendingUp, Award, Briefcase, ExternalLink 
} from "lucide-react";
import { Link } from "react-router-dom";

const Recommendations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const internships = [
    {
      id: 1,
      title: "AI/ML Engineer Intern",
      company: "Google",
      location: "Bangalore, India",
      duration: "3 months",
      type: "Full-time Intern",
      match: 98,
      rating: 4.9,
      applications: 150,
      description: "Work on cutting-edge machine learning projects with Google's AI research team.",
      skills: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"],
      requirements: "B.Tech/M.Tech in CS/AI/ML with strong programming skills",
      benefits: ["₹80,000/month", "Mentorship", "Certificate", "Pre-placement offer"],
      deadline: "2024-02-15",
      category: "Technology",
      level: "Advanced"
    },
    {
      id: 2,
      title: "Software Development Intern",
      company: "Microsoft",
      location: "Hyderabad, India",
      duration: "4 months",
      type: "Full-time Intern",
      match: 94,
      rating: 4.8,
      applications: 200,
      description: "Join Microsoft's cloud computing team and work on Azure platform development.",
      skills: ["C#", "Azure", "React", "SQL"],
      requirements: "B.Tech in CS/IT with experience in web development",
      benefits: ["₹75,000/month", "Azure certification", "Team collaboration", "Industry exposure"],
      deadline: "2024-02-20",
      category: "Technology",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Space Technology Intern",
      company: "ISRO",
      location: "Thiruvananthapuram, India",
      duration: "2 months",
      type: "Research Intern",
      match: 87,
      rating: 4.7,
      applications: 80,
      description: "Research and development in satellite technology and space missions.",
      skills: ["C++", "Embedded Systems", "Mathematics", "Physics"],
      requirements: "B.Tech/M.Tech in Aerospace/Electronics/CS",
      benefits: ["₹40,000/month", "Research exposure", "ISRO certificate", "Publication opportunity"],
      deadline: "2024-01-30",
      category: "Research",
      level: "Advanced"
    },
    {
      id: 4,
      title: "Product Management Intern",
      company: "Flipkart",
      location: "Mumbai, India",
      duration: "3 months",
      type: "Full-time Intern",
      match: 85,
      rating: 4.6,
      applications: 120,
      description: "Drive product strategy and work with cross-functional teams on e-commerce solutions.",
      skills: ["Product Strategy", "Analytics", "SQL", "User Research"],
      requirements: "MBA/B.Tech with business acumen and analytical skills",
      benefits: ["₹70,000/month", "Product experience", "Leadership training", "Network building"],
      deadline: "2024-02-10",
      category: "Business",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Data Science Intern",
      company: "Tata Consultancy Services",
      location: "Chennai, India",
      duration: "6 months",
      type: "Full-time Intern",
      match: 82,
      rating: 4.5,
      applications: 180,
      description: "Analyze large datasets and build predictive models for enterprise clients.",
      skills: ["Python", "R", "SQL", "Tableau", "Statistics"],
      requirements: "B.Tech/M.Tech/MCA with strong analytical background",
      benefits: ["₹45,000/month", "Industry projects", "TCS certification", "Placement opportunity"],
      deadline: "2024-03-01",
      category: "Technology",
      level: "Intermediate"
    },
    {
      id: 6,
      title: "UI/UX Design Intern",
      company: "Zomato",
      location: "Gurgaon, India",
      duration: "3 months",
      type: "Full-time Intern",
      match: 79,
      rating: 4.4,
      applications: 90,
      description: "Design user interfaces and improve user experience for millions of users.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      requirements: "Design degree or portfolio demonstrating UI/UX skills",
      benefits: ["₹50,000/month", "Design mentorship", "Portfolio building", "Creative freedom"],
      deadline: "2024-02-25",
      category: "Design",
      level: "Beginner"
    }
  ];

  const categories = ["All", "Technology", "Business", "Research", "Design"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          internship.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFilters.length === 0 || 
                           selectedFilters.includes(internship.category) ||
                           selectedFilters.includes("All");
    return matchesSearch && matchesCategory;
  });

  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-green-500 bg-green-500/10";
    if (match >= 80) return "text-blue-500 bg-blue-500/10";
    if (match >= 70) return "text-yellow-500 bg-yellow-500/10";
    return "text-red-500 bg-red-500/10";
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "text-red-500 bg-red-500/10";
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
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-4">
              <Target className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">AI Recommendations</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Personalized <span className="gradient-text">Internship Matches</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Based on your skills, preferences, and career goals, here are your top internship recommendations
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="glass-card mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search internships or companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="All" className="mt-4">
                <TabsList className="grid w-full grid-cols-5">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category} className="text-sm">
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold gradient-text mb-1">{filteredInternships.length}</div>
                <div className="text-sm text-muted-foreground">Total Matches</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
                <div className="text-2xl font-bold text-yellow-500 mb-1">
                  {Math.round(filteredInternships.reduce((acc, i) => acc + i.match, 0) / filteredInternships.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Avg. Match</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Building className="h-8 w-8 mx-auto mb-3 text-green-500" />
                <div className="text-2xl font-bold text-green-500 mb-1">
                  {new Set(filteredInternships.map(i => i.company)).size}
                </div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-purple-500" />
                <div className="text-2xl font-bold text-purple-500 mb-1">
                  {filteredInternships.filter(i => new Date(i.deadline) > new Date()).length}
                </div>
                <div className="text-sm text-muted-foreground">Open Now</div>
              </CardContent>
            </Card>
          </div>

          {/* Internship Cards */}
          <div className="space-y-6">
            {filteredInternships.map((internship) => (
              <Card key={internship.id} className="glass-card hover:glow-effect transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left Column - Main Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all">
                            {internship.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-1" />
                              {internship.company}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {internship.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {internship.duration}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className={getMatchColor(internship.match)}>
                            {internship.match}% Match
                          </Badge>
                          <Badge className={getLevelColor(internship.level)}>
                            {internship.level}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {internship.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.benefits.map((benefit, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Stats & Actions */}
                    <div className="lg:w-80 space-y-4">
                      <Card className="border border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Rating</span>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="font-medium">{internship.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Applications</span>
                            <span className="font-medium">{internship.applications}</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Deadline</span>
                            <span className="font-medium text-destructive">
                              {new Date(internship.deadline).toLocaleDateString()}
                            </span>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="space-y-3">
                        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group-hover:glow-effect">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Apply Now
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Heart className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Prepare
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Recommendations
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recommendations;