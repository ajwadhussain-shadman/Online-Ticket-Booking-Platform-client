import React from 'react';
import Countdown from './Countdown';
import BookTicketModal from './BookTicketModal';
import { getUserSession } from '@/lib/getuser-data';


const TicketDetails = async ({ ticket }) => {
    const user= await getUserSession();
     
    const isExpired = new Date(ticket.departureDateTime) < new Date();
    const isSoldOut = ticket.quantity <= 0;
    return (
        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white p-5 shadow-sm dark:bg-[#091425] dark:shadow-none">

    <div className="grid gap-8 lg:grid-cols-[420px_1fr]">

        <div>
            <img
                src={ticket.image}
                alt={ticket.title}
                className="h-[320px] w-full rounded-2xl object-cover"
            />
        </div>

        <div>

            <div className="mb-5 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        {ticket.from} → {ticket.to}
                    </h1>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {ticket.perks?.map((perk) => (
                            <span
                                key={perk}
                                className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400"
                            >
                                {perk}
                            </span>
                        ))}
                    </div>
                </div>

                <span className="rounded-full bg-cyan-500 px-4 py-1 text-sm font-medium text-white">
                    {ticket.transportType}
                </span>
            </div>

            <div className="mb-6">
                <h2 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                    ৳{ticket.price}
                    <span className="text-lg text-slate-500 dark:text-gray-400">
                        {" "}
                        / Seat
                    </span>
                </h2>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-2">

                <div>
                    <p className="text-sm text-slate-500">
                        From
                    </p>

                    <p className="font-medium text-slate-900 dark:text-white">
                        {ticket.from}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500">
                        To
                    </p>

                    <p className="font-medium text-slate-900 dark:text-white">
                        {ticket.to}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500">
                        Departure
                    </p>

                    <p className="font-medium text-slate-900 dark:text-white">
                        {new Date(
                            ticket.departureDateTime
                        ).toLocaleString()}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500">
                        Available Seats
                    </p>

                    <p className="font-medium text-slate-900 dark:text-white">
                        {ticket.quantity}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500">
                        Vendor
                    </p>

                    <p className="font-medium text-slate-900 dark:text-white">
                        {ticket.vendorName}
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                    Perks
                </h3>

                <div className="flex flex-wrap gap-3">
                    {ticket.perks?.map((perk) => (
                        <div
                            key={perk}
                            className="rounded-xl border border-cyan-500/20 bg-slate-50 px-4 py-2 text-sm text-slate-800 dark:bg-[#0D1B2A] dark:text-white"
                        >
                            {perk}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-6 rounded-2xl border border-cyan-500/20 bg-slate-50 p-5 dark:bg-[#0D1B2A]">
                <h3 className="mb-4 text-center text-sm text-slate-500 dark:text-gray-400">
                    Departure In
                </h3>

                <Countdown
                    departureDate={
                        ticket.departureDateTime
                    }
                />
            </div>

            {!isExpired && !isSoldOut ? (
                <BookTicketModal
                    ticket={ticket}
                    user={user}
                />
            ) : (
                <button
                    disabled
                    className="w-full rounded-xl bg-gray-400 py-4 text-white dark:bg-gray-700"
                >
                    {isExpired
                        ? "Trip Expired"
                        : "Sold Out"}
                </button>
            )}

        </div>
    </div>
</div>
    );
};

export default TicketDetails;