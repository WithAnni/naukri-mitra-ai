import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedQueries = [
  "How do I apply for jobs?",
  "What salary can I expect in Bangalore?",
  "How to improve my resume?",
  "Interview tips for software engineers",
  "How to post a job as recruiter?",
  "Best companies in India"
];

const botResponses: { [key: string]: string } = {
  "how do i apply for jobs": "Namaste! To apply for jobs on NaukriMitra AI: 1) Create your profile with complete details 2) Upload your updated resume 3) Use our AI job matching to find relevant positions 4) Click 'Apply' on jobs that interest you. Our AI will help match you with the best opportunities! 🎯",
  "what salary can i expect": "Salary expectations depend on your experience, location, and skills. For example: Fresh graduates in Bangalore: ₹3-6L, 2-3 years experience: ₹6-12L, Senior (5+ years): ₹12-25L+. Use our salary insights tool for specific role analysis! 💰",
  "how to improve my resume": "Great question! Here are key tips: 1) Use relevant keywords from job descriptions 2) Quantify achievements (increased sales by 30%) 3) Keep it ATS-friendly 4) Include technical skills prominently 5) Use our AI resume builder for optimization. A good resume increases interview calls by 70%! 📄",
  "interview tips": "Excellent! For software engineer interviews: 1) Practice coding problems daily 2) Review system design basics 3) Prepare STAR method answers 4) Research the company's tech stack 5) Use our AI mock interview feature. Remember, confidence + preparation = success! 💪",
  "how to post a job": "As a recruiter on NaukriMitra AI: 1) Go to Recruiter Dashboard 2) Click 'Post New Job' 3) Fill job details (our AI suggests descriptions) 4) Set screening criteria 5) Publish! Our AI will automatically rank and filter candidates for you. Easy hiring! 🚀",
  "best companies": "India has amazing opportunities! Top employers include: Tech - TCS, Infosys, Wipro, Accenture; Product - Flipkart, Zomato, PayTM; MNCs - Google, Microsoft, Amazon. Use our company insights to research culture, packages, and growth opportunities! 🏢",
  "default": "Thank you for reaching out! I'm here to help with job searches, resume tips, interview guidance, and recruitment queries. Could you please be more specific about what you'd like to know? I'm trained to assist with Indian job market insights! 🙏"
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Namaste! I'm your NaukriMitra AI assistant. How can I help you with your career journey today? 🙏",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== "default" && lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const handleSendMessage = (message?: string) => {
    const messageText = message || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Add bot response with delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickQuery = (query: string) => {
    handleSendMessage(query);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="hero"
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl z-50 hover:scale-110"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
      <CardHeader className="bg-gradient-hero text-white rounded-t-lg flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <CardTitle className="text-lg">NaukriMitra AI Assistant</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20"
        >
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot
                    ? "bg-muted text-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  )}
                  {!message.isBot && (
                    <User className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground" />
                  )}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Queries */}
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {predefinedQueries.slice(0, 3).map((query, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-7"
                onClick={() => handleQuickQuery(query)}
              >
                {query}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 border border-input rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button
              onClick={() => handleSendMessage()}
              size="icon"
              className="h-10 w-10"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};