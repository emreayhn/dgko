import React from 'react';
import { motion } from 'framer-motion';

export const Background: React.FC = () => {
  // Generate random particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 15 + 5,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? '#B76E79' : i % 3 === 1 ? '#FFD1DC' : '#E6E6FA' // Rose gold, soft pink, lavender
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 opacity-80"></div>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20 blur-sm"
          initial={{ 
            x: `${particle.x}vw`, 
            y: `${particle.y}vh`,
            scale: 0 
          }}
          animate={{ 
            y: [null, `${particle.y - 30}vh`, `${particle.y + 30}vh`],
            opacity: [0, 0.3, 0],
            scale: [0, 1.2, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
        />
      ))}
      {/* Additional subtle gradient overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
    </div>
  );
};