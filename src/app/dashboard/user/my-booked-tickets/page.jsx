import { verifyRole } from "@/lib/protected-route";

import BookingCard from "@/components/dashboard-component/BookingCard";
import { getUserBookings } from "@/lib/bookings/getUserBookings";

const MyBookedTickets = async () => {
  const user = await verifyRole("user");

  const bookings =
    await getUserBookings(user.id);

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-white">
        My Booked Tickets
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {bookings.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={booking}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookedTickets;