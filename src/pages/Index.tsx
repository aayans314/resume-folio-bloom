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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero has particles only, no background image */}
      <Hero />

      {/* Background image starts after Hero with a subtle translucent overlay */}
      <div
        className="relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-white/15" />
        <div className="relative">
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
