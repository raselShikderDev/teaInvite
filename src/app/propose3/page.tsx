'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import catGif from '@/app/propose/peach-cat-animated.gif';

export default function TeaInvite() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '50%' });
  const [isMobile, setIsMobile] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noClickCount, setNoClickCount] = useState(0); // Track clicks on "No"
  const [heartPositions, setHeartPositions] = useState<{ top: string; left: string; delay: number }[]>([]);

  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const positions = Array.from({ length: 25 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3, // Random delay for staggered appearance
    }));
    setHeartPositions(positions);
  }, []);

  const moveNoButton = () => {
    if (isMobile) return;

    const randomX = Math.floor(Math.random() * 80) + 10;
    const randomY = Math.floor(Math.random() * 80) + 10;

    // Force re-render by using a functional update
    setNoPosition(() => ({ top: `${randomY}%`, left: `${randomX}%` }));
  };

  const handleNoClick = (e: { preventDefault: () => void }) => {
    if (isMobile) {
      e.preventDefault();
      setYesSize((prevSize) => prevSize + 0.2);
      setNoClickCount((prev) => prev + 1); // Increase click count

      if (noClickCount >= 4) {
        // Hide "No" button after 5 clicks
        setNoPosition({ top: '-9999px', left: '-9999px' });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-200 to-pink-300 relative overflow-hidden">
      {/* Floating glowing hearts animation */}
      {heartPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500 text-4xl"
          style={{ 
            top: pos.top, 
            left: pos.left, 
            filter: 'blur(2px) drop-shadow(0 0 10px rgba(255, 0, 0, 0.8))' 
          }}
          animate={{ y: [-10, -50], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: pos.delay }}
        >
          ❤️
        </motion.div>
      ))}

      <Image src={catGif} alt="Cute animated cat" width={200} height={200} />
      {!accepted ? (
        <div className="text-center relative z-10">
          <h1 className="text-2xl font-bold text-white mb-4">
            Would you like to have tea with me? ☕
          </h1>
          <div className="flex justify-center items-center gap-6 mt-4">
            <motion.button
              className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition transform"
              onClick={() => setAccepted(true)}
              style={{ transform: `scale(${yesSize})` }}
            >
              Yes
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-lg"
              style={{
                position: isMobile ? 'static' : 'absolute',
                top: noPosition.top,
                left: noPosition.left,
                display: noClickCount >= 5 ? 'none' : 'block', // Hide after 5 clicks
              }}
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
        <h2 className="text-2xl font-bold text-white relative z-10">
          Yay! Can&lsquo;t wait to have tea with you! 😊
        </h2>
      )}
    </div>
  );
}
