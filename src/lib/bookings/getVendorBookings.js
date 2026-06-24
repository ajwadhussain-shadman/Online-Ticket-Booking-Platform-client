import { fetchData } from "../core/server"

export const getVendorBookings=async(vendorId)=>{
    return fetchData(`/api/bookings?vendorId=${vendorId}`)
}