import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, Clock, Eye, ThumbsUp, BookOpen, Video, 
  Users, TrendingUp, Star, Calendar, User
} from "lucide-react";

const Vlogs = () => {
  const vlogData = [
    {
      id: 1,
      title: "How I Cracked Google SDE Internship - Complete Journey",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      duration: "24:30",
      views: "125K",
      likes: "8.2K",
      author: "Priya Sharma",
      uploadDate: "2 days ago",
      category: "Success Story",
      tags: ["Google", "SDE", "Interview", "Coding"],
      description: "My complete journey from college student to Google SDE intern. I share all the resources, preparation strategy, and interview experience.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Microsoft Interview Experience - Data Science Intern",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
      duration: "18:45",
      views: "89K",
      likes: "5.6K",
      author: "Rahul Gupta",
      uploadDate: "5 days ago",
      category: "Interview",
      tags: ["Microsoft", "Data Science", "ML", "Python"],
      description: "Detailed breakdown of my Microsoft Data Science internship interview process, including technical rounds and behavioral questions.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "From Rural India to Amazon - My Internship Story",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      duration: "31:20",
      views: "200K",
      likes: "15.3K",
      author: "Anita Kumari",
      uploadDate: "1 week ago",
      category: "Inspiration",
      tags: ["Amazon", "Rural", "Motivation", "Success"],
      description: "How I overcame challenges coming from a small village in Bihar to secure an Amazon SDE internship. Resources and mindset tips included.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "ISRO Scientist Intern - Space Technology Journey",
      thumbnail: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
      duration: "22:15",
      views: "150K",
      likes: "12.1K",
      author: "Dr. Kalam Junior",
      uploadDate: "3 days ago",
      category: "Government",
      tags: ["ISRO", "Space", "Research", "Science"],
      description: "My experience as an ISRO intern working on satellite technology. Preparation tips for aerospace engineering interviews.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Startup vs Corporate Internship - Which to Choose?",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      duration: "16:40",
      views: "95K",
      likes: "7.8K",
      author: "Startup Guru",
      uploadDate: "4 days ago",
      category: "Career Advice",
      tags: ["Startup", "Corporate", "Career", "Advice"],
      description: "Comparing startup vs corporate internships based on my experience at both. Pros, cons, and what's right for you.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Flipkart Product Manager Intern - Interview & Experience",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      duration: "20:30",
      views: "110K",
      likes: "9.2K",
      author: "PM Expert",
      uploadDate: "6 days ago",
      category: "Product Management",
      tags: ["Flipkart", "PM", "Product", "Strategy"],
      description: "Complete breakdown of Flipkart Product Manager internship interview process and my 3-month experience working on key products.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "Complete Roadmap to Software Engineering Internships in 2024",
      excerpt: "A comprehensive guide covering everything from skill development to interview preparation for software engineering internships at top companies.",
      author: "Tech Career Coach",
      readTime: "12 min read",
      publishDate: "Jan 15, 2024",
      category: "Roadmap",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
      tags: ["SDE", "Internship", "Career", "Guide"]
    },
    {
      id: 2,
      title: "Top 50 Data Science Interview Questions for Internships",
      excerpt: "Curated list of most frequently asked data science interview questions with detailed answers and explanations for internship positions.",
      author: "Data Science Pro",
      readTime: "20 min read",
      publishDate: "Jan 12, 2024",
      category: "Interview Prep",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Data Science", "Interview", "Questions", "ML"]
    },
    {
      id: 3,
      title: "How to Build Projects That Get You Noticed by Recruiters",
      excerpt: "Learn how to create impressive projects that showcase your skills and help you stand out in internship applications.",
      author: "Project Builder",
      readTime: "15 min read",
      publishDate: "Jan 10, 2024",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=250&fit=crop",
      tags: ["Projects", "Portfolio", "GitHub", "Skills"]
    },
    {
      id: 4,
      title: "Networking Strategies for Landing Dream Internships",
      excerpt: "Master the art of networking to unlock hidden internship opportunities and build valuable connections in your field.",
      author: "Network Master",
      readTime: "10 min read",
      publishDate: "Jan 8, 2024",
      category: "Networking",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=250&fit=crop",
      tags: ["Networking", "LinkedIn", "Connections", "Career"]
    }
  ];

  const categories = [
    { name: "All", count: 25, active: true },
    { name: "Success Stories", count: 8, active: false },
    { name: "Interview Tips", count: 12, active: false },
    { name: "Career Advice", count: 5, active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-4">
              <Video className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Career Content</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Career <span className="gradient-text">Vlogs & Blogs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from successful professionals, get insider tips, and discover proven strategies 
              to land your dream internship and build a successful career.
            </p>
          </div>

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

          {/* Video Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-primary/10">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Success Story Videos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vlogData.map((vlog) => (
                <Card key={vlog.id} className="glass-card hover-scale group overflow-hidden">
                  <div className="relative">
                    <img 
                      src={vlog.thumbnail} 
                      alt={vlog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {vlog.duration}
                    </div>
                    <Badge className="absolute top-2 left-2 bg-gradient-primary">
                      {vlog.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {vlog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {vlog.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {vlog.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {vlog.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {vlog.uploadDate}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
                          <User className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm font-medium">{vlog.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-3">
                      {vlog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gradient-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Career Insights Blog</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <Card key={blog.id} className="glass-card hover-scale group overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-gradient-primary">
                          {blog.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{blog.publishDate}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
                            <User className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm font-medium">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {blog.readTime}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16">
            <Card className="glass-card text-center">
              <CardContent className="p-12">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    Want to Share Your <span className="gradient-text">Success Story</span>?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Help inspire other students by sharing your internship journey, 
                    interview experience, and career tips with our community.
                  </p>
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    Submit Your Story
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

export default Vlogs;