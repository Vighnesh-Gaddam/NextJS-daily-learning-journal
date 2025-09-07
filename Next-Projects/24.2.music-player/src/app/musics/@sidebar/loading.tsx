const Loading = () => {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen animate-pulse">
      {/* Menu Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          {[1, 2, 3].map((i) => (
            <li
              key={i}
              className="flex items-center gap-2 p-2 rounded-md"
            >
              <div className="h-5 w-5 bg-gray-700 rounded"></div>
              <div className="h-4 w-24 bg-gray-700 rounded"></div>
            </li>
          ))}
        </ul>
      </section>

      {/* Favorites Section */}
      <section>
        <h2 className="mt-6 font-bold text-xl mb-2">Favorites</h2>
        <ul className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-3">
              <div className="h-12 w-12 bg-gray-700 rounded-md"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-20 bg-gray-700 rounded"></div>
                <div className="h-3 w-16 bg-gray-600 rounded"></div>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Loading;
