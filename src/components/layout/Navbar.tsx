import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isActive = (path: string) => location.pathname === path;
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 pt-4">
      <div className={`mx-auto transition-all duration-500 ${isScrolled ? "max-w-md glass shadow-lg" : "max-w-7xl bg-transparent"} rounded-full px-6`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl py-0 px-[21px]">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            Deni Firdaus
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`font-medium transition-colors duration-200 hover:text-accent ${isActive(item.path) ? "text-accent" : "text-foreground"}`}>
                {item.name}
              </Link>)}
            <Button variant="gradient" asChild>
              <Link to="/contact">Hire Me</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden glass rounded-2xl mt-4 p-6 space-y-4">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`block font-medium transition-colors duration-200 hover:text-accent ${isActive(item.path) ? "text-accent" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>)}
            <Button variant="gradient" className="w-full" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Hire Me
              </Link>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navbar;