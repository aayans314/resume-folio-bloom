import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  // Typing effect inspired by the sample hero
  const texts = ["Life Long Learner", "Undergrad Student"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        const next = current.substring(0, currentText.length - 1);
        setCurrentText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((idx) => (idx + 1) % texts.length);
        }
      } else {
        const next = current.substring(0, currentText.length + 1);
        setCurrentText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
    setIsDeleting(false);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full text-accent text-sm font-medium mb-4">
              Available for Internships Summer 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-2">
              {personal.title}
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {personal.tagline}
            </p>
            <div className="text-2xl md:text-3xl font-semibold text-white mt-4 h-12 flex items-center justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">
              <span>
                {currentText}
                <span className="opacity-80">|</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="gap-2" onClick={() => scrollToSection("#contact")}>
              <Mail className="h-5 w-5" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent border-white/30 text-white hover:bg-white/10" asChild>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </motion.div>

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
