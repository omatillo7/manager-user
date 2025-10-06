import axios from "./axios";

export const infoService = {
  getById(id: number) {
    return axios.get(`/listener/get-by-id/${id}`);
  },
  getByMySpeciality(id: number, search: string, page = 0, limit = 1000) {
    return axios.post(
      `/announcement/get-by-my-speciality?id=${id}&search=${search}`,
      {
        page,
        limit,
      }
    );
  },
  ownList(
    search: string,
    statuses: string,
    type: string,
    page = 0,
    limit = 1000
  ) {
    return axios.post(
      `/listenerDocument/ownList?search=${search}&statuses=${statuses}&type=${type}`,
      {
        page,
        limit,
      }
    );
  },
};
