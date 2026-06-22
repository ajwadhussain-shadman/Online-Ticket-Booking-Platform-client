"use client";

import Link from "next/link";
import { dashboardLinks } from "@/lib/dashboardLinks";

const DashBoardSideBar = ({ user }) => {
  const links = dashboardLinks[user?.role] || [];

  return (
    <aside
      className="
        w-full
        border-b border-cyan-500/10
        bg-[#091425]
        p-4

        md:min-h-screen
        md:w-72
        md:border-b-0
        md:border-r
        md:p-6
      "
    >
      <h2 className="mb-2 text-xl font-bold text-cyan-400 md:text-2xl">
        Dashboard
      </h2>

      <p className="mb-6 text-sm capitalize text-gray-400 md:mb-8">
        {user?.role} Panel
      </p>

      <div className="flex flex-wrap gap-2 md:block md:space-y-2">
        <Link
          href="/dashboard"
          className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-cyan-500/10 hover:text-cyan-400 md:block md:px-4 md:py-3"
        >
          Dashboard Home
        </Link>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-4 py-2 text-gray-300 transition hover:bg-cyan-500/10 hover:text-cyan-400 md:block md:px-4 md:py-3"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default DashBoardSideBar;