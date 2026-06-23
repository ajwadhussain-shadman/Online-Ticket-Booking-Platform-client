import Link from "next/link";

const TicketCard = ({ ticket }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#091425]">
      <img
        src={ticket.image}
        alt={ticket.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-white">
          {ticket.title}
        </h2>

        <p className="mb-2 text-gray-400">
          {ticket.from} → {ticket.to}
        </p>

        <p className="mb-4 text-cyan-400">
          {ticket.transportType}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {ticket.perks?.map((perk) => (
            <span
              key={perk}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400"
            >
              {perk}
            </span>
          ))}
        </div>

        <div className="space-y-2 text-sm text-gray-300">
          <p>
            <span className="font-semibold">
              Price:
            </span>{" "}
            ৳{ticket.price}
          </p>

          <p>
            <span className="font-semibold">
              Quantity:
            </span>{" "}
            {ticket.quantity}
          </p>

          <p>
            <span className="font-semibold">
              Departure:
            </span>{" "}
            {new Date(
              ticket.departureDateTime
            ).toLocaleString()}
          </p>
        </div>

        <Link
          href={`/tickets/${ticket._id}`}
          className="mt-6 flex h-12 items-center justify-center rounded-xl bg-cyan-500 font-medium text-white transition hover:bg-cyan-600"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;