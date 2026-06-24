import { mutateData } from "@/lib/core/server"

export const createBooking=async(bookingData)=>{
    return mutateData(`/api/bookings`,"POST",bookingData)
}