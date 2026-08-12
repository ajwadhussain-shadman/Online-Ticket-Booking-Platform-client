import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 transition-colors duration-300 dark:bg-[#07111F]">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px] dark:bg-cyan-500/10" />

      {/* Decorative Circles */}
      <div className="absolute left-10 top-16 h-36 w-36 rounded-full border border-cyan-500/10 dark:border-cyan-500/10" />

      <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full border border-cyan-500/10 dark:border-cyan-500/10" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">

        {/* Icon */}
        <div
          className="
            mx-auto mb-8 flex h-28 w-28 items-center justify-center
            rounded-full
            bg-cyan-500/10
            shadow-2xl shadow-cyan-500/20
            dark:bg-cyan-500/10
            dark:shadow-cyan-500/20
          "
        >
          <FaTicketAlt className="text-6xl text-cyan-500 dark:text-cyan-400" />
        </div>

        {/* 404 */}
        <h1
          className="
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-cyan-400
            bg-clip-text
            text-8xl
            font-black
            text-transparent
            md:text-9xl
          "
        >
          404
        </h1>

        {/* Heading */}
        <h2
          className="
            mt-6
            text-3xl
            font-bold
            text-slate-900
            dark:text-white
            md:text-5xl
          "
        >
          Ticket Not Found
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-xl
            text-lg
            leading-8
            text-slate-600
            dark:text-gray-400
          "
        >
          Looks like you've boarded the wrong route. The page you're looking
          for doesn't exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          {/* Back to Home */}
          <Link
            href="/"
            className="
              rounded-full
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-cyan-600
              hover:shadow-lg
              hover:shadow-cyan-500/30
            "
          >
            Back to Home
          </Link>

          {/* Browse Tickets */}
          <Link
            href="/all-tickets"
            className="
              rounded-full
              border
              border-cyan-500/40
              bg-cyan-500/5
              px-8
              py-4
              font-semibold
              text-cyan-600
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/10
              dark:border-cyan-500/30
              dark:bg-cyan-500/10
              dark:text-cyan-400
              dark:hover:bg-cyan-500/20
            "
          >
            Browse Tickets
          </Link>

        </div>

        {/* Bottom Text */}
        <p
          className="
            mt-12
            text-sm
            tracking-wide
            text-slate-500
            dark:text-gray-500
          "
        >
          TicketBari • Your Trusted Journey Partner
        </p>

      </div>
    </div>
  );
};

export default NotFound;