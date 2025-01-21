import { Button } from "./ui/button";
import { Computer, Users } from "lucide-react";

const FeaturedClub = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Computer className="w-12 h-12" />
              <h2 className="text-3xl font-bold">Technica</h2>
            </div>
            <p className="text-lg">
              The official technical club of ITM University Raipur, fostering innovation and technical excellence among students.
            </p>
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6" />
              <span>500+ Active Members</span>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Join Technica
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Activities
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Technica Club Activities"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClub;