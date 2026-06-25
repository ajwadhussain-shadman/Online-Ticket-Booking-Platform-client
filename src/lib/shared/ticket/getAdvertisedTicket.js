import { fetchData } from "@/lib/core/server"

export const getAdvertisedTicket=async()=>{
    return fetchData(`/api/ticket/advertise`)
}