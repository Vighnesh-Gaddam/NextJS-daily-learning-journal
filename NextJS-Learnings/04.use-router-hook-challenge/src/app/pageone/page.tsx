"use client";

import { useRouter } from "next/navigation";

export default function PageOne() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome to Page 1</h1>
      <button
        onClick={() => router.push("/pagetwo")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Page 2
      </button>
    </main>
  );
}