import { fetchData } from "../core/server"

export const getApprovedTickets=async(queryString="")=>{
    return fetchData(`/api/tickets?${queryString}`)
}