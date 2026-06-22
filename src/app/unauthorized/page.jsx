import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#07111F] px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-7xl font-bold text-cyan-400">
          403
        </h1>

        <h2 className="mb-3 text-3xl font-bold text-white">
          Access Denied
        </h2>

        <p className="mb-8 text-gray-400">
          You do not have permission to access this page.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;