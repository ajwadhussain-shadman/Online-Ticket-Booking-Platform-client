"use client";


import { updateTicket } from "@/lib/api/vendor-client";
import toast from "react-hot-toast";

const AdminTicketRow = ({ ticket }) => {
  const handleApprove = async () => {
    const result = await updateTicket(ticket._id, {
      verificationStatus: "approved",
    });

    if (result.modifiedCount > 0) {
      toast.success("Ticket Approved");
      window.location.reload();
    }
  };

  const handleReject = async () => {
    const result = await updateTicket(ticket._id, {
      verificationStatus: "rejected",
    });

    if (result.modifiedCount > 0) {
      toast.success("Ticket Rejected");
      window.location.reload();
    }
  };

  return (
    <tr className="border-b border-cyan-500/10">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={ticket.image}
            alt={ticket.title}
            className="h-14 w-14 rounded-lg object-cover"
          />

          <div>
            <h3 className="font-medium text-white">
              {ticket.title}
            </h3>

            <p className="text-sm text-gray-400">
              {ticket.transportType}
            </p>
          </div>
        </div>
      </td>

      <td className="p-4 text-gray-300">
        {ticket.vendorName}
      </td>

      <td className="p-4 text-gray-300">
        {ticket.from} → {ticket.to}
      </td>

      <td className="p-4 text-gray-300">
        ৳{ticket.price}
      </td>

      <td className="p-4 text-gray-300">
        {ticket.quantity}
      </td>

      <td className="p-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            ticket.verificationStatus === "approved"
              ? "bg-green-500/20 text-green-400"
              : ticket.verificationStatus === "rejected"
              ? "bg-red-500/20 text-red-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {ticket.verificationStatus}
        </span>
      </td>

      <td className="p-4">
        {ticket.verificationStatus === "pending" ? (
          <div className="flex gap-2">
            <button
              onClick={handleApprove}
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
            >
              Approve
            </button>

            <button
              onClick={handleReject}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
            >
              Reject
            </button>
          </div>
        ) : (
          <span className="text-sm text-gray-400">
            Action Completed
          </span>
        )}
      </td>
    </tr>
  );
};

export default AdminTicketRow;