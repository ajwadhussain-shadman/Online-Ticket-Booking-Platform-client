
import { getLatestTickets } from "@/lib/shared/ticket/getLatestTickets";


import LatestTicketCard from "./LatestTicketCard";

const LatestTicketsSection = async () => {
  const tickets = await getLatestTickets();

  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        
        <div className="mb-12">

          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Fresh Listings
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Latest Tickets
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Newly added tickets across all routes and operators.
          </p>

        </div>

        
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {tickets.map((ticket) => (
            <LatestTicketCard
              key={ticket._id}
              ticket={ticket}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestTicketsSection;