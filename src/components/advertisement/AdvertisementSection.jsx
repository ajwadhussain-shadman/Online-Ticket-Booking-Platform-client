import Link from "next/link";
import { getAdvertisedTicket } from "@/lib/shared/ticket/getAdvertisedTicket";
import AdvertisementCard from "./AdvertisementCard";

const AdvertisementSection = async () => {
  const tickets = await getAdvertisedTicket();

  return (
    <section className="bg-[#08111f] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Advertised
              </span>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Premium Routes
            </h2>

            <p className="mt-4 max-w-xl text-lg text-gray-400">
              Hand-picked deals with the best value and comfort.
            </p>

          </div>

          <Link
            href="/all-tickets"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            View All

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tickets.map((ticket) => (
            <AdvertisementCard
              key={ticket._id}
              ticket={ticket}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdvertisementSection;