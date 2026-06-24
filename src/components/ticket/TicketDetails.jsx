import React from 'react';
import Countdown from './Countdown';
import BookTicketModal from './BookTicketModal';
import { verifyRole } from '@/lib/protected-route';

const TicketDetails = async ({ ticket }) => {
    const user = await verifyRole('user')
    const isExpired = new Date(ticket.departureDateTime) < new Date();
    const isSoldOut = ticket.quantity <= 0;
    return (
        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#091425] p-5">

            <div className="grid gap-8 lg:grid-cols-[420px_1fr]">

                {/* Left Side */}
                <div>
                    <img
                        src={ticket.image}
                        alt={ticket.title}
                        className="h-[320px] w-full rounded-2xl object-cover"
                    />
                </div>

                {/* Right Side */}
                <div>

                    {/* Title */}
                    <div className="mb-5 flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white">
                                {ticket.from} → {ticket.to}
                            </h1>

                            <div className="mt-2 flex flex-wrap gap-2">
                                {ticket.perks?.map((perk) => (
                                    <span
                                        key={perk}
                                        className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400"
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

                    {/* Price */}
                    <div className="mb-6">
                        <h2 className="text-4xl font-bold text-cyan-400">
                            ৳{ticket.price}
                            <span className="text-lg text-gray-400">
                                {" "}
                                / Seat
                            </span>
                        </h2>
                    </div>

                    {/* Info Grid */}
                    <div className="mb-6 grid gap-4 sm:grid-cols-2">

                        <div>
                            <p className="text-sm text-gray-500">
                                From
                            </p>

                            <p className="font-medium text-white">
                                {ticket.from}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                To
                            </p>

                            <p className="font-medium text-white">
                                {ticket.to}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Departure
                            </p>

                            <p className="font-medium text-white">
                                {new Date(
                                    ticket.departureDateTime
                                ).toLocaleString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Available Seats
                            </p>

                            <p className="font-medium text-white">
                                {ticket.quantity}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Vendor
                            </p>

                            <p className="font-medium text-white">
                                {ticket.vendorName}
                            </p>
                        </div>
                    </div>

                    {/* Perks */}
                    <div className="mb-8">
                        <h3 className="mb-3 text-lg font-semibold text-white">
                            Perks
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {ticket.perks?.map((perk) => (
                                <div
                                    key={perk}
                                    className="rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-2 text-sm text-white"
                                >
                                    {perk}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Countdown */}
                    <div className="mb-6 rounded-2xl border border-cyan-500/20 bg-[#0D1B2A] p-5">
                        <h3 className="mb-4 text-center text-sm text-gray-400">
                            Departure In
                        </h3>

                        <Countdown
                            departureDate={
                                ticket.departureDateTime
                            }
                        />
                    </div>

                    {/* Book Button */}
                    {!isExpired && !isSoldOut ? (
                        <BookTicketModal
                            ticket={ticket}
                            user={user}
                        />
                    ) : (
                        <button
                            disabled
                            className="w-full rounded-xl bg-gray-700 py-4 text-white"
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