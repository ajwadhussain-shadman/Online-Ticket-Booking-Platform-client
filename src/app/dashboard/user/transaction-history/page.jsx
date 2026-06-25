import { verifyRole } from '@/lib/protected-route';
import React from 'react';
import TransactionRow from './TransactionRow';
import { getUserPayments } from '@/lib/payment/getUserPayments';

const TransactionHistory = async () => {
    const user=await verifyRole('user');
    const payments=await getUserPayments(user.id);
    return (
      <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Transaction History
        </h1>

        <p className="mt-2 text-gray-400">
          View all your successful Stripe payments.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl border border-cyan-500/10 bg-[#111827]/70 backdrop-blur">
        <div className="overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr className="border-b border-white/10 text-left text-sm uppercase tracking-wider text-gray-500">
                <th className="px-6 py-5">Transaction ID</th>
                <th className="px-6 py-5">Ticket Title</th>
                <th className="px-6 py-5">Amount</th>
                <th className="px-6 py-5">Payment Date</th>
                <th className="px-6 py-5">Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <TransactionRow
                    key={payment._id}
                    payment={payment}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="py-16 text-center text-gray-400"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default TransactionHistory;