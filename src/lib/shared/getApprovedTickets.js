import { fetchData } from "../core/server"

export const getApprovedTickets=async(queryString="")=>{
    return fetchData(`/api/tickets?${queryString}`)
}

export const getApprovedTicketsLength=async()=>{
   const tickets= await fetchData(`/api/approved/tickets`);
  
   return await tickets.length;
}