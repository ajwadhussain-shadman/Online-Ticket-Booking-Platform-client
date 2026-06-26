import { mutateData } from "./core/client";


export const postTicket=async (ticketData)=>{
    const result= await mutateData('/api/tickets',"POST",ticketData);
    return result
}