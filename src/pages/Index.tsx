import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import {
  Brain,
  Target,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Globe,
  ChevronRight,
  Star,
  Rocket,
  Award,
  BookOpen,
} from "lucide-react";
import heroBg from "@/assets/ai-education-hero.jpg";
import processFlow from "@/assets/process-flow.jpg";
import skillAssessment from "@/assets/skill-assessment.jpg";
import ChatBot from "@/components/ChatBot";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Skill Matching",
      description:
        "AI analyzes your strengths and instantly recommends internships that fit your goals.",
    },
    {
      icon: Target,
      title: "Personalized Career Roadmaps",
      description:
        "Follow step-by-step learning paths tailored to your dream roles and companies.",
    },
    {
      icon: Users,
      title: "Peer Insights & Reviews",
      description:
        "Learn from real interns. Get honest reviews, insider advice, and proven strategies.",
    },
    {
      icon: Rocket,
      title: "Accelerated Growth",
      description:
        "Build technical and soft skills faster with curated resources and project-based learning.",
    },
    {
      icon: Award,
      title: "Government Verified",
      description:
        "Direct access to opportunities under the PM Internship Scheme — 100% trusted.",
    },
    {
      icon: BookOpen,
      title: "Dream Job Blueprints",
      description:
        "Step-by-step preparation for internships at Google, Microsoft, ISRO, TCS, and more.",
    },
  ];

  const steps = [
    {
      step: "01",
      icon: Brain,
      title: "Discover Your Strengths",
      description:
        "Take a 20-minute AI test that uncovers your true skills, interests, and potential.",
    },
    {
      step: "02",
      icon: Target,
      title: "Get Matched Instantly",
      description:
        "Our AI compares your profile with 500+ companies and finds the perfect internships for you.",
    },
    {
      step: "03",
      icon: BookOpen,
      title: "Follow Your Roadmap",
      description:
        "Receive a tailored learning plan with projects, interview prep, and company-specific tips.",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Land Your Internship",
      description:
        "Apply with AI-optimized resumes, ace interviews with live coaching, and secure your offer.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineering Intern",
      company: "Google",
      content:
        "Before SkillSync, I was lost in endless applications. The AI roadmap gave me focus, and I landed Google's internship on my very first try!",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Data Science Intern",
      company: "Microsoft",
      content:
        "SkillSync identified my skill gaps and guided me with resources. I followed the roadmap, and now I’m interning at Microsoft!",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "Research Intern",
      company: "ISRO",
      content:
        "The government-verified opportunities gave me trust. Thanks to SkillSync, I’m now working with ISRO on real space research.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "10K+", label: "Students Placed" },
    { number: "500+", label: "Partner Companies" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "AI Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-card border border-primary/30 mb-8 animate-pulse-glow">
              <Sparkles className="h-5 w-5 mr-3 text-primary animate-pulse" />
              <span className="text-sm font-semibold gradient-text">
                🚀 SIH Prototype • PM Internship Integration
              </span>
            </div>

            <h1 className="text-6xl md:text-6xl lg:text-6xl font-bold mb-8 animate-fade-in leading-tight">
              Unlock <span className="gradient-text">Your Future</span> with
              AI-Powered Internships
            </h1>
            <p className="text-xl md:text-xl lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
              SkillSync bridges students with verified internships from the PM
              Internship Scheme and top global companies. AI guides your journey
              from assessment to dream job.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-effect group px-8 py-4 text-lg"
                >
                  <Brain className="h-6 w-6 mr-3" />
                  {t("takeAssessment")}
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/40 hover:bg-primary/10 transition-all duration-300 px-8 py-4 text-lg glass-card"
                >
                  <Target className="h-6 w-6 mr-3" />
                  {t("viewDashboard")}
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Government Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Pan-India Network</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">AI-Powered Matching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-6">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">
                Simple 4-Step Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">SkillSync</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From assessment to placement - your journey to the perfect
              internship in 4 simple steps
            </p>
          </div>

          {/* Visual Process Flow */}
          <div className="mb-16 relative">
            <div className="glass-card rounded-3xl overflow-hidden">
              <img
                src={processFlow}
                alt="SkillSync Process Flow"
                className="w-full h-64 md:h-80 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                    AI-Powered Journey
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Assessment → Matching → Learning → Success
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Left side - Process Steps */}
            <div className="space-y-8">
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-6 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center group hover:glow-effect transition-all duration-300">
                        <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-primary rounded-full flex items-center justify-center text-xs font-bold text-white">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                stat: "98%",
                label: "Interview Success Rate",
                desc: "Students who complete our roadmap",
              },
              {
                icon: Users,
                stat: "15K+",
                label: "Students Guided",
                desc: "Across 100+ universities",
              },
              {
                icon: Award,
                stat: "500+",
                label: "Company Partners",
                desc: "Including Fortune 500 companies",
              },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="text-center glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {metric.stat}
                  </div>
                  <div className="font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {metric.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-6">
              <Star className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">
                Why Choose SkillSync?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Students with AI-Powered Career Guidance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We match your skills with verified internships, guide your
              learning journey, and help you land your dream job faster and
              smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="glass-card hover:glow-effect transition-all duration-300 animate-fade-in group h-full border-border/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors w-fit">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:gradient-text transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Success Metrics */}
          <div className="text-center">
            <div className="inline-block glass-card px-8 py-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold gradient-text">98%</div>
                    <div className="text-sm text-muted-foreground">
                      Interview Success
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border"></div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold gradient-text">10K+</div>
                    <div className="text-sm text-muted-foreground">
                      Happy Students
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border"></div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold gradient-text">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Partner Companies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by{" "}
              <span className="gradient-text">Top Organizations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Official integration with Government schemes and partnerships with
              leading companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card p-8 text-center hover:glow-effect transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                PM Internship Scheme
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Direct integration with the Prime Minister's Internship Scheme,
                providing verified opportunities with government backing and
                quality assurance.
              </p>
            </Card>

            <Card className="glass-card p-8 text-center hover:glow-effect transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                SIH 2025 Prototype
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Developed as an innovative prototype for Smart India Hackathon
                2025, demonstrating cutting-edge technology in education and
                career development.
              </p>
            </Card>
          </div>

          {/* Company Logos Placeholder */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-8">
              Partnered with leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {[
                "Google",
                "Microsoft",
                "ISRO",
                "TCS",
                "Infosys",
                "Wipro",
                "Amazon",
                "Meta",
              ].map((company, index) => (
                <div
                  key={index}
                  className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real students, real results. See how SkillSync has transformed
              careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineering Intern",
                company: "Google",
                content:
                  "SkillSync's AI assessment perfectly matched me with Google's internship program. The roadmap and interview prep were game-changers!",
                rating: 5,
              },
              {
                name: "Arjun Patel",
                role: "Data Science Intern",
                company: "Microsoft",
                content:
                  "From skill gap identification to landing my dream internship at Microsoft - SkillSync guided me through every step.",
                rating: 5,
              },
              {
                name: "Sneha Reddy",
                role: "Research Intern",
                company: "ISRO",
                content:
                  "The PM Internship Scheme integration made it so easy to find verified opportunities. Now I'm working on space missions!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="glass-card p-8 hover:glow-effect transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-primary fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary/5" />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card border border-primary/30 mb-8 animate-pulse-glow">
            <Zap className="h-5 w-5 mr-3 text-primary animate-pulse" />
            <span className="text-sm font-semibold gradient-text">
              🚀 Start Your Success Journey Today
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Take the First Step Toward Your{" "}
            <span className="gradient-text">Dream Career</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Don’t just apply randomly. Let AI guide you to verified internships,
            trusted by the Government and partnered with global companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/quiz">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-effect group px-8 py-4 text-lg"
              >
                <Brain className="h-6 w-6 mr-3" />
                Start AI Assessment
                <ChevronRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/roadmap">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 hover:bg-primary/10 transition-all duration-300 px-8 py-4 text-lg glass-card"
              >
                <Star className="h-6 w-6 mr-3" />
                View Roadmaps
              </Button>
            </Link>
          </div>

          {/* Additional CTA Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span>10,000+ Students Placed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Government Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-primary" />
              <span>98% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">
                  SkillSync
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Revolutionizing career development with AI-powered internship
                matching, integrated with government schemes for verified
                opportunities.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    SIH 2025 Prototype
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Government Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">
                Quick Links
              </h4>
              <div className="space-y-3">
                {["Dashboard", "Quiz", "Roadmap", "Recommendations"].map(
                  (item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <div className="space-y-3">
                <Link
                  to="/vlogs"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Career Vlogs
                </Link>
                <Link
                  to="/interview-prep"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Interview Prep
                </Link>
                <div className="text-muted-foreground">24/7 AI Support</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                © 2025 SkillSync — Where AI Meets Career Dreams. <br />
                Built for Smart India Hackathon • Integrated with PM Internship
                Scheme
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-sm text-muted-foreground">
                  Powered by AI
                </span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">
                  Made in India 🇮🇳
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
