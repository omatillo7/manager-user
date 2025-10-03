import axios from './axios';
import StorageService from './storage.service';
import StorageService from './storage.service';


export const retrainService = {
  redirectUri(  code: string, state: string ) {
    return axios.get(
      `/retrain/redirectUri?code=${code}&state=${state}`
    );
  },

    logout() {
        StorageService.removeToken();
        StorageService.removePermissions();
        StorageService.removeLang();
    },

     logOut() {
        return axios.get(`/retrain/logOut`);
    },
};


