import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/admissions" className="hover:text-primary">Admissions</a></li>
              <li><a href="/programs" className="hover:text-primary">Programs</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact Us</a></li>
              <li><a href="/departments" className="hover:text-primary">Departments</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <p>ITM University Raipur</p>
            <p>Uparwara, New Raipur</p>
            <p>Chhattisgarh, India</p>
            <p>Phone: +91 XXX XXX XXXX</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Facebook /></a>
              <a href="#" className="hover:text-primary"><Twitter /></a>
              <a href="#" className="hover:text-primary"><Instagram /></a>
              <a href="#" className="hover:text-primary"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p>&copy; {new Date().getFullYear()} School of Engineering & Research, ITM University Raipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;