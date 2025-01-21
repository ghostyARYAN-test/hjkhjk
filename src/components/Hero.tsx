import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2866&q=80')] bg-cover bg-center opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            School of Engineering & Research
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering future innovators through cutting-edge education, research, and technology at ITM University Raipur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;