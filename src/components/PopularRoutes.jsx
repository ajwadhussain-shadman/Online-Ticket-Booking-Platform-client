import Link from "next/link";

const routes = [
  {
    id: 1,
    from: "Dhaka",
    to: "Cox's Bazar",
    tag: "Most Popular",
    tickets: "1,240",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    from: "Dhaka",
    to: "Sylhet",
    tag: "Tea Country",
    tickets: "980",
    image:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    from: "Dhaka",
    to: "Chittagong",
    tag: "Port City",
    tickets: "1,560",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    from: "Dhaka",
    to: "Khulna",
    tag: "Sundarbans",
    tickets: "620",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
  },
];

const PopularRoutes = () => {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        <div className="mb-12">

          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Trending
            </span>
          </div>

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Popular Routes
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Most-booked journeys by travelers this season.
          </p>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {routes.map((route) => (
            <Link
              key={route.id}
              href="/tickets"
              className="group relative h-[260px] overflow-hidden rounded-3xl border border-white/10"
            >
              <img
                src={route.image}
                alt={route.to}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

      
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111F] via-[#08111F]/40 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-md">
                {route.tag}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6">

                <h3 className="text-3xl font-bold text-white">
                  {route.from}
                  <span className="mx-2 text-cyan-400">→</span>
                  {route.to}
                </h3>

                <p className="mt-2 text-lg text-gray-300">
                  {route.tickets} tickets available
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PopularRoutes;