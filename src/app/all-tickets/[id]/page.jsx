
import TicketDetails from "@/components/ticket/TicketDetails";
import { getSingleTicket } from "@/lib/api/vendor-server";
import { getUserSession } from "@/lib/getuser-data";
import { redirect } from "next/navigation";



const TicketDetailsPage = async ({ params }) => {
  const user= await getUserSession();
   if(!user || null){
    redirect('/auth/sign-in')
   }
  const { id } = await params;
   
  const ticket = await getSingleTicket(id);
  console.log('ticket',ticket)

  return (
    <div className="min-h-screen bg-slate-50 py-10 transition-colors duration-300 dark:bg-[#07111F]">
  <div className="mx-auto max-w-6xl px-4">
    <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400">
      <span>Home</span>
      <span>›</span>
      <span>All Tickets</span>
      <span>›</span>
      <span className="text-slate-900 dark:text-white">
        Ticket Details
      </span>
    </div>

    <TicketDetails ticket={ticket} />
  </div>
</div>
  );
};

export default TicketDetailsPage;