import { fetchData } from "../core/server"

export const getAllTickets=async(queryString="")=>{
    return fetchData(`/api/tickets?${queryString}`)
}
export const getAdminAllTickets=async()=>{
    return fetchData(`/api/admin/tickets`);
}