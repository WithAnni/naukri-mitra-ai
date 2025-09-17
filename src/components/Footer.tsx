import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Heart
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-saffron rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NM</span>
              </div>
              <h3 className="text-xl font-bold">NaukriMitra AI</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              India's leading AI-powered recruitment platform connecting talent with opportunities across the nation.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">For Job Seekers</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Search Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salary Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interview Prep</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skill Assessment</a></li>
            </ul>
          </div>

          {/* For Recruiters */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">For Recruiters</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Search Resumes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ATS Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recruitment Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Employer Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bulk Hiring</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Cyber City, Gurgaon, Haryana 122002</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@naukrimitra.ai</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-2">
              <h5 className="font-medium">Stay Updated</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-white/30"
                />
                <Button variant="saffron" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Help Center</a>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-white/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>in India © 2024 NaukriMitra AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};