"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import shockImg from "@/app/special-invite/shock1.gif";
import Image from "next/image";

export default function Home() {
  const [isNotShe, setIsNotShe] = useState(false);

  const router = useRouter();
  const yes = () => {
    router.push("/special-invite");
    sessionStorage.setItem("teaInviteAccepted", "true");
  };

  const homePage = () => {
    router.push("/");
    setIsNotShe(false);
    console.log("clicked back: ", isNotShe);
  };

  return (
    <div className="grid grid-rows-[20px_20px_20px_auto] justify-center items-center bg-pink-200/90 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <h1
        className={`text-3xl mt-16 mb-10 font-semibold ${isNotShe && "hidden"}`}
      >
        Are you Hur Pori?
      </h1>
      <button
        disabled={isNotShe}
        className={`bg-pink-600 px-6 py-1.5 rounded shadow-xl text-teal-50 font-semibold hover:scale-105 active:bg-pink-600 ${
          isNotShe && "hidden"
        }`}
        onClick={yes}
      >
        yes
      </button>
      <button
        disabled={isNotShe}
        className={`bg-green-400 px-6 py-1.5 rounded shadow-xl text-teal-50 font-semibold hover:scale-105 active:bg-green-600 ${
          isNotShe && "hidden"
        }`}
        onClick={() => setIsNotShe(true)}
      >
        No
      </button>
      {isNotShe && (
        <p className="text-2xl text-red-600 font-semibold font-mono">
          This website is not for you buddy!
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
        <div className={`${isNotShe && "hidden -mt-10"}`}>
          <Image width={300} src={shockImg} alt="Shock image" />
        </div>
    </div>
  );
}
