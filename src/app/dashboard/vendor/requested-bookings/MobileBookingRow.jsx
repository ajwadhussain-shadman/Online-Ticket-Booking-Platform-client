'use client'
import React from 'react';

const MobileBookingRow = ({booking}) => {
     const handleStatus = async (status) => 
        {
          const result =await updateBookingStatus( booking._id,status );
    
        if (result.modifiedCount > 0) {
          toast.success(
            `Booking ${status}`
          );
    
          window.location.reload();
        }
      };
      const statusClasses = {
        pending:
          "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
        accepted:
          "bg-green-500/15 text-green-400 border border-green-500/30",
        rejected:
          "bg-red-500/15 text-red-400 border border-red-500/30",
        paid:
          "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
      };
    return (
       
    <tr className="border-b border-white/10">
      <td className="p-4">
        <div className="space-y-3">

          {/* Passenger */}
          <div>
            <h3 className="font-semibold text-white">
              {booking.userName}
            </h3>

            <p className="text-sm text-gray-400">
              {booking.userEmail}
            </p>
          </div>

          {/* Ticket */}
          <div>
            <p className="font-medium text-white">
              {booking.ticketTitle}
            </p>

            <p className="text-sm text-gray-400">
              {booking.from} → {booking.to}
            </p>
          </div>

          {/* Quantity + Total */}
          <div className="flex justify-between">
            <span className="text-gray-400">
              Qty: {booking.quantity}
            </span>

            <span className="font-semibold text-cyan-400">
              ৳{booking.totalPrice}
            </span>
          </div>

          {/* Status */}
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${
              statusClasses[booking.status]
            }`}
          >
            {booking.status}
          </span>

          {/* Actions */}
          {booking.status === "pending" && (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() =>
                  handleStatus("accepted")
                }
                className="rounded-lg border border-green-500/30 bg-green-500/10 py-2 text-green-400"
              >
                Accept
              </button>

              <button
                onClick={() =>
                  handleStatus("rejected")
                }
                className="rounded-lg border border-red-500/30 bg-red-500/10 py-2 text-red-400"
              >
                Reject
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  
    );
};

export default MobileBookingRow;