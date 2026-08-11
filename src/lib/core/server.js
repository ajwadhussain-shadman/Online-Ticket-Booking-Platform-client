'use server'
import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";


const url=process.env.NEXT_PUBLIC_BASE_SERVER;
const handleStatusCode=(res)=>{
    if(res.status===403){
        redirect('/forbidden');
    
    }

    else if(res.status===401){
        redirect('/unauthorized')
    }
//    else if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
    return res.json();
}

 export const normalFetch=async(path)=>{
const res = await fetch(`${url}${path}`)
 return res.json() || []
 }

export const fetchData = async (path) => {
 try {
    const result = await auth.api.getToken({
      headers: await headers(),
    });
    
    const token = result?.token || null;
    
    const res = await fetch(`${url}${path}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return handleStatusCode(res);
  } catch (error) {
    console.log("fetchData error:", error);
    return null;
  }
};
