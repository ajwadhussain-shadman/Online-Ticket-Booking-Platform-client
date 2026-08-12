import Link from 'next/link';
import React from 'react';
import DeleteTicketModal from './DeleteTicketModal';

const MyTicketCard = ({ticket}) => {
    return (
        <div
    key={ticket._id}
    className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white shadow-sm dark:bg-[#091425] dark:shadow-none"
>
    <img
        src={ticket.image}
        alt={ticket.title}
        className="h-56 w-full object-cover"
    />

    <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
            <h2 className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white">
                {ticket.title}
            </h2>

            <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${ticket.verificationStatus === "approved"
                    ? "bg-green-500/20 text-green-600 dark:text-green-400"
                    : ticket.verificationStatus === "rejected"
                        ? "bg-red-500/20 text-red-600 dark:text-red-400"
                        : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                    }`}
            >
                {ticket.verificationStatus}
            </span>
        </div>

        <p className="mb-2 text-sm text-slate-600 dark:text-gray-400">
            {ticket.from} → {ticket.to}
        </p>

        <p className="mb-4 text-sm text-cyan-600 dark:text-cyan-400">
            {ticket.transportType}
        </p>

        <div className="mb-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-3 dark:bg-[#0D1B2A]">
                <p className="text-xs text-slate-500 dark:text-gray-400">
                    Price
                </p>

                <p className="font-semibold text-slate-900 dark:text-white">
                    ৳{ticket.price}
                </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 dark:bg-[#0D1B2A]">
                <p className="text-xs text-slate-500 dark:text-gray-400">
                    Quantity
                </p>

                <p className="font-semibold text-slate-900 dark:text-white">
                    {ticket.quantity}
                </p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
            {ticket.verificationStatus === "rejected" ? (
                <button
                    disabled
                    className="cursor-not-allowed rounded-xl bg-slate-200 font-medium text-slate-400 dark:bg-gray-700 dark:text-gray-500"
                >
                    Update
                </button>
            ) : (
                <Link
                    href={`/dashboard/vendor/update-ticket/${ticket._id}`}
                    className="flex items-center justify-center rounded-xl bg-cyan-500 font-medium text-white transition hover:bg-cyan-600"
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