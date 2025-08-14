import { Github, Linkedin, Mail, Heart, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Social */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Deni Firdaus</h3>
            <p className="text-muted-foreground mb-6">
              Software Developer specializing in AI-powered web and mobile applications
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/denifirdaus" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/denifirdaus" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:deni@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Resume
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-4">Built With</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>React & TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Styled with Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Deployed on Lovable</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Deni Firdaus. All rights reserved. Built with passion and AI assistance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;