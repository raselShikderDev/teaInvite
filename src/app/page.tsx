"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [isNotShe, setIsNotShe] = useState(false);

  const router = useRouter();
  const yes = () => {
    router.push("/miss-hur-pori");
  };

  const homePage = () => {
    router.push("/");
    setIsNotShe(false)
    console.log("clicked back: ", isNotShe)
  };

  return (
    <div className="grid grid-rows-[20px_20px_20px] justify-center items-center bg-purple-200 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <h1 className={`text-3xl ${isNotShe && "hidden"}`}>Is Your Name Hur Pori?</h1>
      <button
        disabled={isNotShe}
        className={`bg-pink-600 px-6 py-1.5 rounded shadow-xl text-teal-50 font-semibold hover:scale-105 active:bg-pink-600 ${isNotShe && "hidden"}`}
        onClick={yes}
      >
        yes
      </button>
      <button
        disabled={isNotShe}
        className={`bg-green-400 px-6 py-1.5 rounded shadow-xl text-teal-50 font-semibold hover:scale-105 active:bg-green-600 ${isNotShe && "hidden"}`}
        onClick={() => setIsNotShe(true)}
      >
        No
      </button>
      {isNotShe && (
        <p className="text-xl text-red-600 font-semibold font-mono">
           This website is not for you buddy
        </p>
      )}
      {isNotShe && (
        <button
          onClick={homePage}
          className="bg-green-400 px-6 py-1.5 rounded shadow-xl text-teal-50 font-semibold hover:scale-105 active:bg-green-600"
        >
          Reload
        </button>
      )}
    </div>
  );
}
