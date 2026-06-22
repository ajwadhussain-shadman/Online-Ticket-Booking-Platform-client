import DashboardProfile from "@/components/dashboard-component/DashboardProfile";
import { verifyRole } from "@/lib/verifyRole";

const VendorProfilePage = async () => {
  const user = await verifyRole("vendor");

  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold text-white">
        Vendor Profile
      </h1>

      <DashboardProfile user={user} />
    </div>
  );
};

export default VendorProfilePage;