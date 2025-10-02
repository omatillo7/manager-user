// src/service/api.service.ts
import apiClient from "./axios";

export const ApiService = {
  // GET
  async get(endpoint: string, params = {}) {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  },

  // POST
  async post(endpoint: string, data = {}) {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  },

  // PUT
  async put(endpoint: string, data = {}) {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  },

  // DELETE
  async delete(endpoint: string) {
    const response = await apiClient.delete(endpoint);
    return response.data;
  },
};
