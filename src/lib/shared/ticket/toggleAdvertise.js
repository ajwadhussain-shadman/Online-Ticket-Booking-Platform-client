import { mutateData } from "@/lib/core/client"


export const toggleAdvertise=async(id,isAdvertised)=>{
    return mutateData(`/api/tickets/advertise/${id}`,"PATCH",{isAdvertised})
}