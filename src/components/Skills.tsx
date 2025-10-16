import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Wrench } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.languages,
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: skills.frameworks,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: skills.tools,
      color: "bg-secondary/10 text-secondary-foreground",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
