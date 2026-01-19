import React from 'react';
import { motion } from 'framer-motion';

export const Background: React.FC = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 5,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-30 blur-sm"
          initial={{ 
            x: `${particle.x}vw`, 
            y: `${particle.y}vh`,
            scale: 0 
          }}
          animate={{ 
            y: [null, `${particle.y - 20}vh`, `${particle.y + 20}vh`],
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0] 
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
    </div>
  );
};