import { getUserSession } from "@/lib/getuser-data";

const DashboardPage = async () => {
  const user = await getUserSession();

  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        Welcome, {user?.name}
      </h1>

      <p className="mt-2 text-gray-400">
        {user?.role === "user" &&
          "Manage your bookings and transactions."}

        {user?.role === "vendor" &&
          "Manage tickets, bookings and revenue."}

        {user?.role === "admin" &&
          "Manage users, tickets and platform activities."}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-cyan-500/20 bg-[#091425] py-2  px-4">
          <h3 className="text-lg font-semibold text-white">
            Role
          </h3>

          <p className="mt-2 capitalize text-cyan-400">
            {user?.role}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-[#091425]  py-2 px-4">
          <h3 className="text-lg font-semibold text-white">
            Email
          </h3>

          <p className="mt-2 text-gray-400">
            {user?.email}
          </p>
        </div>


      </div>
    </div>
  );
};

export default DashboardPage;