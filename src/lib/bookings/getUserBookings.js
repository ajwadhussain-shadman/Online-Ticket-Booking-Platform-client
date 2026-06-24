import { fetchData } from "../core/server"

export const getUserBookings=async(userId)=>{
    return fetchData(`/api/bookings?userId=${userId}`)
}