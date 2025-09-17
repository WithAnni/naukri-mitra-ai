import { Button } from "@/components/ui/button";
import { Bell, User, Search, Menu } from "lucide-react";

interface HeaderProps {
  userType?: 'candidate' | 'recruiter' | null;
  userName?: string;
}

export const Header = ({ userType, userName }: HeaderProps) => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NM</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            NaukriMitra AI
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#jobs" className="text-foreground hover:text-primary transition-colors">
            Find Jobs
          </a>
          <a href="#companies" className="text-foreground hover:text-primary transition-colors">
            Companies
          </a>
          <a href="#resources" className="text-foreground hover:text-primary transition-colors">
            Resources
          </a>
          <a href="#salary" className="text-foreground hover:text-primary transition-colors">
            Salary Insights
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          {userType ? (
            <>
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{userName || 'Profile'}</span>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost">Login</Button>
              <Button variant="hero">Register</Button>
            </>
          )}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};