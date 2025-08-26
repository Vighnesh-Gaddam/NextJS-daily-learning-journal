import Link from "next/link"

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1>Http Methods</h1>
      <div className="flex gap-4">
        <Link href="/books" className="mt-4 underline text-blue-600">get-books</Link>
        <Link href="/books" className="mt-4 underline text-blue-600">post-book</Link>
        {/* <Link href="/put" className="mt-4 underline text-blue-600"> PUT</Link>
        <Link href="/delete" className="mt-4 underline text-blue-600"> DELETE</Link> */}
      </div>
    </div>
  )
}
export default Home