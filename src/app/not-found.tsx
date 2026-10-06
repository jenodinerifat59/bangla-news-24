
const NotFound = () => {
  return (
    <div className="w-7xl min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-400 to-white px-4">
      <div className="text-center w-full">

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-black">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Red Line */}
        <div className="w-20 h-1 bg-red-700 mx-auto mt-6 rounded-full" />

      </div>
    </div>
  );
};

export default NotFound;

