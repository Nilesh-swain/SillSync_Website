import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import { 
  User, Mail, MapPin, BookOpen, Code, Award, 
  Plus, X, Download, Edit3, Save, Github, Linkedin 
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState([
    "Python", "JavaScript", "React", "Machine Learning", "Data Analysis"
  ]);
  const [newSkill, setNewSkill] = useState("");

  const [profile, setProfile] = useState({
    name: "Alex Kumar",
    email: "alex.kumar@email.com",
    location: "Mumbai, Maharashtra",
    college: "Indian Institute of Technology, Bombay",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    bio: "Passionate computer science student with a keen interest in AI/ML and web development. Looking for internship opportunities to apply my skills in real-world projects.",
    github: "github.com/alexkumar",
    linkedin: "linkedin.com/in/alexkumar"
  });

  const achievements = [
    { title: "Google Code-in Finalist", year: "2023" },
    { title: "Hackathon Winner - TechFest", year: "2023" },
    { title: "NPTEL Course Completion", year: "2022" }
  ];

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              My <span className="gradient-text">Profile</span>
            </h1>
            
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
              
              <Button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <Card className="glass-card">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="text-lg bg-gradient-primary text-white">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  {isEditing ? (
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      className="text-center font-semibold text-lg mb-2"
                    />
                  ) : (
                    <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
                  )}
                  
                  <p className="text-muted-foreground mb-4">{profile.course}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2" />
                      {profile.email}
                    </div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {profile.location}
                    </div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {profile.college}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Social Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Github className="h-5 w-5 mr-3 text-muted-foreground" />
                      {isEditing ? (
                        <Input
                          value={profile.github}
                          onChange={(e) => setProfile({...profile, github: e.target.value})}
                          className="text-sm"
                        />
                      ) : (
                        <a href={`https://${profile.github}`} className="text-sm text-primary hover:underline">
                          {profile.github}
                        </a>
                      )}
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 mr-3 text-muted-foreground" />
                      {isEditing ? (
                        <Input
                          value={profile.linkedin}
                          onChange={(e) => setProfile({...profile, linkedin: e.target.value})}
                          className="text-sm"
                        />
                      ) : (
                        <a href={`https://${profile.linkedin}`} className="text-sm text-primary hover:underline">
                          {profile.linkedin}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    About Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      rows={4}
                      className="resize-none"
                    />
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
                  )}
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Skills & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-sm py-1 px-3 flex items-center gap-2"
                      >
                        {skill}
                        {isEditing && (
                          <X 
                            className="h-3 w-3 cursor-pointer hover:text-destructive" 
                            onClick={() => removeSkill(skill)}
                          />
                        )}
                      </Badge>
                    ))}
                  </div>
                  
                  {isEditing && (
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add new skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                        className="flex-1"
                      />
                      <Button onClick={addSkill} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/30 pl-4">
                      {isEditing ? (
                        <div className="space-y-2">
                          <Input
                            value={profile.course}
                            onChange={(e) => setProfile({...profile, course: e.target.value})}
                            className="font-medium"
                          />
                          <Input
                            value={profile.college}
                            onChange={(e) => setProfile({...profile, college: e.target.value})}
                            className="text-sm"
                          />
                          <Input
                            value={profile.year}
                            onChange={(e) => setProfile({...profile, year: e.target.value})}
                            className="text-sm"
                          />
                        </div>
                      ) : (
                        <>
                          <h3 className="font-medium">{profile.course}</h3>
                          <p className="text-sm text-muted-foreground">{profile.college}</p>
                          <p className="text-sm text-muted-foreground">{profile.year}</p>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <span className="font-medium">{achievement.title}</span>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;