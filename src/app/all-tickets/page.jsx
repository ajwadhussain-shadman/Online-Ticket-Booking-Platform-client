import React from "react";
import TicketCard from "./TicketCard";
import { getApprovedTickets } from "@/lib/shared/getApprovedTickets";
import Link from "next/link";

const AllTicketsPage = async ({ searchParams }) => {
    const filters = await searchParams;

    const querySearch = new URLSearchParams(filters);
    querySearch.set("verificationStatus", "approved");

    const queryString = querySearch.toString();

    const tickets = await getApprovedTickets(queryString);

    return (
        <div className="min-h-screen bg-[#07111F]">
            <div className="mx-auto max-w-7xl px-4 py-8">

                
                <div className="mb-8">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                        All Tickets
                    </p>

                    <h1 className="text-3xl font-bold text-white md:text-4xl">
                        Find Your Perfect Journey
                    </h1>

                    <p className="mt-2 text-gray-400">
                        Browse all verified and approved tickets.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

                    <aside className="h-fit rounded-3xl border border-cyan-500/20 bg-[#091425] p-6">

                        <h2 className="mb-6 text-lg font-semibold text-white">
                            Filters
                        </h2>

                        <form>

                           
                            <div className="mb-8">
                                <h3 className="mb-4 text-sm font-semibold text-gray-300">
                                    Transport Type
                                </h3>

                                <div className="space-y-3">
                                    {["Bus", "Train", "Launch", "Plane"].map(
                                        (type) => (
                                            <label
                                                key={type}
                                                className="flex items-center gap-3 text-gray-300"
                                            >
                                                <input
                                                    type="radio"
                                                    name="transportType"
                                                    value={type}
                                                    defaultChecked={
                                                        filters.transportType === type
                                                    }
                                                    className="accent-cyan-500"
                                                />

                                                {type}
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>

                       
                            <div className="mb-8">
                                <h3 className="mb-4 text-sm font-semibold text-gray-300">
                                    Sort Price
                                </h3>

                                <select
                                    name="sort"
                                    defaultValue={filters.sort || ""}
                                    className="w-full rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none"
                                >
                                    <option value="">
                                        Default
                                    </option>

                                    <option value="low">
                                        Low → High
                                    </option>

                                    <option value="high">
                                        High → Low
                                    </option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-white transition hover:bg-cyan-600"
                            >
                                Apply Filters
                            </button>
                            {Object.keys(filters).length > 0 && (
                                <div className="mt-3">
                                    <Link
                                        href="/all-tickets"
                                        className="block w-full rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center font-medium text-red-400 transition hover:bg-red-500/20"
                                    >
                                        Clear Filters
                                    </Link>
                                </div>
                            )}
                        </form>
                    </aside>

                    
                    <section>

                       
                        <form className="mb-6 rounded-3xl border border-cyan-500/20 bg-[#091425] p-5">
                            <div className="grid gap-4 md:grid-cols-3">

                                <input
                                    name="from"
                                    defaultValue={filters.from || ""}
                                    placeholder="From"
                                    className="rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none placeholder:text-gray-500"
                                />

                                <input
                                    name="to"
                                    defaultValue={filters.to || ""}
                                    placeholder="To"
                                    className="rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none placeholder:text-gray-500"
                                />


                                <button
                                    type="submit"
                                    className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-white">
                                Available Tickets
                            </h2>

                            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                                {tickets.length} Results
                            </span>
                        </div>

                       
                        {tickets.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {tickets.map((ticket) => (
                                    <TicketCard
                                        key={ticket._id}
                                        ticket={ticket}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#091425] p-10 text-center">
                                <div className="mb-4 text-6xl">
                                    🎫
                                </div>

                                <h2 className="mb-2 text-2xl font-bold text-white">
                                    No Tickets Found
                                </h2>

                                <p className="max-w-md text-gray-400">
                                    We couldn't find any tickets matching your
                                    search criteria. Try changing the route,
                                    transport type, or sorting options.
                                </p>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AllTicketsPage;