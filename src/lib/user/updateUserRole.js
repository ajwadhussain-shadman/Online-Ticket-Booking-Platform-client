import { mutateData } from "../core/client"


export const updateUserRole=async(id,role)=>{
    return mutateData(`/api/users/role/${id}`,"PATCH",{role})
}