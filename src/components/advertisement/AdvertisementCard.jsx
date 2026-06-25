import Link from "next/link";

const AdvertisementCard = ({ ticket }) => {
  const transportColor = {
    Bus: "bg-yellow-500/20 text-yellow-400",
    Train: "bg-green-500/20 text-green-400",
    Flight: "bg-cyan-500/20 text-cyan-400",
    Launch: "bg-purple-500/20 text-purple-400",
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-cyan-500/10 bg-[#091425] transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40">

      <div className="relative overflow-hidden">
        <img
          src={ticket.image}
          alt={ticket.title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          Featured
        </span>

        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${transportColor[ticket.transportType]}`}
        >
          {ticket.transportType}
        </span>
      </div>

      <div className="space-y-5 p-6">

        <div>
          <h3 className="text-xl font-bold text-white">
            {ticket.title}
          </h3>

          <p className="mt-2 text-gray-400">
            {ticket.from} → {ticket.to}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {ticket.perks.map((perk) => (
            <span
              key={perk}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
            >
              {perk}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-xl bg-[#0D1B2A] p-4">

          <div>
            <p className="text-xs text-gray-400">
              Price
            </p>

            <p className="text-2xl font-bold text-cyan-400">
              ৳{ticket.price}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">
              Seats
            </p>

            <p className="text-lg font-semibold text-white">
              {ticket.quantity}
            </p>
          </div>

        </div>

        <Link
          href={`/all-tickets/${ticket._id}`}
          className="block rounded-xl bg-cyan-500 py-3 text-center font-semibold text-white transition hover:bg-cyan-600"
        >
          See Details
        </Link>

      </div>
    </div>
  );
};

export default AdvertisementCard;