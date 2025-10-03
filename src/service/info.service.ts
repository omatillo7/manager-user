import axios from './axios';

export const infoService = {
  getById(id: number) {
    return axios.get(`/api/v.1/listener/get-by-id/${id}`);
  }
};