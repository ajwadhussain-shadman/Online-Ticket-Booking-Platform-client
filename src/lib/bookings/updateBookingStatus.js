import { mutateData } from "../core/client"



export const updateBookingStatus=async(id,status)=>{
    return mutateData(`/api/bookings/${id}`,"PATCH", {status})
}