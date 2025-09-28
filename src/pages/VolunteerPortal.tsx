import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { 
  Users, Brain, TrendingUp, Award, Clock, CheckCircle, 
  AlertCircle, PlusCircle, Eye, MessageCircle, Calendar,
  BarChart3, Target, Zap, BookOpen, User
} from "lucide-react";
import mentorDashboard from "@/assets/mentor-dashboard.jpg";
import ChatBot from "@/components/ChatBot";
import { useLanguage } from "@/hooks/useLanguage";

const VolunteerPortal = () => {
  const { t } = useLanguage();
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const dashboardStats = [
    { icon: Users, label: "Students Assigned", value: "24", change: "+3" },
    { icon: TrendingUp, label: "Avg Progress", value: "78%", change: "+12%" },
    { icon: Award, label: "Placements This Month", value: "8", change: "+2" },
    { icon: Clock, label: "Active Sessions", value: "12", change: "0" }
  ];

  const students = [
    {
      id: "1",
      name: "Priya Sharma",
      email: "priya@email.com",
      progress: 85,
      currentSkill: "React Development",
      targetCompany: "Google",
      lastActive: "2 hours ago",
      status: "active",
      quizScore: 92,
      interviewReady: true
    },
    {
      id: "2", 
      name: "Arjun Patel",
      email: "arjun@email.com",
      progress: 67,
      currentSkill: "Data Structures",
      targetCompany: "Microsoft",
      lastActive: "1 day ago",
      status: "needs-attention",
      quizScore: 78,
      interviewReady: false
    },
    {
      id: "3",
      name: "Sneha Reddy",
      email: "sneha@email.com", 
      progress: 92,
      currentSkill: "System Design",
      targetCompany: "Amazon",
      lastActive: "30 min ago",
      status: "active",
      quizScore: 88,
      interviewReady: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'needs-attention': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${mentorDashboard})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-card border border-primary/30 mb-8">
              <Users className="h-5 w-5 mr-3 text-primary" />
              <span className="text-sm font-semibold gradient-text">Mentor Dashboard</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Volunteer <span className="gradient-text">Portal</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Monitor student progress, create live quizzes, and guide the next generation of professionals
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="glass-card hover:glow-effect transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                        <p className="text-xs text-primary">
                          {stat.change} from last week
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="students" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 glass-card">
              <TabsTrigger value="students">Student Management</TabsTrigger>
              <TabsTrigger value="quizzes">Live Quizzes</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Assigned Students</h2>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Student
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {students.map((student) => (
                  <Card key={student.id} className="glass-card hover:glow-effect transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{student.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{student.email}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(student.status)}>
                          {student.status === 'active' ? 'Active' : 'Needs Attention'}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Overall Progress</span>
                          <span className="font-medium">{student.progress}%</span>
                        </div>
                        <Progress value={student.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Current Skill</p>
                          <p className="font-medium">{student.currentSkill}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Target Company</p>
                          <p className="font-medium text-primary">{student.targetCompany}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Quiz Score</p>
                          <p className="font-medium">{student.quizScore}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Interview Ready</p>
                          <div className="flex items-center">
                            {student.interviewReady ? (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-yellow-400" />
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        Last active: {student.lastActive}
                      </p>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Chat
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Live Quizzes Tab */}
            <TabsContent value="quizzes" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Live Quiz Management</h2>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Quiz
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 mr-2 text-primary" />
                      Quick Assessment Creator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <Target className="h-4 w-4 mr-2" />
                        Technical Skills Quiz
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Company-Specific Questions
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Zap className="h-4 w-4 mr-2" />
                        Quick Fire Round
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      Active Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">React Fundamentals</p>
                          <p className="text-sm text-muted-foreground">5 participants</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-400">Live</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">System Design Basics</p>
                          <p className="text-sm text-muted-foreground">3 participants</p>
                        </div>
                        <Badge variant="outline">Scheduled</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <h2 className="text-2xl font-bold">Performance Analytics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                      Success Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Quiz Completion Rate</span>
                        <span className="font-bold text-primary">94%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interview Success Rate</span>
                        <span className="font-bold text-primary">87%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Placement Rate</span>
                        <span className="font-bold text-primary">76%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      Weekly Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">+23%</div>
                        <div className="text-sm text-muted-foreground">Student Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">+15%</div>
                        <div className="text-sm text-muted-foreground">Quiz Scores</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Top Performers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {students.slice(0, 3).map((student, index) => (
                        <div key={student.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-xs text-white">
                              {index + 1}
                            </div>
                            <span className="text-sm">{student.name}</span>
                          </div>
                          <span className="text-sm font-medium text-primary">{student.progress}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <h2 className="text-2xl font-bold">Mentor Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Create Learning Module
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Schedule Group Session
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Announcement
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Help & Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/help">
                      <Button className="w-full justify-start" variant="outline">
                        Mentor Guidelines
                      </Button>
                    </Link>
                    <Button className="w-full justify-start" variant="outline">
                      Contact Support
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      Training Resources
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ChatBot />
    </div>
  );
};

export default VolunteerPortal;