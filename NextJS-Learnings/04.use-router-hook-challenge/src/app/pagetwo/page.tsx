"use client";

import { useRouter } from "next/navigation";

export default function PageTwo() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome to Page 2</h1>
      <p className="text-lg text-gray-700">You are now on Page 2</p>
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Back
      </button>
    </main>
  );
}