"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import toast from "react-hot-toast";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiChevronDown, FiLogOut } from "react-icons/fi";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown} from "@heroui/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import NavLink from "./NavLink";
import annonomusImg from '../../public/assets/annonomus.png'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    data: session,
    isPending,
  } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully");
  };
  
  const {theme,setTheme}=useTheme();
  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/10 bg-yellow-50 dark:bg-[#07111F]/90 backdrop-blur-xl ">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 dark:text-white md:hidden"
          >
            
            {isMenuOpen ? (
              <HiX size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>
          

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/Logo.png"
              alt="TicketBari Logo"
              width={55}
              height={55}
              priority
              className="object-contain"
            />

            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              <span className="text-gray-900 dark:text-white">Ticket</span>
              <span className="text-cyan-400">Bari</span>
            </h1>
          </Link>
        </div>

        {/* Center Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink
              href="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              href="/all-tickets"

            >
              All Tickets
            </NavLink>
          </li>

          {!isPending && user && (
            <li>
              <NavLink
                href="/dashboard"
                
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        {/* Right Side */}
  
        <div className="hidden items-center gap-5 md:flex">
          <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="rounded-full border border-cyan-500/20 p-2 transition hover:bg-cyan-500/10"
>
  {theme === "dark" ? (
    <MdLightMode className="text-2xl text-yellow-400" />
  ) : (
    <MdDarkMode className="text-2xl text-cyan-500" />
  )}
</button>
          {!isPending && !user && (
            <>
              <Link
                href="/auth/sign-in"
                className="text-lg font-medium text-gray-900 dark:text-white transition hover:text-white"
              >
                Sign In
              </Link>

              <Link
                href="/auth/sign-up"
                className="rounded-full bg-cyan-500 px-8 py-3 text-lg font-semibold text-gray-900 dark:text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105"
              >
                Get Started
              </Link>
            </>
          )}

          {!isPending && user && (

            <div className="flex  gap-2 items-center">
               <Image
                  src={
                    user.image ||
                   annonomusImg
                  }
                  alt="User"
                  width={30}
                  height={30}
                  className="h-7 w-7 rounded-full object-cover"
                />
              <Dropdown className="">
  <Button
    variant="ghost"
    className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-2"
  >
   

    <div className="text-left p-2">
      <p className="font-semibold text-gray-900 dark:text-white">
        {user.name}
      </p>
      
    </div>

    <FiChevronDown />
  </Button>

  <Dropdown.Popover>
    <Dropdown.Menu>

      <Dropdown.Item id="profile"
      className={'bg-blue-400/50  font-bold mb-4 text-gray-900 dark:text-white'}>
        <Link href={`/dashboard/${user.role}/profile`}>
          <IoPersonCircleOutline className="inline-block text-3xl " /> My Profile
        </Link>
      </Dropdown.Item>

      <Dropdown.Item
        id="logout"
        variant="danger"
        onAction={handleLogout}
        className={'bg-red-500/50 text-gray-900 dark:text-white font-semibold text-center'}
      >
       <FaSignOutAlt className="inline-block text-3xl" /> Logout
      </Dropdown.Item>

    </Dropdown.Menu>
  </Dropdown.Popover>
</Dropdown>
            </div>
        
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-cyan-500/10 bg-yellow-50 dark:bg-[#07111F] md:hidden">
          <div className="space-y-3 p-4">
            {!isPending && user && (
              <div className="mb-4 flex justify-between items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3">
                <div className="flex gap-3">
                  <Image
                  src={
                    user.image ||
                    "https://w7.pngwing.com/pngs/188/501/png-transparent-computer-icons-anonymous-anonymity-anonymous-face-monochrome-head.png"
                  }
                  alt="User"
                  width={45}
                  height={45}
                  className="rounded-full"
                />

                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </p>

                  <p className="text-sm text-gray-400">
                    {user.email}
                  </p>
                </div>
                </div>
               
              </div>
            )}

            <div className="flex flex-col gap-3">
             <div className="flex justify-between">
               <NavLink
              href="/"
            
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
                 <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="rounded-full border  border-cyan-500/20 p-2 transition hover:bg-cyan-500/10"
>
  {theme === "dark" ? (
    <MdLightMode className="text-2xl text-yellow-400" />
  ) : (
    <MdDarkMode className="text-2xl text-cyan-500" />
  )}
</button>
             </div>

            <NavLink
              href="/all-tickets"
          
              onClick={() => setIsMenuOpen(false)}
            >
              All Tickets
            </NavLink>
         

            </div>
            {!isPending && user && (
              <>
               <div className="flex flex-col gap-3">
                 <NavLink
                  href="/dashboard"
                  className="block rounded-xl px-4 py-3 font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  href={`/dashboard/${user.role}/profile`}
                  className="block rounded-xl px-4 py-3 font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </NavLink>

               </div>
                <button
                  onClick={handleLogout}
                  className="w-full rounded-xl bg-red-500/60 px-4 py-3 font-medium dark:text-white"
                >
                  Logout <FaSignOutAlt className="ml-2 inline-block text-2xl" />
                </button>
              </>
            )}

            {!isPending && !user && (
              <>
                <Link
                  href="/auth/sign-in"
                  className="block rounded-xl px-4 py-3 font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/sign-up"
                  className="block rounded-xl bg-cyan-500 px-4 py-3 text-center font-medium text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
            
    </nav>
  );
};

export default Navbar;