import { Award, Star, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "Best Engineering College",
    description: "Awarded as the Best Engineering College in Central India 2023",
    link: "#"
  },
  {
    icon: Star,
    title: "Research Excellence",
    description: "Over 200+ research papers published in international journals",
    link: "#"
  },
  {
    icon: Award,
    title: "Student Innovations",
    description: "15+ patents filed by our students in the last academic year",
    link: "#"
  }
];

const Achievements = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon className="w-12 h-12 mx-auto text-accent mb-4" />
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;