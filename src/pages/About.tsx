import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const facultyMembers = [
    {
      name: "Dr. John Doe",
      role: "Head of Department",
      expertise: "Artificial Intelligence & Machine Learning",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    {
      name: "Dr. Jane Smith",
      role: "Professor",
      expertise: "Computer Networks & Security",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "Dr. Robert Wilson",
      role: "Associate Professor",
      expertise: "Data Science & Analytics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  ];

  const accreditations = [
    {
      name: "NAAC A+ Grade",
      description: "National Assessment and Accreditation Council"
    },
    {
      name: "NBA Accredited",
      description: "National Board of Accreditation for Engineering Programs"
    },
    {
      name: "UGC Approved",
      description: "University Grants Commission Recognition"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Department Overview */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">About School of Engineering & Research</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Vision</h2>
            <p className="text-muted-foreground mb-6">
              To be a globally recognized institution in engineering education, research, and innovation,
              nurturing skilled professionals with strong ethical values.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide quality education through innovative teaching methods</li>
              <li>Foster research and development in emerging technologies</li>
              <li>Promote industry collaboration and entrepreneurship</li>
              <li>Develop socially responsible engineering professionals</li>
            </ul>
          </div>
          <div className="relative h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
              alt="ITM University Campus"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* HOD's Message */}
      <section className="mb-16 bg-secondary p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={facultyMembers[0].image}
            alt="HOD"
            className="w-48 h-48 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Message from the Head of Department</h2>
            <p className="text-muted-foreground italic mb-4">
              "Our department strives to create an environment that fosters innovation, research, and
              academic excellence. We are committed to preparing our students for the challenges of
              tomorrow through cutting-edge curriculum and practical exposure."
            </p>
            <p className="font-semibold">- Dr. John Doe</p>
            <p className="text-muted-foreground">Head of Department</p>
          </div>
        </div>
      </section>

      {/* Faculty Information */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Our Faculty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {facultyMembers.map((faculty) => (
            <Card key={faculty.name}>
              <CardHeader>
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg">{faculty.name}</h3>
                <p className="text-primary">{faculty.role}</p>
                <p className="text-muted-foreground">{faculty.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">Accreditations & Collaborations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {accreditations.map((accreditation) => (
            <Card key={accreditation.name}>
              <CardHeader>
                <CardTitle>{accreditation.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{accreditation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;