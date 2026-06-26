import { fetchData } from "../core/server";

export const getVendorTickets = async (vendorId) => {
  return fetchData(`/api/tickets?vendorId=${vendorId}`);
};

export const getSingleTicket = async (id) => {
  return fetchData(`/api/tickets/${id}`);
};

export const getVendorRevenue = async (vendorId) => {
  return fetchData(`/api/vendor/revenue/${vendorId}`);
};