import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, FileText, Calendar, TrendingUp, Plus, Eye, Clock, CheckCircle } from "lucide-react";

const RecruiterDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Recruiter Dashboard</h1>
          <p className="text-muted-foreground">Manage your hiring process efficiently</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Jobs</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Applications</p>
                  <p className="text-2xl font-bold text-foreground">89</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Interviews</p>
                  <p className="text-2xl font-bold text-foreground">7</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hired</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Active Job Postings</h2>
              <Button className="bg-gradient-saffron text-white">
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </Button>
            </div>
            
            <div className="grid gap-4">
              {[
                { title: "Senior Software Engineer", location: "Bangalore", applications: 23, status: "Active" },
                { title: "Data Analyst", location: "Pune", applications: 15, status: "Active" },
                { title: "HR Executive", location: "Hyderabad", applications: 31, status: "Draft" }
              ].map((job, index) => (
                <Card key={index} className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-foreground">{job.title}</h3>
                        <p className="text-muted-foreground">{job.location}</p>
                        <p className="text-sm text-muted-foreground mt-2">{job.applications} applications</p>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${job.status === 'Active' ? 'bg-success/20 text-success-foreground' : 'bg-warning/20 text-warning-foreground'}`}>
                          {job.status}
                        </span>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <h2 className="text-xl font-semibold">Recent Applications</h2>
            <div className="grid gap-4">
              {[
                { name: "Amit Sharma", position: "Senior Software Engineer", score: 92, status: "Shortlisted" },
                { name: "Priya Nair", position: "Data Analyst", score: 88, status: "Under Review" },
                { name: "Rajesh Verma", position: "HR Executive", score: 85, status: "Interview Scheduled" }
              ].map((applicant, index) => (
                <Card key={index} className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-foreground">{applicant.name}</h3>
                        <p className="text-muted-foreground">{applicant.position}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">AI Score</p>
                          <p className="font-bold text-primary">{applicant.score}%</p>
                        </div>
                        <span className="px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm">
                          {applicant.status}
                        </span>
                        <Button variant="outline" size="sm">View Profile</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
            <div className="grid gap-4">
              {[
                { candidate: "Amit Sharma", position: "Senior Software Engineer", date: "Tomorrow", time: "10:00 AM" },
                { candidate: "Priya Nair", position: "Data Analyst", date: "Dec 20", time: "2:00 PM" },
                { candidate: "Rajesh Verma", position: "HR Executive", date: "Dec 22", time: "11:00 AM" }
              ].map((interview, index) => (
                <Card key={index} className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-foreground">{interview.candidate}</h3>
                        <p className="text-muted-foreground">{interview.position}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{interview.date}</p>
                          <p className="font-semibold text-foreground">{interview.time}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold">Hiring Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Time to Hire</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">18 days</p>
                  <p className="text-sm text-muted-foreground">Average across all positions</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-success">78%</p>
                  <p className="text-sm text-muted-foreground">Candidates completing interview process</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecruiterDashboard;