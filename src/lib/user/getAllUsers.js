import { fetchData } from "../core/server"

export const getAllUsers=async()=>{
    return fetchData(`/api/users`)
}