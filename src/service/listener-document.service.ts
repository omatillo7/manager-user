import apiClient from "./axios";

export const getListenerStatistics = async (params = {}) => {
  try {
    const response = await apiClient.get("/listenerDocument/statisticAll", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching listener statistics:", error);
    throw error;
  }
};
