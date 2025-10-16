import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Experience = () => {
  const { experience } = portfolioData;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-accent/10 text-accent border-accent/20";
      case "teaching":
        return "bg-primary/10 text-primary border-primary/20";
      case "technical":
        return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      default:
        return "bg-muted";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card
                key={job.id}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Briefcase className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <p className="text-lg text-muted-foreground">{job.organization}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {job.period}
                    </div>
                    <Badge className={getTypeColor(job.type)}>
                      {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1.5">•</span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
