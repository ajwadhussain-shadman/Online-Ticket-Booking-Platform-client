import Link from "next/link";

const LatestTicketCard = ({ ticket }) => {
  const transportColor = {
    Bus: "bg-yellow-500/40 text-yellow-800 border border-yellow-500/30",
    Train: "bg-green-500/20 text-green-800 border border-green-500/30",
    Flight: "bg-cyan-500/20 text-cyan-800 border border-cyan-500/30",
    Launch: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40">

      
      <div className="relative h-60 overflow-hidden">

        <img
          src={ticket.image}
          alt={ticket.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent" />

        
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${transportColor[ticket.transportType]}`}
        >
          {ticket.transportType}
        </span>

        
        <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
          NEW
        </span>

      

       
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

          <h3 className="font-bold text-white">
            {ticket.from}
          </h3>

          <div className="mx-3 h-px flex-1 border-t border-dashed border-gray-500" />

          <h3 className="font-bold text-white">
            {ticket.to}
          </h3>

        </div>

      </div>

  
      <div className="space-y-5 p-5">

  
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-white">
            {ticket.title}
          </h2>

          <div className="flex justify-between items-center ">
            <p className="mt-2 text-sm text-gray-400">
            {new Date(ticket.departureDateTime).toLocaleDateString()}
          </p>
           
        <span className=" bottom-4 right-4 rounded-full border border-yellow-500/30 bg-yellow-500/20 px-3 py-1 mt-2 text-xs font-semibold text-yellow-400">
          {ticket.quantity} Seats
        </span>
          </div>
        </div>

       
        <div className="flex flex-wrap gap-2">
          {ticket.perks.slice(0, 3).map((perk) => (
            <span
              key={perk}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
            >
              {perk}
            </span>
          ))}
        </div>

     
        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs uppercase text-gray-500">
              Price
            </p>

            <h3 className="text-3xl font-bold text-white">
              ৳{ticket.price}
            </h3>
          </div>

          <Link
            href={`/all-tickets/${ticket._id}`}
            className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            See Details
          </Link>

        </div>

      </div>
    </div>
  );
};

export default LatestTicketCard;