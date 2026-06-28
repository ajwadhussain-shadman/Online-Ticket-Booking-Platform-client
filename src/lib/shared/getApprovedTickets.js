import { fetchData, normalFetch } from "../core/server"

export const getApprovedTickets=async(queryString="")=>{
    return normalFetch(`/api/tickets?${queryString}`)
}

export const getApprovedTicketsLength=async()=>{
   const tickets= await normalFetch(`/api/approved/tickets`);
  
   return await tickets.length || 0;
}