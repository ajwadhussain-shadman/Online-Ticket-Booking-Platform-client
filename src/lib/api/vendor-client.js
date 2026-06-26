import { mutateData } from "../core/client";


export const deleteTicket = async (id) => {
  return mutateData(`/api/tickets/${id}`, "DELETE");
};

export const updateTicket = async (id, ticketData) => {
  return mutateData(`/api/tickets/${id}`, "PATCH", ticketData);
};

export const markVendorFraud = async (id) => {
  return mutateData(`/api/users/fraud/${id}`, "PATCH");
};