"use client"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-600 to-green-400">
      <div className="w-[550px] h-[350px] rounded-[50px] bg-[#e0e0e0] shadow-[12px_12px_23px_#bebebe,-12px_-12px_23px_#fff] text-center pt-5">
        <h1 className="text-[10rem] font-extrabold bg-gradient-to-br from-green-600 to-green-400 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-[#204829] -mt-2 mb-2 text-2xl">Oops, Page Not Found</h2>
        <p className="text-[#204829] font-medium mb-4">
          Page that you&apos;re looking for isn&apos;t found
        </p>
        <Link href="/">
          <button className="px-6 py-3 rounded-[20%] bg-gradient-to-l from-green-600 via-green-400 to-green-600 bg-[length:200%_100%] text-white cursor-pointer transition-all duration-300 hover:bg-[position:right]">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
