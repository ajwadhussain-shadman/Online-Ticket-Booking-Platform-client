import Link from 'next/link';
import React from 'react';
import DeleteTicketModal from './DeleteTicketModal';

const MyTicketCard = ({ticket}) => {
    return (
        <div
                        key={ticket._id}
                        className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#091425]"
                    >
                        {/* Image */}
                        <img
                            src={ticket.image}
                            alt={ticket.title}
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-5">
                            {/* Status */}
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="line-clamp-1 text-lg font-bold text-white">
                                    {ticket.title}
                                </h2>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${ticket.verificationStatus === "approved"
                                        ? "bg-green-500/20 text-green-400"
                                        : ticket.verificationStatus === "rejected"
                                            ? "bg-red-500/20 text-red-400"
                                            : "bg-yellow-500/20 text-yellow-400"
                                        }`}
                                >
                                    {ticket.verificationStatus}
                                </span>
                            </div>

                            {/* Route */}
                            <p className="mb-2 text-sm text-gray-400">
                                {ticket.from} → {ticket.to}
                            </p>

                            {/* Transport */}
                            <p className="mb-4 text-sm text-cyan-400">
                                {ticket.transportType}
                            </p>

                            {/* Info */}
                            <div className="mb-5 grid grid-cols-2 gap-3">
                                <div className="rounded-xl bg-[#0D1B2A] p-3">
                                    <p className="text-xs text-gray-400">
                                        Price
                                    </p>

                                    <p className="font-semibold text-white">
                                        ৳{ticket.price}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-[#0D1B2A] p-3">
                                    <p className="text-xs text-gray-400">
                                        Quantity
                                    </p>

                                    <p className="font-semibold text-white">
                                        {ticket.quantity}
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-cols-2 gap-3">
                                {ticket.verificationStatus === "rejected" ? (
                                    <button
                                        disabled
                                        className="cursor-not-allowed rounded-xl bg-gray-700  font-medium text-gray-500"
                                    >
                                        Update
                                    </button>
                                ) : (
                                    <Link
                                        href={`/dashboard/vendor/update-ticket/${ticket._id}`}
                                        className="flex items-center justify-center rounded-xl bg-cyan-500  font-medium text-white transition hover:bg-cyan-600"
                                    >
                                        Update
                                    </Link>
                                )}

                                <DeleteTicketModal
                                    ticketId={ticket._id}
                                    isDisabled={
                                        ticket.verificationStatus === "rejected"
                                    }
                                />
                            </div>
                        </div>
                    </div>
    );
};

export default MyTicketCard;