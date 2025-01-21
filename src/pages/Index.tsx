import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import FeaturedClub from "@/components/FeaturedClub";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Events />
      <Achievements />
      <Blogs />
      <FeaturedClub />
      <Footer />
    </div>
  );
};

export default Index;