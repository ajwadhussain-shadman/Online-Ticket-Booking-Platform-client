import { mutateData } from "@/lib/core/client"


export const createBooking=async(bookingData)=>{
    return mutateData(`/api/bookings`,"POST",bookingData)
}