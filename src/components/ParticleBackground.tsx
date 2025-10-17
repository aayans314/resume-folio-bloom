import React, { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number; // px
  speedX: number;
  speedY: number;
  originalSpeedX: number;
  originalSpeedY: number;
  opacity: number;
  color: string;
  trail: number; // px
};

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mousePos = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const vw = window.innerWidth || 1;
      const vh = window.innerHeight || 1;
      mousePos.current = {
        x: (e.clientX / vw) * 100,
        y: (e.clientY / vh) * 100,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const createParticle = (id: number): Particle => {
      const speedX = Math.random() * 1.5 + 0.8;
      const speedY = -(Math.random() * 1.5 + 0.8);

      return {
        id,
        // Spawn slightly offscreen near the bottom to drift upward-right
        x: Math.random() * 120 - 10, // -10%..110%
        y: Math.random() * 120-10, // 100%..130%
        size: Math.random() * 20 + 3,
        speedX,
        speedY,
        originalSpeedX: speedX,
        originalSpeedY: speedY,
        opacity: Math.random() * 0.7 + 0.2,
        // Near-white particles for a cleaner, subtle look
        color: `hsl(${Math.floor(Math.random() * 30) + 210}, 100%, ${Math.floor(Math.random() * 101)}%)`,
        trail: Math.random() * 10,
      };
    };

    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) =>
      createParticle(i)
    );
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newSpeedX = particle.speedX;
          let newSpeedY = particle.speedY;

          const dx = mousePos.current.x - particle.x;
          const dy = mousePos.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 25 && mousePos.current.x > -100) {
            const forceStrength = Math.max(0, (25 - distance) / 25) * 0.3;
            const forceX = -(dx / distance) * forceStrength;
            const forceY = -(dy / distance) * forceStrength;

            newSpeedX += forceX;
            newSpeedY += forceY;

            newSpeedX = newSpeedX * 0.95 + particle.originalSpeedX * 0.05;
            newSpeedY = newSpeedY * 0.95 + particle.originalSpeedY * 0.05;
          } else {
            newSpeedX = newSpeedX * 0.98 + particle.originalSpeedX * 0.02;
            newSpeedY = newSpeedY * 0.98 + particle.originalSpeedY * 0.02;
          }

          const newX = particle.x + newSpeedX;
          const newY = particle.y + newSpeedY;

          if (newX > 120 || newY < -20 || newX < -20 || newY > 140) {
            return createParticle(particle.id);
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
          };
        })
      );
    };

    const interval = window.setInterval(animateParticles, 30);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[5]"
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            }}
          />
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              width: `${particle.trail}px`,
              height: "2px",
              background: `linear-gradient(to left, ${particle.color}, transparent)`,
              transform: `translate(-50%, -50%) rotate(${(Math.atan2(
                -particle.speedY,
                -particle.speedX
              ) * 180) / Math.PI}deg)`,
              transformOrigin: "center",
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
    </div>
  );
};

export default ParticleBackground;
