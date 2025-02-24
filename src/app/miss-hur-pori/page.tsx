/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/app/miss-hur-pori/peach-cat-animated.gif";
import img2 from "@/app/miss-hur-pori/dancing.gif";
import img3 from "@/app/miss-hur-pori/thanks.gif";
import teaReasons from "@/data/noReason.json";
const text = "Hur Pori, Would you like to have tea with me? ☕"
export default function TeaInvite() {
  const [accepted, setAccepted] = useState(false);
  const [noBtnClickCount, setNoBtnClickCount] = useState(0);
  const [isNoBtnClicked, setIsNoBtnClicked] = useState(false);
  const [defaultText, setDefaultText] = useState(text)
  const [image, setImage] = useState(img1);
  const [imageAccept, setImageAccept] = useState(img3);
  const [isHovering, setIsHovering] = useState(false);
  const [index, setIndex] = useState(0);
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
        setIsNoBtnClicked(false)
        setDefaultText("So, Hur Pori, are you tired? What do you say? ☕")
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
        // If it's a PC/Laptop (where hover works), send email immediately
        sendNotification("No");
      } else if (newCount === 50) {
        // If it's a mobile and user clicked 100 times, send email
        sendNotification("No");
      }
  
      return newCount; // Ensure the count updates properly
    });
  
    setIsNoBtnClicked(true);
    setIndex((prevIndex) => (prevIndex + 1) % teaReasons.reasons.length);
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
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
              onClick={handleYesClick}
            >
              Yes
            </motion.button>

            {/* No Button */}
            <motion.button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md absolute"
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
