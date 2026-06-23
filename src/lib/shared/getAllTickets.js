import { fetchData } from "../core/server"

export const getAllTickets=async()=>{
    return fetchData(`/api/tickets`);
}