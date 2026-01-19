import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Flower, Star, Quote } from 'lucide-react';

export const Letter: React.FC = () => {
  
  const fireConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#B76E79', '#FFD1DC', '#FFD700']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#B76E79', '#FFD1DC', '#FFD700']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  }, []);

  useEffect(() => {
    fireConfetti();
  }, [fireConfetti]);

  return (
    <motion.div 
      className="glass-card relative max-w-2xl w-full p-8 md:p-12 rounded-2xl shadow-2xl mx-4 my-8 overflow-hidden text-center cursor-pointer active:scale-[0.99] transition-transform"
      initial={{ scale: 0.9, rotateX: 10 }}
      animate={{ scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      onClick={fireConfetti}
      title="Konfetileri tekrar patlatmak için tıklayın!"
    >
      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-300 via-purple-300 to-rose-300"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-rose-300 via-purple-300 to-rose-300"></div>
      
      {/* Background Floral Elements */}
      <div className="absolute -top-10 -left-10 text-rose-100 opacity-50 transform rotate-12">
        <Flower size={150} />
      </div>
      <div className="absolute -bottom-10 -right-10 text-purple-100 opacity-50 transform -rotate-12">
        <Flower size={150} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 bg-rose-50 p-3 rounded-full shadow-inner"
        >
            <Star className="text-yellow-500 fill-yellow-500" size={32} />
        </motion.div>

        <motion.h1 
            className="text-5xl md:text-6xl font-script text-deep-purple mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
        >
          İyi ki Doğdunuz
        </motion.h1>
        
        <motion.h2 
            className="text-2xl md:text-3xl font-serif text-rose-600 mb-8 italic"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
        >
          Gül Hanım
        </motion.h2>

        <motion.div 
          className="relative px-4 md:px-8 py-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
           <Quote className="absolute top-0 left-0 text-rose-200 w-8 h-8 md:w-12 md:h-12 -translate-x-2 -translate-y-2 opacity-50" />
           
           <p className="text-gray-700 font-sans text-lg md:text-xl leading-relaxed text-justify md:text-center select-none">
             Sadece bir yönetici olarak değil, aynı zamanda tecrübesi ve zarafetiyle bize her zaman yol gösteren harika bir mentor olduğunuz için çok şanslıyız. 
             <br /><br />
             Firmadaki enerjiniz ve güler yüzünüz hiç eksik olmasın; bize kattığınız vizyon ve rehberlik için size minnettarız.
             <br /><br />
             Yeni yaşınızın size sağlık, huzur ve hak ettiğiniz tüm güzellikleri getirmesini dileriz.
           </p>
           
           <Quote className="absolute bottom-0 right-0 text-rose-200 w-8 h-8 md:w-12 md:h-12 translate-x-2 translate-y-2 opacity-50 rotate-180" />
        </motion.div>

        <motion.div 
            className="mt-4 pt-6 border-t border-rose-200 w-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
        >
            <p className="font-script text-3xl text-deep-purple">Sevgilerimizle,</p>
            <p className="font-serif font-bold text-lg text-rose-700 mt-1 uppercase tracking-wider">ERP Ekibi</p>
        </motion.div>
      </div>
    </motion.div>
  );
};