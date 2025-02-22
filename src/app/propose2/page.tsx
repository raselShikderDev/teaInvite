'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import catGif from '@/app/propose/peach-cat-animated.gif';

export default function TeaInvite() {
  const [accepted, setAccepted] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '50%' });
  const [isMobile, setIsMobile] = useState(false);
  const [yesSize, setYesSize] = useState(1);

  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const moveNoButton = () => {
    if (isMobile) return;
    const randomX = Math.floor(Math.random() * 80) + 10;
    const randomY = Math.floor(Math.random() * 80) + 10;
    setNoPosition({ top: `${randomY}%`, left: `${randomX}%` });
  };

  const handleNoClick = (e: { preventDefault: () => void; }) => {
    if (isMobile) {
      e.preventDefault();
      setYesSize(yesSize + 0.2);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 relative overflow-hidden">
      {/* Floating semi-filled red hearts animation */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500 text-xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [-10, -50], opacity: [1, 0] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
        >
          <span className="relative">
            <span className="text-red-500 opacity-50">❤️</span> {/* Red fill with opacity */}
          </span>
        </motion.div>
      ))}

      <Image src={catGif} alt="Cute animated cat" width={200} height={200} />
      {!accepted ? (
        <div className="text-center relative z-10">
          <h1 className="text-2xl font-bold mb-4">Would you like to have tea with me? ☕</h1>
          <div className="flex gap-4 mt-4 relative">
            <motion.button
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
              onClick={() => setAccepted(true)}
              style={{ transform: `scale(${yesSize})` }}
            >
              Yes
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md"
              style={{ position: 'relative' }}
              onMouseEnter={moveNoButton}
              onClick={handleNoClick}
              animate={isMobile ? { x: [0, -5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              No
            </motion.button>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-bold text-green-600 relative z-10">
          Yay! Can&lsquo;t wait to have tea with you! 😊
        </h2>
      )}
    </div>
  );
}
