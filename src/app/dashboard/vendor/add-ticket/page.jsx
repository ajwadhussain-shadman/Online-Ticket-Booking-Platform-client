import AddTicketForm from "@/components/dashboard-component/AddTicketForm";
import { verifyRole } from "@/lib/protected-route";

const AddTicket = async () => {
  const user = await verifyRole("vendor");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 md:mb-10">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Add New Ticket
        </h1>

        <p className="mt-2 text-sm text-gray-400 md:text-base">
          Create and publish a new travel ticket for customers
        </p>
      </div>

      {/* Form Container */}
      <div className="rounded-2xl border border-cyan-500/20 bg-[#091425] p-4 sm:p-6 md:rounded-3xl md:p-8">
        <AddTicketForm user={user} />
      </div>
    </div>
  );
};

export default AddTicket;