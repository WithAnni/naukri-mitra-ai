import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-recruitment.jpg";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-secondary/50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-card opacity-50"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-saffron rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-hero rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Dream
                <span className="bg-gradient-hero bg-clip-text text-transparent block">
                  Career in India
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join millions of professionals discovering opportunities with India's smartest 
                AI-powered recruitment platform. From freshers to experts, we connect talent with the right opportunities.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Job title, skills, or company..."
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Delhi, Mumbai, Bangalore..."
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <Button variant="hero" size="lg" className="px-8">
                  <Search className="w-4 h-4 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1 sm:flex-none">
                Register as Candidate
              </Button>
              <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                Post a Job
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-lg mb-2 mx-auto">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Active Jobs</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-saffron rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-foreground">2M+</p>
                <p className="text-sm text-muted-foreground">Registered Users</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-success rounded-lg mb-2 mx-auto">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-foreground">85%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Indian professionals working together"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Smart Matching</p>
                  <p className="text-xs text-muted-foreground">95% accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-card">
              <div className="text-center">
                <p className="text-2xl font-bold text-success">₹12.5L</p>
                <p className="text-xs text-muted-foreground">Avg. Package</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};