"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { toggleAdvertise } from "@/lib/shared/ticket/toggleAdvertise";
import { useRouter } from "next/navigation";

const SmallDeviceAdvertiseRow = ({ ticket }) => {
    
    const [isAdvertised, setIsAdvertised] = useState(ticket.isAdvertised);

    const router = useRouter()


    const handleToggle = async () => {

        const checked = !isAdvertised;
        setIsAdvertised(checked)
        const result = await toggleAdvertise(ticket._id, checked);

        if (result.modifiedCount > 0) {
               toast.success(checked ? "Ticket Advertised" : "Advertisement Removed");
             router.refresh();
        } else if (result.message) {
              setIsAdvertised(!checked);
                toast.error(result.message);
        }
    };

    return (
        <div className="rounded-2xl border border-cyan-500/10 bg-[#111827]/70 p-5">

            <div className="flex items-center justify-between">
                <h2 className="font-bold text-white">
                    {ticket.from} → {ticket.to}
                </h2>

                <button
                    onClick={handleToggle}
                    role="switch"
                    aria-checked={isAdvertised}
                    className="flex items-center gap-2"
                >
                    <div
                        className={`relative h-6 w-12 rounded-full transition-colors duration-300 ${isAdvertised
                                ? "bg-cyan-500"
                                : "bg-gray-600"
                            }`}
                    >
                        <div
                            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${isAdvertised
                                    ? "translate-x-6"
                                    : "translate-x-0"
                                }`}
                        />
                    </div>
                </button>
            </div>

            <p className="mt-2 text-sm text-gray-400">
                {ticket.title}
            </p>

           
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">

                <div>
                    <p className="text-gray-500">
                        Vendor
                    </p>
                    <p className="text-white">
                        {ticket.vendorName}
                    </p>
                </div>

                <div>
                    <p className="text-gray-500">
                        Type
                    </p>
                    <p className="text-white">
                        {ticket.transportType}
                    </p>
                </div>

                <div>
                    <p className="text-gray-500">
                        Price
                    </p>
                    <p className="font-semibold text-cyan-400">
                        ৳{ticket.price}
                    </p>
                </div>

                <div>
                    <p className="text-gray-500">
                        Seats
                    </p>
                    <p className="text-white">
                        {ticket.quantity}
                    </p>
                </div>

            </div>

           
            <div className="mt-5 text-center">
                <span
                    className={`text-sm font-medium ${isAdvertised
                            ? "text-cyan-400"
                            : "text-gray-400"
                        }`}
                >
                    {isAdvertised
                        ? "Advertised"
                        : "Not Advertised"}
                </span>
            </div>

        </div>
    );
};

export default SmallDeviceAdvertiseRow;