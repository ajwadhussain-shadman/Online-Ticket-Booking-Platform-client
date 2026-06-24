import { mutateData } from "../core/server"

export const createPayment=async(paymentData)=>{
    return mutateData(`/api/payments`,"POST",paymentData)
}