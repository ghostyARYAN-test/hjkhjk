import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Events = () => {
  const events = [
    {
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      description: "Annual technology conference featuring industry leaders and innovative projects.",
    },
    {
      title: "AI Workshop Series",
      date: "March 20, 2024",
      description: "Hands-on workshop on artificial intelligence and machine learning.",
    },
    {
      title: "Research Symposium",
      date: "April 5, 2024",
      description: "Showcase of student and faculty research projects.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary">Upcoming Events</h2>
          <Button variant="outline">
            View All
            <Calendar className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;