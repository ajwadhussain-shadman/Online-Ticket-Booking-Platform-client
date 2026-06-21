"use client";

import Link from "next/link";

const DashBoardSideBar = () => {
  return (
    <aside className="min-h-screen w-72 border-r border-cyan-500/10 bg-[#091425] p-6">
      <h2 className="mb-8 text-2xl font-bold text-cyan-400">
        Dashboard
      </h2>

      <div className="space-y-2">
        <Link
          href="/dashboard"
          className="block rounded-lg px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          Dashboard Home
        </Link>

        <Link
          href="/dashboard/profile"
          className="block rounded-lg px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          Profile
        </Link>
      </div>
    </aside>
  );
};

export default DashBoardSideBar;