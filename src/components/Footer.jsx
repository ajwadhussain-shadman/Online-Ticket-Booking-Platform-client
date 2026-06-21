import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiStripe } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t border-cyan-500/10 bg-[#07111F]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1 */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/assets/logo.png"
                alt="TicketBari"
                width={40}
                height={40}
              />

              <h2 className="text-2xl font-bold">
                <span className="text-white">Ticket</span>
                <span className="text-cyan-400">Bari</span>
              </h2>
            </div>

            <p className="leading-relaxed text-gray-400">
              Book bus, train, launch & flight tickets easily across
              Bangladesh with a secure and seamless experience.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="/tickets"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                All Tickets
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Contact Us
              </Link>

              <Link
                href="/about"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                About
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Info
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MdEmail className="text-cyan-400" />
                support@ticketbari.com
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <FaPhoneAlt className="text-cyan-400" />
                +880 1234 567890
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <FaFacebookF className="text-cyan-400" />
                facebook.com/ticketbari
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Payment Methods
            </h3>

            <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/10 bg-white/5 p-4">
              <SiStripe className="text-4xl text-cyan-400" />
              <div>
                <p className="font-medium text-white">Stripe</p>
                <p className="text-sm text-gray-400">
                  Secure Online Payments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-cyan-500/10 pt-6 text-center text-gray-500">
          © 2025 TicketBari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;