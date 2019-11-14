
const store = {
  data: {
    hasUserInfo: false,
    showLoginModal: false,
    userInfo: null,
    systemInfo: null, // 系统信息
    menuButtonInfo: null // 右上胶囊信息
  }
}
function setStoreData(key, value) {
  store.data[key] = value
}
export default store
export {
  setStoreData
}
