'use client'
import { markVendorFraud } from '@/lib/api/vendor';
import { updateUserRole } from '@/lib/user/updateUserRole';
import { useRouter } from "next/navigation";
import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({user}) => {
    const router=useRouter()
    const handleRole=async(role)=>{
        const res= await updateUserRole(user._id,role);
        console.log(res)
        if(res.modifiedCount>0){
            toast.success(`${user.name} is now ${role}`)
          router.refresh();
        }
    }
    const handleFraud= async()=>{
        const res= await markVendorFraud(user._id);
        if(res.success){
            toast.success("Vendor marked as fraud");
            router.refresh();
        }
    }
    const roleClasses = {
    user: "bg-cyan-500/10 text-cyan-400",
    vendor: "bg-purple-500/10 text-purple-400",
    admin: "bg-yellow-500/10 text-yellow-400",
  };
    return (
         <tr className="border-b border-white/5 hover:bg-white/5 transition">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <h3 className="font-semibold text-white">
            {user.name}
          </h3>
        </div>
      </td>

      <td className="px-6 py-5 text-gray-300">
        {user.email}
      </td>

      <td className="px-6 py-5">
        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${roleClasses[user.role]}`}
        >
          {user.role}
        </span>
      </td>
      <td className="px-6 py-5">
        {user.isFraud ? (
          <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
            Fraud
          </span>
        ) : (
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            Active
          </span>
        )}
      </td>

      <td className="px-6 py-5">
        <div className="flex flex-wrap gap-2">

          {user.role !== "admin" && (
            <button
              onClick={() => handleRole("admin")}
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-500/20 transition"
            >
              Make Admin
            </button>
          )}

          {user.role === "user" && (
            <button
              onClick={() => handleRole("vendor")}
              className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-2 text-sm font-medium text-purple-400 hover:bg-purple-500/20 transition"
            >
              Make Vendor
            </button>
          )}

          {user.role === "vendor" && !user.isFraud && (
            <button
              onClick={handleFraud}
              className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/20 transition"
            >
              Mark Fraud
            </button>
          )}

        </div>
      </td>
    </tr>
    );
};

export default UserRow;