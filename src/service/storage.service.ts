const TOKEN = 'access_token'
const LISTENER = 'listener'
const PERMS = 'perms'
const USERNAME = 'username'
const THEME = 'theme'
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

  setListener(listener: any) {
    localStorage.setItem(LISTENER, listener)
  },
  getListener() {
    return localStorage.getItem(LISTENER)
  },
  removeListener() {
    localStorage.removeItem(LISTENER)
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

  setUsername(username: any) {
    localStorage.setItem(USERNAME, username)
  },
  getUsername() {
    return localStorage.getItem(USERNAME)
  },
  removeUsername() {
    localStorage.removeItem(USERNAME)
  },

  setTheme(theme: any) {
    localStorage.setItem(THEME, theme)
  },
  getTheme() {
    return localStorage.getItem(THEME)
  },
  removeTheme() {
    localStorage.removeItem(THEME)
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
