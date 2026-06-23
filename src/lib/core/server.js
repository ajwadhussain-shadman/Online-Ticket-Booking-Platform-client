
import { redirect } from "next/navigation";

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
export const fetchData=async(path)=>{
  const res= await fetch(`${url}${path}`)
  return handleStatusCode(res);
}

export const mutateData=async(path,method="POST",data)=>{
    const res= await fetch(`${url}${path}`,{
        method:method,
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    })
    return handleStatusCode(res);
}