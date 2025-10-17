import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import bgImage from "../../assets/hdbgg.jpg";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero has particles only, no background image */}
      <Hero />

      {/* Background after Hero: dark, focused tone over image */}
      <div
        className="relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Darken image for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
        {/* Particles over image, under content */}
        <ParticleBackground />
        <div className="relative z-10">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Leadership />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
