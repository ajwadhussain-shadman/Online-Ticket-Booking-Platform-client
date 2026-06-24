import { getVendorBookings } from '@/lib/bookings/getVendorBookings';
import { verifyRole } from '@/lib/protected-route';
import React from 'react';
import BookingRow from './BookingRow';
import MobileBookingRow from './MobileBookingRow';
import TicketCard from '@/app/all-tickets/TicketCard';

const RequestedBookings = async () => {
     const user=await verifyRole('vendor');
     const bookings =await getVendorBookings(user.id);
    return (
       <div className="space-y-6">
  <div>
    <h1 className="text-4xl font-bold text-white">
      Booking Requests
    </h1>

    <p className="mt-2 text-gray-400">
      Manage and respond to booking requests
    </p>
  </div>

  <div className="overflow-hidden rounded-3xl border border-cyan-500/10 bg-[#111827]/70 backdrop-blur">
    <div className="overflow-x-auto">
      <div className='hidden md:block'>
        <table className="w-full ">
        <thead>
          <tr className="border-b border-white/10 text-left text-sm uppercase tracking-wider text-gray-500">
            <th className="px-6 py-5">Passenger</th>
            <th className="px-6 py-5">Ticket</th>
            <th className="px-6 py-5">Quantity</th>
            <th className="px-6 py-5">Total</th>
            <th className="px-6 py-5">Status</th>
            <th className="px-6 py-5">Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
            />
          ))}
        </tbody>
      </table>
      </div>
      {/* Mobile */}
        <div className="md:hidden">
  <table>
    <tbody>
  {bookings.map((booking) => (<MobileBookingRow key={booking._id}  booking={booking}></MobileBookingRow>))}
  </tbody>
  </table>
    </div>
  
      

    </div>
  </div>
</div>
    );
};

export default RequestedBookings; 