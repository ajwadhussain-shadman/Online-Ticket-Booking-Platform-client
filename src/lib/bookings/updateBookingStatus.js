import { mutateData } from "../core/server"

export const updateBookingStatus=async(id,status)=>{
    return mutateData(`/api/bookings/${id}`,"PATCH", {status})
}