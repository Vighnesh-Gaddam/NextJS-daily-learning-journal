const LoadingSongs = () => {
  return (
    <div className="w-[96%] mx-auto px-4 animate-pulse">
      {/* Title placeholder */}
      <div className="h-8 w-48 bg-gray-700 rounded mt-8 mb-6"></div>

      <ul className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <li
            key={i}
            className="flex justify-between items-center p-3 rounded-md bg-[#1a1a1a]"
          >
            {/* Left side (image + text) */}
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 bg-gray-700 rounded-md"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-32 bg-gray-700 rounded"></div>
                <div className="h-3 w-24 bg-gray-600 rounded"></div>
              </div>
            </div>

            {/* Right side (icons/time placeholder) */}
            <div className="flex items-center gap-6">
              <div className="h-4 w-10 bg-gray-700 rounded"></div>
              <div className="h-4 w-4 bg-gray-600 rounded"></div>
              <div className="h-4 w-4 bg-gray-600 rounded"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoadingSongs;
