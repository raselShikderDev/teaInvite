/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/app/special-invite/peach-cat-animated.gif";
import img2 from "@/app/special-invite/dancing.gif";
import img3 from "@/app/special-invite/thanks.gif";
import turnGif from "@/app/special-invite/turning.gif";
import teaReasons from "@/data/noReason.json";
import { useRouter } from "next/navigation";
const text = "Hur Pori, Would you like to have tea with me? ☕";
export default function TeaInvite() {
  const [accepted, setAccepted] = useState(false);
  const [noBtnClickCount, setNoBtnClickCount] = useState(0);
  const [isNoBtnClicked, setIsNoBtnClicked] = useState(false);
  const [defaultText] = useState(text);
  const [image, setImage] = useState(img1);
  const [imageAccept, setImageAccept] = useState(img3);
  const [isHovering, setIsHovering] = useState(false);
  const [index, setIndex] = useState(0);
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
  const [noPosition, setNoPosition] = useState({ top: 50, left: 60 });
  const [hearts, setHearts] = useState<
    {
      id: number;
      size: number;
      x: number;
      y: number;
      duration: number;
      delay: number;
      moveX: number;
    }[]
  >([]);
  const router = useRouter();

  useEffect(() => {
    const hasAccepted = sessionStorage.getItem("teaInviteAccepted");
    if (!hasAccepted) {
      setIsAllowed(false);
      setTimeout(() => {
        router.push("/");
      }, 5000); // Redirect after 2 seconds
    } else {
      setIsAllowed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Floating Hearts (Render all over the screen at different times)
  useEffect(() => {
    setHearts(
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        size: Math.random() * 30 + 10, // Random size (10px-40px)
        x: Math.random() * 100, // Random X position (0%-100%)
        y: Math.random() * 100, // Random Y position (0%-100%)
        duration: Math.random() * 6 + 4, // Random float time (3s-8s)
        delay: Math.random() * 4, // Different start times
        moveX: Math.random() * 20 - 10, // Slight left-right sway
      }))
    );
  }, []);

  // Reset img1 after 3 seconds when not hovering "No" button
  useEffect(() => {
    if (!isHovering) {
      const timeout = setTimeout(() => {
        setImage(img1);
        setIsNoBtnClicked(false);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [isHovering]);

  // const moveNoButton = () => {
  //   setImage(img2);
  //   setIsHovering(true);
  //   let newTop, newLeft;
  //   const minMove = 15; // Minimum move distance

  //   do {
  //     newTop = Math.random() * 70 + 15;
  //     newLeft = Math.random() * 70 + 15;
  //   } while (
  //     Math.abs(newTop - noPosition.top) < minMove ||
  //     Math.abs(newLeft - noPosition.left) < minMove
  //   );

  //   setNoPosition({ top: newTop, left: newLeft });
  //   if (noBtnClickCount === 100) {
  //     sendNotification("No");
  //   }
  //   setIsNoBtnClicked(true);
  //   setIndex((prevIndex) => (prevIndex + 1) % teaReasons.reasons.length);
  // };

  const moveNoButton = () => {
    setImage(img2);
    setIsHovering(true);
    let newTop, newLeft;
    const minMove = 20; // Ensures at least 20px movement in any direction
    const maxMove = 50; // Maximum move to prevent going out of bounds
  
    do {
      const moveY = Math.random() * (maxMove - minMove) + minMove; // Random vertical move
      const moveX = Math.random() * (maxMove - minMove) + minMove; // Random horizontal move
  
      // Randomly decide direction: Up/Down & Left/Right
      newTop = noPosition.top + (Math.random() > 0.5 ? moveY : -moveY);
      newLeft = noPosition.left + (Math.random() > 0.5 ? moveX : -moveX);
  
      // Ensure the button stays within 15% to 85% of the screen
      newTop = Math.min(85, Math.max(15, newTop));
      newLeft = Math.min(85, Math.max(15, newLeft));
  
    } while (
      Math.abs(newTop - noPosition.top) < minMove ||
      Math.abs(newLeft - noPosition.left) < minMove
    );
  
    setNoPosition({ top: newTop, left: newLeft });
  
    if (noBtnClickCount === 100) {
      sendNotification("No");
    }
    
    setIsNoBtnClicked(true);
    setIndex((prevIndex) => (prevIndex + 1) % teaReasons.reasons.length);
  };
  

  const sendNotification = async (response: string) => {
    const userAgent = navigator.userAgent;
    const screenSize = `${window.screen.width}x${window.screen.height}`;
    const time = new Date().toLocaleString();

    // Get IP Address
    const ipRes = await fetch("https://api64.ipify.org?format=json");
    const { ip } = await ipRes.json();

    // Get Device Info (Type Checking Fix)
    let deviceInfo = "Unknown Device";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userAgentData = (navigator as any).userAgentData; // Type assertion for compatibility

    if (userAgentData) {
      const brands =
        userAgentData.brands
          ?.map(
            (b: { brand: string; version: string }) => `${b.brand} ${b.version}`
          )
          .join(", ") || "Unknown Browser";

      const mobile = userAgentData.mobile ? "Mobile" : "Desktop";
      deviceInfo = `${brands} | ${mobile}`;
    }

    const data = {
      response,
      userAgent,
      deviceInfo,
      screenSize,
      ip,
      time,
    };

    await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  const handleYesClick = () => {
    setImage(img3);
    setAccepted(true);
    sendNotification("Yes");
  };

  // const handleNoBtn = () => {
  //   setNoBtnClickCount((prev) => prev + 1);
  //   if (noBtnClickCount === 100) {
  //     sendNotification("No");
  //   }
  //   setIsNoBtnClicked(true);
  //   setIndex((prevIndex) => (prevIndex + 1) % teaReasons.reasons.length);
  // };

  const handleNoBtn = () => {
    setNoBtnClickCount((prev) => {
      const newCount = prev + 1;
      const isMobile = window.innerWidth <= 480; // Check if the device is mobile

      if (!isMobile) {
        sendNotification("No"); // PC/Laptop: Send email immediately
      } else if (newCount === 50) {
        sendNotification("No"); // Mobile: Send email after 100 clicks
      }

      return newCount;
    });

    setIsNoBtnClicked(true);
    setIndex((prevIndex) => (prevIndex + 1) % teaReasons.reasons.length);
  };

  if (isAllowed === null) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-xl text-gray-700">
        <p className="mb-4">🔍 Checking access...</p>
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAllowed) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center relative">
        {/* Floating Hearts for a Cute Vibe */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-red-400 animate-float"
              style={{
                fontSize: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        {/* Cute Warning Illustration */}
        <Image
          src={turnGif} // Replace with a real cute illustration/gif
          alt="Cute Warning Cat"
          className="w-40 h-40 mb-6 animate-bounce"
        />

        {/* Warning Text */}
        <h1 className="text-3xl font-bold text-red-600 drop-shadow-lg mb-2">
          🚫You can’t use a shortcut! That’s not fair!🚫
        </h1>
        <p className="text-lg text-gray-700 px-6">
          Click "Yes" on the home page first. 😉
        </p>

        {/* Auto Redirect Text */}
        <p className="mt-4 text-pink-600 text-sm italic animate-pulse">
          Redirecting you home in a moment... ⏳
        </p>
      </div>
    );
  }

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
                ease: "easeInOut",
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      {/* Main Image */}
      <Image
        src={accepted ? imageAccept : image}
        alt="Cute animated cat"
        className="z-50"
        width={200}
        height={200}
      />

      {/* Buttons */}
      {!accepted ? (
        <div className="text-center z-50 px-4">
          {isNoBtnClicked ? (
            <h1 className="text-2xl font-bold mb-4 pb-10">
              {teaReasons.reasons[index]}
            </h1>
          ) : (
            <h1 className="text-2xl font-bold mb-4 pb-10">{defaultText}</h1>
          )}
          <div className="flex px-28 sm:px-0 justify-between sm:justify-center items-center space-x-4 relative w-full">
            {/* Yes Button */}
            <motion.button
              className="px-3 py-1 sm:px-4 sm:py-2 bg-green-500 text-white scale-105 font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
              onClick={handleYesClick}
            >
              Yes
            </motion.button>

            {/* No Button */}
            <motion.button
              className="px-3 py-1 sm:px-4 sm:py-2 bg-red-500 hover:scale-105 text-white font-semibold rounded-lg shadow-md absolute"
              style={{
                top: `${noPosition.top}%`,
                left: `${noPosition.left}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onMouseLeave={() => setIsHovering(false)}
              animate={{
                top: `${noPosition.top}%`,
                left: `${noPosition.left}%`,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={handleNoBtn}
            >
              No
            </motion.button>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-bold text-green-600 pt-6 text-center">
          Yay! Can’t wait to have tea with you! 😊
        </h2>
      )}
    </div>
  );
}
