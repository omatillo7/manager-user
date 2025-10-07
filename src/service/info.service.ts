import axios from "./axios";

export const infoService = {
  getById(id: number) {
    return axios.get(`/listener/get-by-id/${id}`);
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
  lessonTypeList(isRetraining: boolean) {
    return axios.post(`/lessonType/list?isRetraining=${isRetraining}`, {});
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

  AnnouncementgetById(id: number) {
    return axios.get(`/announcement/get-by-id/${id}`);
  },
};
