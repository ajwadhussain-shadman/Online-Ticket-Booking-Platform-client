import { redirect } from "next/navigation";
import { getUserSession } from "./getuser-data"


 export const verifyRole=async (role)=>{

    const user= await getUserSession();
    if(!user){
        redirect('/auth/sign-in')
    }
    if(user.role!==role){
        redirect('/unauthorized')
    }
    return user;
}