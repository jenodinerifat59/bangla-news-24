
const Loading = () => {
  return (
    <div className="w-7xl min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-400 to-white">
      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-black/20 border-t-black rounded-full animate-spin" />

        {/* Loading Text */}
        <p className="mt-5 text-lg font-semibold text-black">
          Loading...
        </p>

      </div>
    </div>
  );
};

export default Loading;
