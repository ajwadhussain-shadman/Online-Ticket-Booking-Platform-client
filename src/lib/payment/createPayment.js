import { mutateData } from "../core/client"


export const createPayment=async(paymentData)=>{
    return mutateData(`/api/payments`,"POST",paymentData)
}