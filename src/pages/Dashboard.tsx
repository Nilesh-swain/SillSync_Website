import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { 
  Brain, Target, TrendingUp, Award, BookOpen, Users, 
  ArrowRight, Zap, Star, Clock, CheckCircle2 
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userStats = {
    name: "Alex Kumar",
    skillScore: 78,
    completedQuizzes: 3,
    recommendations: 12,
    applications: 5
  };

  const recentActivity = [
    { action: "Completed AI Assessment", time: "2 hours ago", icon: Brain },
    { action: "Applied to Google Summer Internship", time: "1 day ago", icon: Target },
    { action: "Started Python Course", time: "3 days ago", icon: BookOpen },
    { action: "Connected with mentor", time: "1 week ago", icon: Users }
  ];

  const quickActions = [
    { title: "Take New Quiz", icon: Brain, link: "/quiz", color: "bg-gradient-primary" },
    { title: "View Recommendations", icon: Target, link: "/recommendations", color: "bg-secondary" },
    { title: "Update Profile", icon: Users, link: "/profile", color: "bg-accent" },
    { title: "Explore Roadmaps", icon: BookOpen, link: "/roadmap", color: "bg-destructive" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, <span className="gradient-text">{userStats.name}</span>
            </h1>
            <p className="text-muted-foreground">Track your progress and discover new opportunities</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Skill Score</p>
                    <p className="text-2xl font-bold gradient-text">{userStats.skillScore}%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <Progress value={userStats.skillScore} className="mt-3" />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Quizzes</p>
                    <p className="text-2xl font-bold">{userStats.completedQuizzes}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Recommendations</p>
                    <p className="text-2xl font-bold">{userStats.recommendations}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Applications</p>
                    <p className="text-2xl font-bold">{userStats.applications}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-destructive/10">
                    <Award className="h-6 w-6 text-destructive" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <Link key={index} to={action.link}>
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start hover:bg-muted/50 transition-all duration-300 group"
                          >
                            <div className={`p-2 rounded-lg ${action.color}/10 mr-3 group-hover:${action.color}/20 transition-colors`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            {action.title}
                            <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div key={index} className="flex items-center p-3 rounded-lg hover:bg-muted/30 transition-colors">
                          <div className="p-2 rounded-lg bg-gradient-primary/10 mr-4">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                          </div>
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recommendations Preview */}
          <Card className="glass-card mt-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-primary" />
                  Top Recommendations for You
                </div>
                <Link to="/recommendations">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <h3 className="font-semibold mb-2">Software Developer Intern - Google</h3>
                  <p className="text-sm text-muted-foreground mb-3">3-month program focused on full-stack development</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-500">98% Match</span>
                    <Button size="sm">Apply Now</Button>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <h3 className="font-semibold mb-2">Data Science Intern - Microsoft</h3>
                  <p className="text-sm text-muted-foreground mb-3">AI/ML focused internship with mentorship</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-500">94% Match</span>
                    <Button size="sm">Apply Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;