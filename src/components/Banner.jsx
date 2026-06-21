import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[500px] md:h-[850px]">
        <Image
          src="/assets/banner.jpeg"
          alt="TicketBari Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/90 via-[#07111F]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Bangladesh's Premium Ticket Platform
            </span>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Travel Anywhere,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Book in Seconds
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Book bus, train, launch, and plane tickets across Bangladesh
              with a fast, secure, and reliable booking experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105">
                Explore Tickets
              </button>

              <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">25K+</h3>
                <p className="text-gray-400">Tickets Booked</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">200+</h3>
                <p className="text-gray-400">Routes</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
                <p className="text-gray-400">Vendors</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">10K+</h3>
                <p className="text-gray-400">Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;