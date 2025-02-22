'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import catGif from '@/app/propose/peach-cat-animated.gif';

export default function TeaInvite() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '50%' });
  const [yesScale, setYesScale] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [autoMove, setAutoMove] = useState(false);

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 80) + 10;
    const randomY = Math.floor(Math.random() * 80) + 10;
    setNoPosition({ top: `${randomY}%`, left: `${randomX}%`});
  };

  const handleYesClick = () => {
    if (clickCount === 0) {
      setYesScale(1.2);
      setClickCount(1);
    } else {
      setAutoMove(true);
      setAccepted(true);
    }
  };

  useEffect(() => {
    if (autoMove) {
      const interval = setInterval(moveNoButton, 1000);
      return () => clearInterval(interval);
    }
  }, [autoMove]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <Image src={catGif} alt="Cute animated cat" width={200} height={200} />
      {!accepted ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Would you like to have tea with me? ☕</h1>
          <div className="relative w-64 h-32">
            <motion.button
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
              onClick={handleYesClick}
              animate={{ scale: yesScale }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Yes
            </motion.button>
            <motion.button
              className="absolute px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md"
              style={{ top: noPosition.top, left: noPosition.left, position: 'absolute' }}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
            >
              No
            </motion.button>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-bold text-green-600">Yay! Can&rsquo;t wait to have tea with you! 😊</h2>
      )}
    </div>
  );
}