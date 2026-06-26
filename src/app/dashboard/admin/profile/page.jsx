
import DashBoardProfile from "@/components/dashboard-component/DashBoardProfile";
import { verifyRole } from "@/lib/protected-route";


const AdminProfilePage = async () => {
  const user = await verifyRole("admin");

  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold text-white">
        Admin Profile
      </h1>

      <DashBoardProfile user={user} />
    </div>
  );
};

export default AdminProfilePage;