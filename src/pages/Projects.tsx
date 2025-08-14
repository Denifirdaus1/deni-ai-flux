import { useState } from "react";
import { Github, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      name: "AI-Powered E-commerce Platform",
      category: "web",
      techStack: ["React", "TypeScript", "Node.js", "AI/ML"],
      github: "https://github.com",
      preview: "https://demo.com",
      banner: "/api/placeholder/400/250",
      description: "Full-stack e-commerce platform with AI-powered product recommendations and intelligent search functionality.",
      createdAt: "2024-12-01",
      coreFeatures: ["AI Product Recommendations", "Real-time Chat", "Payment Integration", "Analytics Dashboard"]
    },
    {
      id: 2,
      name: "Mobile Food Delivery App",
      category: "mobile",
      techStack: ["React Native", "TypeScript", "Firebase"],
      github: "https://github.com",
      preview: "https://demo.com",
      banner: "/api/placeholder/400/250",
      description: "Cross-platform mobile app for food delivery with real-time tracking and AI-powered menu suggestions.",
      createdAt: "2024-11-15",
      coreFeatures: ["Real-time Tracking", "Push Notifications", "Payment Gateway", "Rating System"]
    }
  ];

  const onProgressProjects = [
    {
      name: "SaaS Analytics Dashboard",
      description: "Advanced analytics platform with AI insights",
      banner: "/api/placeholder/300/200",
      techStack: ["Next.js", "Python", "TensorFlow"],
      lastUpdate: "2024-01-10",
      progress: 75
    }
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-heading mb-6">My Project Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of web and mobile applications built with cutting-edge AI integration
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-center mb-12">
            <div className="glass rounded-2xl p-2 flex gap-2">
              {["All", "Web", "Mobile"].map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "gradient" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="min-w-20"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bento-card cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden">
                  <img 
                    src={project.banner} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">{project.name}</h3>
                <Badge variant="secondary" className="mb-3 capitalize">{project.category}</Badge>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
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
                      <ExternalLink className="w-4 h-4" />
                      Preview
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* On Progress Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold font-heading mb-8">Currently Building</h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {onProgressProjects.map((project, index) => (
                  <div key={index} className="bento-card min-w-[350px]">
                    <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden">
                      <img 
                        src={project.banner} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold font-heading mb-2">{project.name}</h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Last update: {project.lastUpdate}</span>
                      <span className="text-success">{project.progress}% complete</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How I Create Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">How I Create Projects with AI</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: "Planning", description: "AI-assisted requirement analysis and architecture design" },
                  { step: "Design", description: "AI-powered UI/UX design with modern best practices" },
                  { step: "Development", description: "Rapid development using AI code generation and optimization" },
                  { step: "Review", description: "AI-assisted testing and quality assurance" }
                ].map((phase, index) => (
                  <div key={index} className="flex gap-6 items-center">
                    <div className="glass rounded-full w-12 h-12 flex items-center justify-center font-bold text-accent">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold font-heading mb-2">{phase.step}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-bold font-heading mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Let's discuss your idea and bring it to life with AI-powered development
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Start a Project</a>
              </Button>
            </div>
          </section>
        </section>
      </main>

      <Footer />

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading">{selectedProject.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                  <img 
                    src={selectedProject.banner} 
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Project Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-muted-foreground">Created:</span> {selectedProject.createdAt}</p>
                      <p><span className="text-muted-foreground">Category:</span> {selectedProject.category}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech: string) => (
                        <Badge key={tech} variant="outline" className="font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Core Features</h3>
                  <ul className="space-y-1">
                    {selectedProject.coreFeatures.map((feature: string) => (
                      <li key={feature} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="gradient" asChild>
                    <a href={selectedProject.preview} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;