import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import bgImage from "../../assets/hdbgg.jpg";
import ParticleBackground from "@/components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      <ParticleBackground />
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link to="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
