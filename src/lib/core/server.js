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
 return handleStatusCode(res);
 }

export const fetchData = async (path) => {
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });
 console.log("token",token)
  console.log('fetch data token',token)
  const res = await fetch(`${url}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return handleStatusCode(res);
};
