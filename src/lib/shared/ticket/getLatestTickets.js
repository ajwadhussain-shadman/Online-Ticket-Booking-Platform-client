import { fetchData } from "@/lib/core/server"

export const getLatestTickets=async()=>{
    return fetchData(`/api/ticket/latest`);
}