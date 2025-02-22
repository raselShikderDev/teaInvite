'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img1 from '@/app/propose5/peach-cat-animated.gif';
import img2 from '@/app/propose5/dancing.gif';
import img3 from '@/app/propose5/thanks.gif';

export default function TeaInvite() {
  const [accepted, setAccepted] = useState(false);
  const [image, setImage] = useState(img1);
  const [isHovering, setIsHovering] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: 50, left: 62 });
  const [hearts, setHearts] = useState<
    { id: number; size: number; x: number; y: number; duration: number; delay: number; moveX: number }[]
  >([]);

  // Floating Hearts (Render all over the screen at different times)
  useEffect(() => {
    setHearts(
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        size: Math.random() * 30 + 10, // Random size (10px-40px)
        x: Math.random() * 100, // Random X position (0%-100%)
        y: Math.random() * 100, // Random Y position (0%-100%)
        duration: Math.random() * 5 + 3, // Random float time (3s-8s)
        delay: Math.random() * 3, // Different start times
        moveX: Math.random() * 20 - 10, // Slight left-right sway
      }))
    );
  }, []);

  // Reset img1 after 3 seconds when not hovering "No" button
  useEffect(() => {
    if (!isHovering) {
      const timeout = setTimeout(() => {
        setImage(img1);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [isHovering]);

  const moveNoButton = () => {
    setImage(img2);
    setIsHovering(true);

    let newTop, newLeft;
    const minMove = 20; // Minimum move distance

    do {
      newTop = Math.random() * 70 + 15;
      newLeft = Math.random() * 70 + 15;
    } while (
      Math.abs(newTop - noPosition.top) < minMove ||
      Math.abs(newLeft - noPosition.left) < minMove
    );

    setNoPosition({ top: newTop, left: newLeft });
  };

  const handleYesClick = () => {
    setImage(img3);
    setAccepted(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-pink-200 overflow-hidden font-sans">
      {/* Floating Hearts - Render only after client-side loads */}
      {hearts.length > 0 && (
        <div className="absolute opacity-40 inset-0 pointer-events-none">
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="absolute text-red-500"
              style={{
                fontSize: `${heart.size}px`,
                left: `${heart.x}%`,
                top: `${heart.y}%`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [`0px`, `-${Math.random() * 150 + 50}px`], // Move up randomly 50px-200px
                x: [`${heart.x}%`, `${heart.x + heart.moveX}%`], // Slight left-right movement
              }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      {/* Main Image */}
      <Image src={image} alt="Cute animated cat" className='z-50' width={200} height={200} />

      {/* Buttons */}
      {!accepted ? (
        <div className="text-center z-50 px-4">
          <h1 className="text-2xl font-bold mb-4">Would you like to have tea with me? <span className='text-3xl'>☕</span></h1>
          <div className="flex justify-center items-center space-x-4 relative w-full">
            {/* Yes Button */}
            <motion.button
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
              onClick={handleYesClick}
            >
              Yes
            </motion.button>

            {/* No Button */}
            <motion.button
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md absolute"
              style={{
                top: `${noPosition.top}%`,
                left: `${noPosition.left}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onMouseLeave={() => setIsHovering(false)}
              animate={{ top: `${noPosition.top}%`, left: `${noPosition.left}%` }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              No
            </motion.button>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-bold text-green-600 text-center">Yay! Can’t wait to have tea with you! 😊</h2>
      )}
    </div>
  );
}
