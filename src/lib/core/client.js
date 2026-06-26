import { redirect } from "next/dist/server/api-utils";
import { authClient } from "../auth-client";

const url=process.env.NEXT_PUBLIC_BASE_SERVER;
export const mutateData=async(path,method="POST",data)=>{
    const {data:token}= await authClient.token()
    console.log(token)
    const res= await fetch(`${url}${path}`,{
        method:method,
        headers:{
            'Content-Type':'application/json',
            authorization:`Bearer ${token?.token} `
        },
        body:JSON.stringify(data),
    })
    return handleStatusCode(res);
}
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