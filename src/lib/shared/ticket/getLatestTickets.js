import { normalFetch } from "@/lib/core/server"

export const getLatestTickets=async()=>{
    return normalFetch(`/api/ticket/latest`);
}