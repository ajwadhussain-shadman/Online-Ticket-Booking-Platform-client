"use client";
import { updateBookingStatus } from "@/lib/bookings/updateBookingStatus";
import toast from "react-hot-toast";

const BookingRow = ({ booking }) => {
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
    <tr className="border-b border-white/5 transition hover:bg-white/5">
  {/* Passenger */}
  <td className="px-3 py-4 md:px-6 md:py-5">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">
        {booking.userName?.charAt(0)}
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {booking.userName}
        </h3>

        <p className="max-w-[180px] truncate text-sm text-gray-400">
          {booking.userEmail}
        </p>
      </div>
    </div>
  </td>

  {/* Ticket */}
  <td className="px-3 py-4 md:px-6 md:py-5">
    <div>
      <h4 className="font-medium text-white whitespace-nowrap">
        {booking.ticketTitle}
      </h4>

      <p className="text-sm text-gray-400 whitespace-nowrap">
        {booking.from} → {booking.to}
      </p>
    </div>
  </td>

  {/* Quantity */}
  <td className="px-3 py-4 md:px-6 md:py-5 font-medium text-white text-center">
    {booking.quantity}
  </td>

  {/* Total */}
  <td className="px-3 py-4 md:px-6 md:py-5">
    <span className="text-base md:text-lg font-bold text-white whitespace-nowrap">
      ৳{booking.totalPrice}
    </span>
  </td>

  {/* Status */}
  <td className="px-3 py-4 md:px-6 md:py-5">
    <span
      className={`inline-block rounded-full px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold capitalize ${
        statusClasses[booking.status]
      }`}
    >
      {booking.status}
    </span>
  </td>

  {/* Actions */}
  <td className="px-3 py-4 md:px-6 md:py-5">
    {booking.status === "pending" ? (
      <div className="flex flex-col xl:flex-row gap-2">
        <button
          onClick={() =>
            handleStatus("accepted")
          }
          className="rounded-xl border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm font-medium text-green-400 transition hover:bg-green-500/20"
        >
          ✓ Accept
        </button>

        <button
          onClick={() =>
            handleStatus("rejected")
          }
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
        >
          ✕ Reject
        </button>
      </div>
    ) : (
      <span className="text-sm text-gray-500">
        Completed
      </span>
    )}
  </td>
</tr>
  );
};

export default BookingRow;