import { Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Programs = () => {
  const undergradPrograms = [
    {
      name: "B.Tech in Computer Science",
      description: "Focus on software development, algorithms, and computer systems",
      specializations: ["AI & ML", "Data Science", "Cloud Computing"],
      curriculum: "/path/to/cs-curriculum.pdf"
    },
    {
      name: "B.Tech in Electronics",
      description: "Study of electronic systems, circuits, and communication",
      specializations: ["IoT", "VLSI", "Embedded Systems"],
      curriculum: "/path/to/ec-curriculum.pdf"
    },
    {
      name: "B.Tech in Mechanical",
      description: "Engineering principles of mechanics, design, and manufacturing",
      specializations: ["Robotics", "CAD/CAM", "Industrial Automation"],
      curriculum: "/path/to/me-curriculum.pdf"
    }
  ];

  const postgradPrograms = [
    {
      name: "M.Tech in Computer Science",
      description: "Advanced studies in computing with research opportunities",
      specializations: ["AI & ML", "Data Analytics", "Cybersecurity"],
      curriculum: "/path/to/mtech-cs-curriculum.pdf"
    },
    {
      name: "M.Tech in Digital Communication",
      description: "Advanced communication systems and signal processing",
      specializations: ["5G Networks", "Digital Signal Processing"],
      curriculum: "/path/to/mtech-dc-curriculum.pdf"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Programs and Curriculum</h1>

        {/* Undergraduate Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Undergraduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {undergradPrograms.map((program) => (
              <Card key={program.name} className="h-full">
                <CardHeader>
                  <CardTitle>{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Specializations:</h4>
                    <ul className="list-disc list-inside">
                      {program.specializations.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Curriculum
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Postgraduate Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Postgraduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postgradPrograms.map((program) => (
              <Card key={program.name} className="h-full">
                <CardHeader>
                  <CardTitle>{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Specializations:</h4>
                    <ul className="list-disc list-inside">
                      {program.specializations.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Curriculum
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emerging Technologies Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Emerging Technologies Focus</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Artificial Intelligence & ML</h3>
                  <p>Deep learning, neural networks, and machine learning applications</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                  <p>Big data analytics, statistical modeling, and data visualization</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Internet of Things</h3>
                  <p>Connected devices, sensor networks, and smart systems</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;