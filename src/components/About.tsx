import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep learning with TensorFlow, CNNs, RNNs, and transformers. Passionate about building intelligent systems.",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "React Native, PostgreSQL, REST APIs. Creating seamless cross-platform applications.",
    },
    {
      icon: Rocket,
      title: "System Design",
      description: "From 16-bit CPUs in VHDL to optimized algorithms. Love tackling complex technical challenges.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a Computer Science student at Colby College with a passion for AI, systems programming, and building impactful technology. 
              With a 4.15 GPA and hands-on experience in machine learning, full-stack development, and algorithm optimization, 
              I thrive on solving complex problems and creating innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
