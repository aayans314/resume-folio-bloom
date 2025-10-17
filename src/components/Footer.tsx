import { Github, Linkedin, Mail, Heart } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/70 backdrop-blur-sm text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold mb-2">{personal.name}</p>
              <p className="text-sm text-white/70">{personal.title}</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <p className="flex items-center justify-center gap-2">
              <span>&copy; {currentYear} {personal.name}. Built with</span>
              <Heart className="h-4 w-4 text-rose-500" fill="currentColor" strokeWidth={0} />
              <span>and React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

