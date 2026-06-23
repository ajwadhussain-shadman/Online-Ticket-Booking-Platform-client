import { fetchData, mutateData } from "../core/server"


export const getVendorTickets= async (venderId) => {
    return fetchData(`/api/tickets/?vendorId=${venderId}`)
}

export const deleteTicket=async(id)=>{
    return mutateData(`/api/tickets/${id}`,"DELETE")
}
export const getSingleTicket=async (id)=>{
    return fetchData(`/api/tickets/${id}`)
}

export const updateTicket=async(id,ticketData)=>{
    console.log(id,ticketData)
    return mutateData(`/api/tickets/${id}`,"PATCH",ticketData);
}