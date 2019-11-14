// @ts-nocheck

import store from './main'

function get(key) {
  return store.data[key]
}
function set(key, value) {
  store.data[key] = value
}
function setSystemInfo(systemInfo) {
  if (!systemInfo) {
    systemInfo = wx.getSystemInfoSync()
  }
  set('systemInfo', systemInfo)
  console.log('systemInfo', systemInfo)
  wx.setStorage('system_top_sytemInfo', systemInfo)
}

function getSystemInfo() {
  let result
  if (get('systemInfo')) { return get('systemInfo') }

  const systemInfo = wx.getStorageSync('system_top_sytemInfo')
  if (systemInfo) {
    result = systemInfo
  } else {
    result = wx.getSystemInfoSync()
  }
  setTimeout(() => { setMenuButtonInfo(result) }, 1000)
  return result
}
function setMenuButtonInfo(menuButtonInfo) {
  if (!menuButtonInfo) { menuButtonInfo = wx.getMenuButtonBoundingClientRect() }
  set('menuButtonInfo', menuButtonInfo)
  wx.setStorage('system_top_menubutton', menuButtonInfo)
}
function getMenuButtonInfo() {
  let result
  if (get('menuButtonInfo')) { return get('menuButtonInfo') }

  const menuButtonInfo = wx.getStorageSync('system_top_menubutton')
  if (menuButtonInfo) {
    result = menuButtonInfo
  } else {
    result = wx.getMenuButtonBoundingClientRect()
  }
  setTimeout(() => { setMenuButtonInfo(result) }, 1000)
  return result
}
export {
  set,
  get,
  setSystemInfo,
  getSystemInfo,
  setMenuButtonInfo,
  getMenuButtonInfo
}
