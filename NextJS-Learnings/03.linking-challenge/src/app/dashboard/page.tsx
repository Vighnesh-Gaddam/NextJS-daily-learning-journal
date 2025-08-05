import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="text-blue-600 hover:underline">
              Settings
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className="text-blue-600 hover:underline">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
