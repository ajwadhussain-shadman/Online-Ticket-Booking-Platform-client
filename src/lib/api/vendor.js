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
    return mutateData(`/api/tickets/${id}`,"PATCH",ticketData);
}

export const getVendorRevenue = async(vendorId)=>{
    return fetchData(`/api/vendor/revenue/${vendorId}`)
}
export const markVendorFraud=async(id)=>{
    return mutateData(`/api/users/fraud/${id}`,"PATCH")
}