import AdminTicketRow from '@/components/dashboard-component/AdminTicketRow';
import { verifyRole } from '@/lib/protected-route';
import { getAdminAllTickets, getAllTickets } from '@/lib/shared/getAllTickets';
import React from 'react';

const ManageTickets = async () => {
    const user=await verifyRole('admin');
    const tickets = await getAdminAllTickets();
   

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Manage Tickets
        </h1>

        <p className="mt-2 text-gray-400">
          Approve or reject vendor submitted tickets
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-cyan-500/20 bg-[#091425]">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="border-b border-cyan-500/20 text-left">
              <th className="p-4 text-gray-300">Ticket</th>
              <th className="p-4 text-gray-300">Vendor</th>
              <th className="p-4 text-gray-300">Route</th>
              <th className="p-4 text-gray-300">Price</th>
              <th className="p-4 text-gray-300">Quantity</th>
              <th className="p-4 text-gray-300">Status</th>
              <th className="p-4 text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <AdminTicketRow
                key={ticket._id}
                ticket={ticket}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ManageTickets;