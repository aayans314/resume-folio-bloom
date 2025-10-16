import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full text-accent text-sm font-medium mb-4">
              Available for Internships Summer 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary-foreground">
              Hi, I'm{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium mb-2">
              {personal.title}
            </p>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
              {personal.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="gap-2" onClick={() => scrollToSection("#contact")}>
              <Mail className="h-5 w-5" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="/resume.pdf" download>
                Download Résumé
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
