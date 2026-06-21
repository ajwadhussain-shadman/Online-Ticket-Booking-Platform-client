import { authClient } from "./auth-client";

export const getCurrentUser = async () => {
  const { data, error } = await authClient.getSession();

  if (error) {
    return null;
  }

  return data?.user || null;
};