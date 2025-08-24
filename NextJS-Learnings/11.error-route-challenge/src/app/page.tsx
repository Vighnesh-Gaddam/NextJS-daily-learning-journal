import Link from "next/link"

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1>Home</h1>
      <Link href="/profile" className="mt-4 underline text-blue-600"> Go to Profile</Link>
    </div>
  )
}
export default Home