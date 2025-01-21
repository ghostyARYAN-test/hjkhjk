import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-primary font-bold text-xl">
              ITM University
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Programs
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Research
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Student Portal
            </Button>
            <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90">
              Apply Now
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;