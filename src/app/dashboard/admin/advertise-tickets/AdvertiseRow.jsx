"use client";

import { useState } from "react";
import { toggleAdvertise } from "@/lib/shared/ticket/toggleAdvertise";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AdvertiseRow = ({ ticket }) => {

    const router=useRouter();

  const [isAdvertised, setIsAdvertised] = useState(ticket.isAdvertised);

  const handleToggle = async () => {
    const checked = !isAdvertised;
      setIsAdvertised(checked);

    const result = await toggleAdvertise(ticket._id, checked);

    if (result.modifiedCount > 0) {
      toast.success(checked ? "Ticket Advertised" : "Advertisement Removed");
           router.refresh();
    } else if (result.message) {
         setIsAdvertised(!checked);
         
          toast.error(result.message);
    }
  };

  const typeColor = {
    Bus: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    Train: "bg-green-500/15 text-green-400 border border-green-500/30",
    Flight: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
    Launch: "bg-purple-500/15 text-purple-400 border border-purple-500/30",
  };

  return (
    <tr className="border-b border-white/5 hover:bg-white/5 transition">
      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold text-white">
            {ticket.from} → {ticket.to}
          </h3>
          <p className="text-sm text-gray-400">{ticket.title}</p>
        </div>
      </td>

      <td className="px-6 py-5 text-gray-300">{ticket.vendorName}</td>

      <td className="px-6 py-5">
        <span className={`rounded-full px-4 py-2 text-sm font-medium ${typeColor[ticket.transportType]}`}>
          {ticket.transportType}
        </span>
      </td>

      <td className="px-6 py-5 font-semibold text-white">৳{ticket.price}</td>

      <td className="px-6 py-5 text-gray-300">{ticket.quantity}</td>

      <td className="px-6 py-5">
        <button
          onClick={handleToggle}
          role="switch"
          aria-checked={isAdvertised}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isAdvertised ? "bg-blue-600" : "bg-gray-600"}`}>
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${isAdvertised ? "translate-x-6" : "translate-x-0"}`} />
          </div>
          <span className="text-sm text-gray-400">
            {isAdvertised ? "Advertised" : "Not Advertised"}
          </span>
        </button>
      </td>
    </tr>
  );
};

export default AdvertiseRow;