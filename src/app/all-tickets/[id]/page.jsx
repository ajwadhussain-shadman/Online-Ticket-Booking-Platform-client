
import TicketDetails from "@/components/ticket/TicketDetails";
import { getSingleTicket } from "@/lib/api/vendor";


const TicketDetailsPage = async ({ params }) => {
  const { id } = await params;

  const ticket = await getSingleTicket(id);

  return (
    <div className="min-h-screen bg-[#07111F] py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
          <span>Home</span>
          <span>›</span>
          <span>All Tickets</span>
          <span>›</span>
          <span className="text-white">
            Ticket Details
          </span>
        </div>

        <TicketDetails ticket={ticket} />
      </div>
    </div>
  );
};

export default TicketDetailsPage;