import Link from "next/link"

const Home = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col">
        <div>Home</div>
        <div className="flex gap-2 underline">
          <Link href="/about" className="text-blue-600">About</Link>
          <Link href="/not-found" className="text-blue-600">Not Found</Link>
        </div>
      </div>
    </>
  )
}
export default Home