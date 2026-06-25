'use client'
import Link from "next/link";

const ForbiddenPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#07111F] px-6">
      <div className="w-full max-w-xl rounded-3xl border border-red-500/20 bg-[#091425] p-10 text-center shadow-2xl">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c1.657 0 3-1.343 3-3V7a3 3 0 10-6 0v1c0 1.657 1.343 3 3 3zm-6 2h12v7H6v-7z"
            />
          </svg>
        </div>

        {/* 403 */}
        <h1 className="mt-8 text-7xl font-extrabold text-red-400">
          403
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Access Forbidden
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-400">
          You don't have permission to access this page.
          If you believe this is a mistake, please contact the administrator.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition hover:border-cyan-500 hover:text-cyan-400"
          >
            Go Back
          </button>

        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-500">
          Error Code: <span className="font-semibold text-red-400">403 Forbidden</span>
        </p>

      </div>
    </div>
  );
};

export default ForbiddenPage;