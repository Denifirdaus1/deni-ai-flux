import { useState } from "react";
import { Code, Smartphone, Brain, Github, Linkedin, Mail, Download, Zap, Users, Trophy, Clock, Star, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Rocket, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesList from "@/components/ServicesList";
import SolarSystem from "@/components/SolarSystem";
import Cubes from "@/components/Cubes";
import heroImage from "@/assets/hero-bg.jpg";
import aiPattern from "@/assets/ai-pattern.jpg";
const Index = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const techStack = ["React", "TypeScript", "Node.js", "Python", "React Native", "Next.js", "AI/ML", "TensorFlow", "Firebase", "PostgreSQL", "MongoDB", "AWS"];
  const services = [{
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks and AI integration",
    features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development"]
  }, {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance and AI features",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"]
  }, {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent features powered by machine learning and modern AI tools",
    features: ["ML Models", "AI Automation", "Smart Analytics", "Chatbots"]
  }];
  const whyChooseMe = [{
    title: "AI-Powered Development",
    description: "Leverage cutting-edge AI tools to deliver projects 50% faster with higher quality code",
    icon: Sparkles
  }, {
    title: "Full-Stack Expertise",
    description: "Complete solution from database design to user interface with seamless integration",
    icon: Rocket
  }, {
    title: "Proven Results",
    description: "Successfully delivered 50+ projects with 98% client satisfaction rate",
    icon: Trophy
  }, {
    title: "On-Time Delivery",
    description: "Consistent track record of meeting deadlines without compromising quality",
    icon: Clock
  }];
  const capabilities = [{
    title: "Fast Code with AI",
    description: "Generate production-ready code 3x faster using advanced AI assistance",
    gridSize: "md:col-span-2"
  }, {
    title: "AI Workflows",
    description: "Automated testing, deployment, and optimization",
    gridSize: "md:col-span-1"
  }, {
    title: "The AI I Use",
    description: "ChatGPT, GitHub Copilot, Claude, and custom ML models",
    gridSize: "md:col-span-1"
  }, {
    title: "Full-Stack Development",
    description: "End-to-end solutions from concept to deployment",
    gridSize: "md:col-span-2"
  }, {
    title: "50+ Projects",
    description: "Successfully completed and deployed",
    gridSize: "md:col-span-1"
  }];
  const pricing = [{
    name: "Basic",
    price: "$80",
    duration: "1-2 weeks",
    features: ["Landing Page or Simple App", "Responsive Design", "Basic AI Features", "Email Support", "Source Code Included"],
    popular: false
  }, {
    name: "Standard",
    price: "$150",
    duration: "2-3 weeks",
    features: ["Full Web/Mobile Application", "Database Integration", "Advanced AI Features", "Admin Dashboard", "Priority Support", "1 Month Free Updates"],
    popular: true
  }, {
    name: "Express",
    price: "$200",
    duration: "1 week",
    features: ["Rush Delivery (50% faster)", "Premium AI Integration", "Real-time Features", "Advanced Analytics", "24/7 Support", "3 Months Free Updates"],
    popular: false
  }];
  const projects = [{
    name: "AI E-commerce Platform",
    category: "Web",
    techStack: ["React", "Node.js", "AI/ML"],
    github: "https://github.com",
    preview: "https://demo.com",
    image: aiPattern
  }, {
    name: "Smart Food Delivery App",
    category: "Mobile",
    techStack: ["React Native", "Firebase"],
    github: "https://github.com",
    preview: "https://demo.com",
    image: aiPattern
  }, {
    name: "SaaS Analytics Dashboard",
    category: "Web",
    techStack: ["Next.js", "PostgreSQL"],
    github: "https://github.com",
    preview: "https://demo.com",
    image: aiPattern
  }];
  const reviews = [{
    name: "Sarah Johnson",
    role: "Startup Founder",
    review: "Deni delivered our MVP in record time with impressive AI features. The quality exceeded our expectations!",
    rating: 5,
    avatar: "/api/placeholder/40/40"
  }, {
    name: "Mike Chen",
    role: "Product Manager",
    review: "Professional, reliable, and incredibly skilled. The AI integration was seamless and boosted our user engagement by 40%.",
    rating: 5,
    avatar: "/api/placeholder/40/40"
  }, {
    name: "Lisa Rodriguez",
    role: "E-commerce Owner",
    review: "Outstanding work on our mobile app. The AI-powered recommendations increased our sales significantly.",
    rating: 5,
    avatar: "/api/placeholder/40/40"
  }];
  const nextReview = () => {
    setCurrentReview(prev => (prev + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrentReview(prev => (prev - 1 + reviews.length) % reviews.length);
  };
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 px-[57px]">
              <div>
                <h1 className="text-5xl font-bold font-heading mb-6 leading-tight my-[50px] text-left md:text-5xl mx-[23px]">
                  Hi, I'm <span className="text-transparent bg-gradient-primary bg-clip-text">Deni Firdaus</span>
                  <br />Software Developer
                </h1>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg mx-[23px]">
                  Building Web & Mobile Applications with AI-Powered Speed and Quality. 
                  Transform your ideas into powerful digital solutions that users love.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mx-[23px]">
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" className="hover-glow" asChild>
                    <a href="https://github.com/denifirdaus" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover-glow" asChild>
                    <a href="https://linkedin.com/in/denifirdaus" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover-glow" asChild>
                    <a href="mailto:deni@example.com">
                      <Mail className="w-6 h-6" />
                    </a>
                  </Button>
                </div>
                
                <Button variant="hero" size="lg" asChild>
                  <a href="/contact" className="mx-[10px]">
                    Hire Me
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative flex justify-center">
                <SolarSystem />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Scroll */}
      <section className="border-t border-white/10 py-[22px]">
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-[scroll_30s_linear_infinite]">
            {[...techStack, ...techStack].map((tech, index) => <Badge key={index} variant="outline" className="whitespace-nowrap font-mono">
                {tech}
              </Badge>)}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-[51px]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold font-heading mb-12 text-5xl">What I Do ?</h2>
              <ServicesList services={services} />
            </div>
            <div className="flex justify-center items-center h-full">
              <div className="w-80 h-80">
                <Cubes 
                  gridSize={8}
                  maxAngle={60}
                  radius={4}
                  borderStyle="2px dashed hsl(var(--primary))"
                  faceColor="hsl(var(--card))"
                  rippleColor="hsl(var(--accent))"
                  rippleSpeed={1.5}
                  autoAnimate={true}
                  rippleOnClick={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold font-heading mb-6 text-5xl">Why Clients Choose Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering exceptional results through expertise and innovation
            </p>
          </div>

          <div className="bento-grid">
            {whyChooseMe.map((item, index) => <div key={index} className="bento-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* My Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-6">My Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by cutting-edge AI tools and proven development expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => <div key={index} className={`bento-card ${capability.gridSize}`}>
                <h3 className="text-lg font-semibold font-heading mb-3">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading mb-6 font-bold text-5xl">Pricing Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for every project size. Prices may vary based on complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => <div key={index} className={`glass rounded-3xl p-8 relative ${plan.popular ? 'ring-2 ring-accent' : ''}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">starting</span>
                  </div>
                  <p className="text-muted-foreground">{plan.duration}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>)}
                </ul>
                <Button variant={plan.popular ? "gradient" : "outline"} className="w-full" asChild>
                  <a href="/contact">Get Started</a>
                </Button>
              </div>)}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="font-bold font-heading mb-4 text-5xl">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">Recent work showcasing AI-powered solutions</p>
            </div>
            <Button variant="outline" asChild>
              <a href="/projects">View All Projects</a>
            </Button>
          </div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{
            width: 'max-content'
          }}>
              {projects.map((project, index) => <div key={index} className="bento-card min-w-[180px] group">
                  <div className="aspect-[4/3] bg-muted rounded-xl mb-4 overflow-hidden">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-2">{project.name}</h3>
                  <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => <Badge key={tech} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>)}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="gradient" size="sm" asChild>
                      <a href={project.preview} target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="w-4 h-4" />
                        Preview
                      </a>
                    </Button>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-6">Client Reviews</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 relative">
              <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={prevReview}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="text-center px-16">
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <blockquote className="text-lg mb-6 text-muted-foreground italic">
                  "{reviews[currentReview].review}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img src={reviews[currentReview].avatar} alt={reviews[currentReview].name} className="w-12 h-12 rounded-full" />
                  <div className="text-left">
                    <div className="font-semibold">{reviews[currentReview].name}</div>
                    <div className="text-muted-foreground text-sm">{reviews[currentReview].role}</div>
                  </div>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={nextReview}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-colors ${index === currentReview ? 'bg-accent' : 'bg-muted'}`} onClick={() => setCurrentReview(index)} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass rounded-3xl p-16 text-center">
            <h2 className="text-4xl font-bold font-heading mb-6">
              Available for Projects — Let's Create Your Web or Application with AI
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your idea into a powerful digital solution? Let's discuss your project.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/contact">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Resume Modal */}
      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="glass max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading">Download Resume</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">Choose your preferred format:</p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="#" download>
                  <Download className="w-4 h-4" />
                  Resume.pdf
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="#" download>
                  <Download className="w-4 h-4" />
                  Resume.docx
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="#" download>
                  <Download className="w-4 h-4" />
                  Resume.jpg
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default Index;