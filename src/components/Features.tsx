import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  FileText, 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  Shield,
  Zap,
  Target
} from "lucide-react";

const candidateFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Job Matching",
    description: "Our smart algorithm analyzes your skills and matches you with perfect job opportunities across India.",
    color: "bg-gradient-hero"
  },
  {
    icon: FileText,
    title: "Resume Builder & Analysis",
    description: "Build ATS-friendly resumes and get AI-powered feedback to improve your profile visibility.",
    color: "bg-gradient-saffron"
  },
  {
    icon: Calendar,
    title: "Interview Preparation",
    description: "Practice with AI mock interviews and get personalized feedback to ace your next interview.",
    color: "bg-gradient-success"
  },
  {
    icon: BarChart3,
    title: "Career Insights",
    description: "Get salary benchmarks, skill gap analysis, and career growth recommendations for your field.",
    color: "bg-primary"
  }
];

const recruiterFeatures = [
  {
    icon: Target,
    title: "Smart Candidate Screening",
    description: "AI ranks candidates based on job requirements, saving 80% of your screening time.",
    color: "bg-gradient-hero"
  },
  {
    icon: MessageSquare,
    title: "Automated Communication",
    description: "Send personalized messages, interview invites, and follow-ups automatically.",
    color: "bg-gradient-saffron"
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "All candidate profiles are verified with Aadhaar and PAN for authentic hiring.",
    color: "bg-gradient-success"
  },
  {
    icon: Zap,
    title: "Quick Hiring Dashboard",
    description: "Manage entire hiring pipeline from posting to onboarding in one unified dashboard.",
    color: "bg-primary"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Empowering India's Workforce with 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> AI Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a job seeker or recruiter, our platform provides intelligent tools 
            to make hiring faster, smarter, and more effective across India.
          </p>
        </div>

        {/* Candidate Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">For Job Seekers</h3>
            <p className="text-lg text-muted-foreground">
              Find your dream job with AI-powered career assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {candidateFeatures.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="lg">
              Register as Job Seeker
            </Button>
          </div>
        </div>

        {/* Recruiter Features */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">For Recruiters</h3>
            <p className="text-lg text-muted-foreground">
              Hire top talent faster with intelligent recruitment tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {recruiterFeatures.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="saffron" size="lg">
              Start Hiring Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};