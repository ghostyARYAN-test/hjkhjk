import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const blogs = [
  {
    title: "Advancing AI Research",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    description: "Exploring the latest developments in artificial intelligence and machine learning at ITM University.",
    link: "#"
  },
  {
    title: "Innovation in IoT",
    author: "Prof. Robert Smith",
    date: "March 10, 2024",
    description: "How our students are pushing the boundaries of IoT technology with innovative projects.",
    link: "#"
  },
  {
    title: "Future of Engineering",
    author: "Dr. Michael Brown",
    date: "March 5, 2024",
    description: "Insights into the evolving landscape of engineering education and career opportunities.",
    link: "#"
  }
];

const Blogs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{blog.title}</CardTitle>
                <CardDescription>
                  By {blog.author} | {blog.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{blog.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;