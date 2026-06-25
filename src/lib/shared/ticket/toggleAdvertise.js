import { mutateData } from "@/lib/core/server"

export const toggleAdvertise=async(id,isAdvertised)=>{
    return mutateData(`/api/tickets/advertise/${id}`,"PATCH",{isAdvertised})
}