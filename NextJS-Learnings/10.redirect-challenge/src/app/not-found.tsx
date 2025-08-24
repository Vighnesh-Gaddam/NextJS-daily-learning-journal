export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4">
        Sorry, the page you’re looking for does not exist.
      </p>
    </div>
  );
}