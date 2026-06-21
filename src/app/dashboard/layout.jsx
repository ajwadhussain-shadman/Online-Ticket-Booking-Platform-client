import DashBoardSideBar from "@/components/dashboard-component/DashBoardSideBar";
import { getUserSession } from "@/lib/getuser-data";
import { redirect } from "next/navigation";

const DashboardLayout =  async({ children }) => {
    const user= await getUserSession();
    console.log("user",user);
    if(!user){
        redirect('/auth/sign-in')
    }
  return (
    <div className="min-h-screen bg-[#07111F]">
      <div className="mx-auto flex max-w-7xl">
        <DashBoardSideBar  user={user}/>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;