import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Briefcase, Calendar, User, Upload, Edit, Eye, Clock, CheckCircle, Star, AlertCircle } from "lucide-react";

const CandidateDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Amit!</h1>
          <p className="text-muted-foreground">Track your job applications and discover new opportunities</p>
        </div>

        {/* Profile Completion & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profile</p>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                </div>
                <User className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Applications</p>
                  <p className="text-2xl font-bold text-foreground">7</p>
                </div>
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Interviews</p>
                  <p className="text-2xl font-bold text-foreground">2</p>
                </div>
                <Calendar className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Offers</p>
                  <p className="text-2xl font-bold text-foreground">1</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="recommendations">Job Matches</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Application Status</h2>
              <Button variant="outline">View All Applications</Button>
            </div>
            
            <div className="grid gap-4">
              {[
                { 
                  company: "Infosys", 
                  position: "Senior Software Engineer", 
                  location: "Bangalore", 
                  salary: "₹15-20 LPA", 
                  status: "Interview Scheduled",
                  icon: Calendar,
                  statusColor: "text-warning-foreground bg-warning/20"
                },
                { 
                  company: "TCS", 
                  position: "Full Stack Developer", 
                  location: "Pune", 
                  salary: "₹12-18 LPA", 
                  status: "Under Review",
                  icon: Clock,
                  statusColor: "text-primary-foreground bg-primary/20"
                },
                { 
                  company: "Wipro", 
                  position: "React Developer", 
                  location: "Hyderabad", 
                  salary: "₹10-15 LPA", 
                  status: "Shortlisted",
                  icon: Star,
                  statusColor: "text-success-foreground bg-success/20"
                }
              ].map((application, index) => {
                const StatusIcon = application.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-0">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{application.position}</h3>
                          <p className="text-primary font-medium">{application.company}</p>
                          <p className="text-muted-foreground">{application.location} • {application.salary}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${application.statusColor}`}>
                            <StatusIcon className="w-3 h-3" />
                            {application.status}
                          </span>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recommended Jobs (AI Matched)</h2>
              <Button variant="outline">Refine Preferences</Button>
            </div>
            
            <div className="grid gap-4">
              {[
                { 
                  company: "Accenture", 
                  position: "Software Engineer", 
                  location: "Chennai", 
                  salary: "₹8-12 LPA", 
                  match: "95%",
                  skills: ["React", "Node.js", "MongoDB"]
                },
                { 
                  company: "Cognizant", 
                  position: "Frontend Developer", 
                  location: "Bangalore", 
                  salary: "₹10-14 LPA", 
                  match: "92%",
                  skills: ["React", "TypeScript", "CSS"]
                },
                { 
                  company: "HCL", 
                  position: "Full Stack Developer", 
                  location: "Noida", 
                  salary: "₹12-16 LPA", 
                  match: "88%",
                  skills: ["MERN Stack", "AWS", "Docker"]
                }
              ].map((job, index) => (
                <Card key={index} className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{job.position}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                        <p className="text-muted-foreground">{job.location} • {job.salary}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">AI Match</p>
                        <p className="text-lg font-bold text-success">{job.match}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button className="bg-gradient-saffron text-white flex-1">
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        Save
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Profile Management</h2>
              <Button className="bg-gradient-saffron text-white">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><span className="font-medium">Name:</span> Amit Sharma</p>
                    <p><span className="font-medium">Email:</span> amit.sharma@email.com</p>
                    <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
                    <p><span className="font-medium">Location:</span> Delhi, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Resume & Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Resume.pdf</span>
                      <Button variant="outline" size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Update
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <AlertCircle className="w-4 h-4" />
                      Complete your profile to get better job matches
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
            <div className="grid gap-4">
              {[
                { 
                  company: "Infosys", 
                  position: "Senior Software Engineer", 
                  date: "Tomorrow", 
                  time: "10:00 AM",
                  type: "Technical Round",
                  interviewer: "Rajesh Kumar"
                },
                { 
                  company: "TCS", 
                  position: "Full Stack Developer", 
                  date: "Dec 22", 
                  time: "2:00 PM",
                  type: "HR Round",
                  interviewer: "Priya Singh"
                }
              ].map((interview, index) => (
                <Card key={index} className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{interview.position}</h3>
                        <p className="text-primary font-medium">{interview.company}</p>
                        <p className="text-muted-foreground">{interview.type} with {interview.interviewer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{interview.date}</p>
                        <p className="text-muted-foreground">{interview.time}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          Join Meeting
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CandidateDashboard;