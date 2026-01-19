import React, { useState } from 'react';
import { Envelope } from './components/Envelope';
import { Letter } from './components/Letter';
import { Background } from './components/Background';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-rose-100 via-purple-50 to-indigo-100">
      <Background />
      
      <main className="relative z-10 w-full max-w-4xl p-4 flex flex-col items-center justify-center min-h-[600px]">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5, y: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-5xl font-script text-deep-purple mb-8 text-center drop-shadow-sm">
                Gül Hanım'a Özel
              </h1>
              <Envelope onOpen={handleOpen} />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-gray-500 font-sans text-sm tracking-widest uppercase"
              >
                Açmak için dokunun
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              className="w-full flex justify-center"
            >
              <Letter />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="absolute bottom-4 text-center w-full text-gray-400 text-xs font-sans pointer-events-none">
        ERP Ekibi &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}