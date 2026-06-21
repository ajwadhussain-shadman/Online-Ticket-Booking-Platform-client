import DashBoardSideBar from "@/components/dashboard-component/DashBoardSideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#07111F]">
      <div className="mx-auto flex max-w-7xl">
        <DashBoardSideBar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;