"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/10 bg-[#07111F]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
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
              width={60}
              height={60}
              priority
              className="object-contain"
            />

            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              <span className="text-white">Ticket</span>
              <span className="text-cyan-400">Bari</span>
            </h1>
          </Link>
        </div>

        {/* Center Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link
              href="/"
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-8 py-3 text-lg font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/tickets"
              className="text-lg font-medium text-gray-300 transition hover:text-cyan-400"
            >
              All Tickets
            </Link>
          </li>
        </ul>

        {/* Right */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/signin"
            className="text-lg font-medium text-gray-300 transition hover:text-white"
          >
            Sign In
          </Link>

          <Button
            as={Link}
            href="/signup"
            radius="full"
            className="bg-cyan-500 px-8 py-2 rounded-full text-lg font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-cyan-500/10 bg-[#07111F] md:hidden">
          <div className="space-y-3 p-4">
            <Link
              href="/"
              className="block rounded-xl bg-cyan-500/10 px-4 py-3 font-medium text-cyan-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/tickets"
              className="block rounded-xl px-4 py-3 font-medium text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              All Tickets
            </Link>

            <Link
              href="/signin"
              className="block rounded-xl px-4 py-3 font-medium text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>

            <Button
              as={Link}
              href="/signup"
              className="w-full bg-cyan-500 text-white p-4 rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;