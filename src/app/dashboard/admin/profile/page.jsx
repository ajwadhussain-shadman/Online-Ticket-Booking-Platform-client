import DashboardProfile from "@/components/dashboard-component/DashboardProfile";
import { verifyRole } from "@/lib/verifyRole";

const AdminProfilePage = async () => {
  const user = await verifyRole("admin");

  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold text-white">
        Admin Profile
      </h1>

      <DashboardProfile user={user} />
    </div>
  );
};

export default AdminProfilePage;