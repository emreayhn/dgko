import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-72 h-48 md:w-80 md:h-52 cursor-pointer perspective-1000 group"
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Envelope Body */}
      <div className="absolute inset-0 bg-rose-gold shadow-xl rounded-lg z-10 flex items-center justify-center overflow-hidden border-2 border-rose-800/20">
         <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/10 to-transparent"></div>
      </div>

      {/* Top Flap */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1/2 bg-rose-400 z-20 origin-top rounded-t-lg shadow-md"
        style={{ 
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            filter: 'brightness(1.1)' 
        }}
        animate={{ 
            rotateX: isHovered ? 15 : 0, 
        }}
      />

      {/* Wax Seal */}
      <motion.div 
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
        animate={{ y: isHovered ? -10 : 0 }}
      >
        <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center shadow-lg border-2 border-red-900/50">
            <Heart className="text-red-200 fill-red-200 w-6 h-6" />
        </div>
      </motion.div>
      
      {/* Decorative shadows */}
      <div className="absolute -bottom-8 left-4 right-4 h-4 bg-black/10 blur-xl rounded-full"></div>
    </motion.div>
  );
};