"use client";

import Link from "next/link";
import { dashboardLinks } from "@/lib/dashboardLinks";
import DashboardLink from "./DashboardLink";


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

      <div className="flex flex-col gap-2  md:space-y-2">
        <DashboardLink
          href="/dashboard"
  
        >
          Dashboard Home
        </DashboardLink>

        {links.map((link) => (
          <DashboardLink
            key={link.href}
            href={link.href}
            
          >
            {link.name}
          </DashboardLink>
        ))}
      </div>
    </aside>
  );
};

export default DashBoardSideBar;