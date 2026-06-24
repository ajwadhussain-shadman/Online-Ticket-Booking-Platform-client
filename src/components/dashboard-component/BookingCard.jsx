"use client";

import { Card } from "@heroui/react";
import Countdown from "../ticket/Countdown";

const BookingCard = ({ booking }) => {
    const isExpired =new Date(booking.departureDateTime) <  new Date();
const showCountdown = booking.status !== "rejected" &&  booking.status !== "paid";
    const showPayButton =booking.status === "accepted" &&  !isExpired;

    const statusStyles = {
        pending:"bg-yellow-700/20 text-yellow-400",
        accepted:"bg-green-500/20 text-green-400",
        rejected:"bg-red-500/20 text-red-400",
        paid:"bg-cyan-500/20 text-cyan-400",
    };
   const handlePayment = async () => {
  const res = await fetch("/api/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: booking._id,
      ticketId: booking.ticketId,
      userId: booking.userId,
      quantity: booking.quantity, 
      ticketTitle: booking.ticketTitle,
      totalPrice: booking.totalPrice,
    }),
  });

  const data = await res.json();

  window.location.href = data.url;
};

    return (
        <Card className="overflow-hidden border border-cyan-500/20 bg-[#091425] transition-all hover:border-cyan-500/50">
          
            <div className="relative">
                <img
                    src={booking.ticketImage}
                    alt={booking.ticketTitle}
                    className="h-40 w-full object-cover"
                />

                <span
                    className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold capitalize ${statusStyles[booking.status]
                        }`}
                >
                    {booking.status}
                </span>
            </div>

            <div className="p-4">
                {/* Title */}
                <div className="mb-4">
                    <h2 className="line-clamp-1 text-lg font-bold text-white">
                        {booking.ticketTitle}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                        {booking.from} → {booking.to}
                    </p>
                </div>

                {/* Quantity + Price */}
                <div className="mb-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-[#0D1B2A] p-3">
                        <p className="text-[11px] text-gray-400">
                            Quantity
                        </p>

                        <p className="font-semibold text-white">
                            {booking.quantity}
                        </p>
                    </div>

                    <div className="rounded-lg bg-[#0D1B2A] p-3">
                        <p className="text-[11px] text-gray-400">
                            Total
                        </p>

                        <p className="font-semibold text-cyan-400">
                            ৳{booking.totalPrice}
                        </p>
                    </div>
                </div>

                {/* Departure */}
                <div className="mb-4">
                    <p className="text-[11px] text-gray-400">
                        Departure
                    </p>

                    <p className="mt-1 text-sm text-white">
                        {new Date(
                            booking.departureDateTime
                        ).toLocaleDateString()}
                    </p>
                </div>

                {/* Countdown */}
                {showCountdown && (
                    <div className="mb-4 rounded-lg bg-[#0D1B2A] p-3">
                        <p className="mb-2 text-center text-[11px] text-gray-400">
                            Departure In
                        </p>

                        <Countdown
                            compact
                            departureDate={
                                booking.departureDateTime
                            }
                        />
                    </div>
                )}

                {/* Status Messages */}
                {booking.status ===
                    "rejected" && (
                        <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-center text-sm text-red-400">
                            Booking Rejected
                        </div>
                    )}

                {booking.status === "paid" && (
                    <div className="mb-4 rounded-lg bg-cyan-500/10 p-3 text-center text-sm text-cyan-400">
                        Payment Completed
                    </div>
                )}

                {/* Action */}
                {showPayButton ? (
                    <button
                    
                      onClick={handlePayment}
                    className="w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600">
                        Pay Now
                    </button>
                ) : booking.status ===
                    "accepted" &&
                    isExpired ? (
                    <button
                        disabled
                        className="w-full rounded-lg bg-gray-700 py-2.5 text-sm font-semibold text-white opacity-50"
                    >
                        Trip Expired
                    </button>
                ) : (
                    <button
                        disabled
                        className="w-full rounded-lg bg-[#0D1B2A] py-2.5 text-sm font-medium text-gray-400"
                    >
                        {booking.status === "pending"
                            ? "Awaiting Approval"
                            : booking.status === "rejected"
                                ? "Rejected"
                                : booking.status === "paid"
                                    ? "Paid"
                                    : "Unavailable"}
                    </button>
                )}
            </div>
        </Card>
    );
};

export default BookingCard;