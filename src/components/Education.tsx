import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{education.school}</h3>
                <p className="text-lg text-muted-foreground mb-2">{education.location}</p>
                <p className="text-foreground font-medium mb-1">{education.degree}</p>
                <p className="text-sm text-muted-foreground mb-3">Expected Graduation: {education.graduationDate}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-1">Major: <span className="font-normal">{education.major}</span></p>
                  <p className="text-sm font-semibold mb-1">Minor: <span className="font-normal">{education.minor}</span></p>
                  <p className="text-sm font-semibold">GPA: <span className="font-normal text-accent">{education.gpa}</span></p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-accent" />
                  <h4 className="font-semibold text-lg">Awards & Honors</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.awards.map((award, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {award}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <h4 className="font-semibold text-lg">Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
