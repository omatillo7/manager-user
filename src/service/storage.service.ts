const TOKEN = 'access_token';
const PERMS = 'perms';
const LANG = 'lang';

const StorageService = {
  setToken(token: any) {
    localStorage.setItem(TOKEN, typeof token === 'string' ? token : JSON.stringify(token));
  },
  getToken() {
    const token = localStorage.getItem(TOKEN);
    try {
      return JSON.parse(token as string);
    } catch {
      return token;
    }
  },
  removeToken() {
    localStorage.removeItem(TOKEN);
  },

  setPermissions(perm: any) {
    localStorage.setItem(PERMS, typeof perm === 'string' ? perm : JSON.stringify(perm));
  },
  getPermissions() {
    const perm = localStorage.getItem(PERMS);
    try {
      return JSON.parse(perm as string);
    } catch {
      return perm;
    }
  },
  removePermissions() {
    localStorage.removeItem(PERMS);
  },

  setLang(lang: any) {
    localStorage.setItem(LANG, lang);
  },
  getLang() {
    return localStorage.getItem(LANG);
  },
  removeLang() {
    localStorage.removeItem(LANG);
  },
};

export default StorageService;
