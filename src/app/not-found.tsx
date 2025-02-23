'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">💔 404 💔</h1>
      <p className="text-lg text-gray-700 mt-4">Oops! Looks like our sweet letter got lost...</p>
      <Link href="/" className="mt-6 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-700 transition">
        Let&#39;s Go Home ❤️
      </Link>
    </div>
  );
}
