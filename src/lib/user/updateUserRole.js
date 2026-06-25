import { mutateData } from "../core/server"

export const updateUserRole=async(id,role)=>{
    return mutateData(`/api/users/role/${id}`,"PATCH",{role})
}