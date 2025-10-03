import StorageService from "../service/storage.service";
import apiClient from "../service/api.service";

const AuthService = {
  loginRequestToOneId(data: any) {
    return apiClient.get(`/redirectUri?code=${data.code}&state=${data.state}`);
  },

  logoutRequestToOneId() {
    return apiClient.get(`/logOut`);
  },

  getChallenge() {
    return apiClient.get(`/frontend/challenge`);
  },

  logout() {
    this.logoutRequestToOneId();
    StorageService.removeToken();
    StorageService.removeListener();
    StorageService.removePermissions();
    StorageService.removeUsername();
    apiClient.removeHeader();
    window.open(import.meta.env.VITE_BASE_URL, "_self");
  }
};

export default AuthService;
