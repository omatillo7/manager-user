const TOKEN = 'access_token'
const PERMS = 'perms'
const LANG = 'lang'

const StorageService = {

  setToken(token: any) {
    localStorage.setItem(TOKEN, token)
  },
  getToken() {
    return localStorage.getItem(TOKEN)
  },
  removeToken() {
    localStorage.removeItem(TOKEN)
  },
  setPermissions(perm: any) {
    localStorage.setItem(PERMS, perm)
  },
  getPermissions() {
    return localStorage.getItem(PERMS)
  },
  removePermissions() {
    localStorage.removeItem(PERMS)
  },
  setLang(lang: any) {
    localStorage.setItem(LANG, lang)
  },
  getLang() {
    return localStorage.getItem(LANG)
  },
  removeLang() {
    localStorage.removeItem(LANG)
  }

}

export default StorageService
