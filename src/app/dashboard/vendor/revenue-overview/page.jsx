import { getVendorRevenue } from '@/lib/api/vendor';
import { verifyRole } from '@/lib/protected-route';
import React from 'react';
import TicketChart from './TicketChart';

const RevenueOverview = async () => {
     const user=await verifyRole('vendor');
     const revenue=await getVendorRevenue(user.id);
    return (
       <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Revenue Overview
        </h1>

        <p className="mt-2 text-gray-400">
          Monitor your ticket sales and earnings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-cyan-500/10 bg-[#111827]/70 p-6 backdrop-blur">
          <p className="text-sm text-gray-400">
            Total Tickets Added
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {revenue.totalTicketsAdded}
          </h2>
        </div>

        <div className="rounded-3xl border border-green-500/10 bg-[#111827]/70 p-6 backdrop-blur">
          <p className="text-sm text-gray-400">
            Tickets Sold
          </p>

          <h2 className="mt-3 text-4xl font-bold text-green-400">
            {revenue.totalSold}
          </h2>
        </div>

        <div className="rounded-3xl border border-yellow-500/10 bg-[#111827]/70 p-6 backdrop-blur">
          <p className="text-sm text-gray-400">
            Total Revenue
          </p>

          <h2 className="mt-3 text-4xl font-bold text-yellow-400">
            ৳{revenue.totalRevenue.toLocaleString()}
          </h2>
        </div>
      </div>

      <TicketChart revenue={revenue} />
    </div>
    );
};

export default RevenueOverview; 