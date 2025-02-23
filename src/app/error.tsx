'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-purple-100 text-center">
      <h1 className="text-5xl font-bold text-purple-600">Oops! 💖</h1>
      <p className="text-lg text-gray-700 mt-4">
        Our sweet story hit a little bug... but don’t worry, we can fix it together! 💑
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition"
      >
        Try Again 💕
      </button>
    </div>
  );
}
