import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work in AI, systems programming, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                </div>

                <p className="text-foreground mb-4">{project.description}</p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {Object.entries(project.links).map(([key, url]) => (
                    <Button
                      key={key}
                      size="sm"
                      variant="outline"
                      className="gap-2"
                      asChild
                    >
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {key === "github" ? (
                          <>
                            <Github className="h-4 w-4" />
                            GitHub
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-4 w-4" />
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </>
                        )}
                      </a>
                    </Button>
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

export default Projects;
