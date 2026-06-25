import { fetchData } from "../core/server"

export const getUserPayments=async(userId)=>{
    return fetchData(`/api/payments/${userId}`)
}