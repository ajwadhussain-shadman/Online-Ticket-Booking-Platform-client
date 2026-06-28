export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#07111F]">

      {/* Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative flex flex-col items-center">

        {/* Loader */}
        <div className="relative flex h-28 w-28 items-center justify-center">

          {/* Outer Ring */}
          <div className="absolute h-28 w-28 animate-spin rounded-full border-[5px] border-cyan-500/20 border-t-cyan-400"></div>

          {/* Inner Ring */}
          <div
            className="absolute h-20 w-20 animate-spin rounded-full border-[4px] border-cyan-300/20 border-b-cyan-300"
            style={{
              animationDirection: "reverse",
              animationDuration: "1.2s",
            }}
          ></div>

          {/* Ticket */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 shadow-2xl shadow-cyan-500/40">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7 text-white"
            >
              <path d="M21 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 1 0 4v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 1 0-4Zm-9 7V8h1v8Z" />
            </svg>

          </div>
        </div>

        {/* Logo */}
        <h1 className="mt-8 text-4xl font-extrabold">
          <span className="text-white">Ticket</span>
          <span className="text-cyan-400">Bari</span>
        </h1>

        {/* Loading */}
        <div className="mt-5 flex items-center gap-2">
          <span className="text-gray-400">Loading</span>

          <div className="flex gap-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"></span>
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
              style={{ animationDelay: "0.15s" }}
            ></span>
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
              style={{ animationDelay: "0.3s" }}
            ></span>
          </div>
        </div>

      </div>
    </div>
  );
}