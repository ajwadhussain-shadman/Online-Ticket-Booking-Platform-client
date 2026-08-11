import { fetchData, normalFetch } from "../core/server"

export const getApprovedTicketsAdmin=async()=>{
    return normalFetch(`/api/approved/tickets`)
}
export const getApprovedTickets=async(queryString="")=>{
    return normalFetch(`/api/tickets?${queryString}`)
}
export const getApprovedTicketsLength=async()=>{
   const tickets= await normalFetch(`/api/approved/tickets`);
  
   return await tickets.length || 0;
}