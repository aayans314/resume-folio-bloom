import { Card } from "@/components/ui/card";
import { Users, Trophy } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Leadership = () => {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Leadership & Activities</h2>
            <p className="text-lg text-muted-foreground">
              Building communities and leading technical initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((activity, index) => (
              <Card
                key={activity.id}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    {index === 0 ? (
                      <Users className="h-6 w-6 text-white" />
                    ) : (
                      <Trophy className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{activity.title}</h3>
                    <p className="text-sm text-accent font-medium">{activity.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
