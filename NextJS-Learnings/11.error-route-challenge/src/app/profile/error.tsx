"use client";
import Link from "next/link";

export default function ProfileError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">⚠️ Profile Error</h1>
      <p className="text-gray-600 mt-2">{error.message}</p>

      <div className="mt-6 flex gap-4">
        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Retry
        </button>

        {/* Go Home Link */}
        <Link
          href="/"
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
