"use client";

import Link from "next/link";
import { dashboardLinks } from "@/lib/dashboardLinks";

const DashBoardSideBar = ({ user }) => {
  const links = dashboardLinks[user?.role] || [];
  console.log(user.role)
  return (
    <aside className="min-h-screen w-72 border-r border-cyan-500/10 bg-[#091425] p-6">
      <h2 className="mb-2 text-2xl font-bold text-cyan-400">
        Dashboard
      </h2>

      <p className="mb-8 text-sm text-gray-400 capitalize">
        {user?.role} Panel
      </p>

      <div className="space-y-2">
        <Link
          href="/dashboard"
          className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          Dashboard Home
        </Link>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default DashBoardSideBar;