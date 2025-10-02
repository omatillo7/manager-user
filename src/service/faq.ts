// src/service/faq.service.ts
import apiClient from "./axios";

const BASE_URL = "/frequently-asked-questions";

export const FaqService = {
  async getList(params: any, status = "RETRAINING") {
    const response = await apiClient.post(`${BASE_URL}/list`, params, {
      params: { status },
    });
    return response.data;
  },
};
