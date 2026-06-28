import { normalFetch } from "@/lib/core/server"

export const getAdvertisedTicket=async()=>{
    return normalFetch(`/api/ticket/advertise`)
}