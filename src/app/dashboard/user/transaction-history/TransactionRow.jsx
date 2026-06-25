import React from 'react';

const TransactionRow = ({payment}) => {
    return (
         <tr className="border-b border-white/5 transition hover:bg-white/5">
      <td className="px-6 py-5">
        <span className="font-medium text-cyan-400">
          {payment.transactionId}
        </span>
      </td>

      <td className="px-6 py-5">
        <h3 className="font-semibold text-white">
          {payment.ticketTitle}
        </h3>
      </td>
      <td className="px-6 py-5">
        <span className="text-lg font-bold text-white">
          ৳{payment.amount}
        </span>
      </td>

      <td className="px-6 py-5 text-gray-300">
        {new Date(payment.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </td>

      <td className="px-6 py-5">
        <span className="rounded-full border border-green-500/30 bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-400">
          Paid
        </span>
      </td>
    </tr>
    );
};

export default TransactionRow;