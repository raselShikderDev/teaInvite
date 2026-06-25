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


  //   const yes = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //     });

  //     console.log("Camera permission granted!");

  //     // Stop the camera for now
  //     stream.getTracks().forEach((track) => track.stop());

  //     sessionStorage.setItem("teaInviteAccepted", "true");
  //     router.push("/special-invite");
  //   } catch (error) {
  //     console.log("Camera permission denied", error);

  //     // Decide what to do if permission is denied
  //     alert("Camera permission is required.");

  //     // Or still continue:
  //     // sessionStorage.setItem("teaInviteAccepted", "true");
  //     // router.push("/special-invite");
  //   }
  // };

  const homePage = () => {
    router.push("/");
    setIsNotShe(false);
    console.log("clicked back: ", isNotShe);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200/90 gap-6 p-8">
      {!isNotShe && (
        <>
          <h1 className="text-3xl font-semibold">Are you Hur Pori?</h1>

          <button
            className="bg-pink-600 px-6 py-1.5 rounded text-white"
            onClick={yes}
          >
            yes
          </button>

          <button
            className="bg-green-400 px-6 py-1.5 rounded text-white"
            onClick={() => setIsNotShe(true)}
          >
            No
          </button>
        </>
      )}

      {isNotShe && (
        <>
          <p className="text-2xl text-red-600">
            This website is not for you buddy!
          </p>

          <button
            onClick={homePage}
            className="bg-green-400 px-6 py-1.5 rounded text-white"
          >
            Reload
          </button>
        </>
      )}

      {!isNotShe && <Image width={300} src={shockImg} alt="Shock image" />}
    </div>
  );
}
