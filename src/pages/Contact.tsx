import { useState } from "react";
import { Mail, MessageCircle, Linkedin, Clock, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    deadline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "", budget: "", deadline: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const faqItems = [
    {
      question: "What's your starting price?",
      answer: "Projects start from $80 for basic web solutions, $150 for standard applications, and $200 for express delivery with premium features."
    },
    {
      question: "How long does it take?",
      answer: "Typical projects take 1-4 weeks depending on complexity. Express delivery available for urgent projects with 50% faster turnaround."
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept bank transfers, PayPal, and cryptocurrency. 50% upfront, 50% on completion. Payment plans available for larger projects."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-heading mb-6">
              Got a Project in Mind? Let's Build It Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Available for Projects — Tell me about your idea and let's create something amazing with AI-powered development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-heading mb-6">Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                      className="glass border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="glass border-white/10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="glass border-white/10">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="glass">
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="over-5000">Over $5,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Deadline</label>
                    <Select value={formData.deadline} onValueChange={(value) => handleInputChange("deadline", value)}>
                      <SelectTrigger className="glass border-white/10">
                        <SelectValue placeholder="Select deadline" />
                      </SelectTrigger>
                      <SelectContent className="glass">
                        <SelectItem value="1-week">Within 1 week</SelectItem>
                        <SelectItem value="2-weeks">2-3 weeks</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project idea, requirements, and any specific features you need..."
                    rows={6}
                    required
                    className="glass border-white/10 resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Contact & FAQ */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold font-heading mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <Button variant="gradient" size="lg" className="w-full justify-start" asChild>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="https://linkedin.com/in/denifirdaus" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn Message
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="mailto:deni@example.com">
                      <Mail className="w-5 h-5" />
                      Email Direct
                    </a>
                  </Button>
                </div>
              </div>

              {/* Mini FAQ */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold font-heading mb-6">Frequently Asked</h3>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-3 mb-2">
                        {index === 0 && <DollarSign className="w-5 h-5 text-accent mt-0.5" />}
                        {index === 1 && <Clock className="w-5 h-5 text-accent mt-0.5" />}
                        {index === 2 && <Calendar className="w-5 h-5 text-accent mt-0.5" />}
                        <h4 className="font-semibold">{item.question}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm ml-8">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="glass rounded-3xl p-6 text-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 2-4 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;