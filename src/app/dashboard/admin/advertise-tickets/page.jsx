import { verifyRole } from '@/lib/protected-route';
import React from 'react';
import SmallDeviceAdvertiseRow from './SmallDeviceAdvertiseRow';
import AdvertiseRow from './AdvertiseRow';
import { getApprovedTickets } from '@/lib/shared/getApprovedTickets';

const AdvertiseTickets = async () => {
    const user=await verifyRole('admin');
      const tickets = await getApprovedTickets();
    return (
       <div className="space-y-8">

      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Advertise Tickets
        </h1>

        <p className="mt-2 text-gray-400">
          Feature up to 6 approved tickets on the homepage.
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-3xl border border-cyan-500/10 bg-[#111827]/70 md:block">
        <table className="w-full">

          <thead>
            <tr className="border-b border-white/10 text-left text-sm uppercase tracking-wider text-gray-500">
              <th className="px-6 py-5">Route</th>
              <th className="px-6 py-5">Vendor</th>
              <th className="px-6 py-5">Type</th>
              <th className="px-6 py-5">Price</th>
              <th className="px-6 py-5">Seats</th>
              <th className="px-6 py-5">Advertise</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <AdvertiseRow
                key={ticket._id}
                ticket={ticket}
              />
            ))}
          </tbody>

        </table>
      </div>

      {/* Mobile */}
      <div className="space-y-4 md:hidden">
        {tickets.map((ticket) => (
          <SmallDeviceAdvertiseRow
            key={ticket._id}
            ticket={ticket}
          />
        ))}
      </div>

      {tickets.length === 0 && (
        <div className="rounded-3xl border border-cyan-500/10 bg-[#111827]/70 py-16 text-center">
          <h2 className="text-xl font-semibold text-white">
            No Approved Tickets
          </h2>

          <p className="mt-2 text-gray-400">
            There are currently no approved tickets available for advertisement.
          </p>
        </div>
      )}

    </div>
    );
};

export default AdvertiseTickets;