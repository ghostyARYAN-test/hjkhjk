import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ITM University</h3>
            <p className="text-gray-400">School of Engineering & Research</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <span>contact@itm.edu</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">Stay updated with our latest news</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
              <Button variant="accent">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ITM University Raipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;