import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket } from "lucide-react";
// Import portrait asset for left column
// Vite will bundle this correctly
// Adjust the relative path if the asset moves
import portrait from "../../assets/aayanFullBody.jpg";

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
    <section id="about" className="py-20 bg-gradient-subtle/0">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[minmax(260px,340px)_1fr] items-start">
            {/* Left: Portrait with smooth bordered rectangle */}
            <div className="mx-auto w-full max-w-sm">
              <div className="relative rounded-2xl p-[6px] bg-gradient-to-br from-white/30 via-white/10 to-transparent border border-white/20 shadow-xl backdrop-blur-[2px]">
                <div className="rounded-xl overflow-hidden bg-black/20">
                  <img
                    src={portrait}
                    alt="Aayan Shah portrait"
                    className="block w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right: About text and highlights */}
            <div>
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-muted-foreground max-w-2xl md:max-w-3xl">
                  I'm a Computer Science student at Colby College with a passion for AI, systems programming, and building impactful technology. With a 4.15 GPA and hands-on experience in machine learning, full-stack development, and algorithm optimization, I thrive on solving complex problems and creating innovative solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-background/80 backdrop-blur-sm"
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
        </div>
      </div>
    </section>
  );
};

export default About;
