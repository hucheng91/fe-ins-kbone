// @ts-nocheck

import { wxGetSetting, wxGetUserInfo, wxLogin } from '../../utils/wx'
import store, { setStoreData } from '../store/main'
import CONFIG from '../../config/index'

const loginConfig = CONFIG.loginConfig
let loginDoing = false
const loginEvent = []
// 这样做是处理 tab切换时，多次调用 login，只调用一次

export default async function login() {
  if (store.data.hasUserInfo) { return store.data.userInfo }
  if (loginDoing) {
    return new Promise((resolve) => {
      loginEvent.push(resolve)
    })
  }
  return loginProcess()
}
async function loginProcess() {
  loginDoing = true
  let userInfo
  try {
    userInfo = await getAuthScopeUserInfo()
  } catch (error) {
    loginDoing = false
    throw error
  }

  loginDoing = false
  setTimeout(() => {
    const length = loginEvent.length
    for (let i = 0; i < length; i++) {
      loginEvent.pop()(userInfo)
    }
  })

  return userInfo
}
async function getAuthScopeUserInfo() {
  const token = wx.getStorageSync('token')
  let user
  const methodFn = {
    haveToken: async () => {
      console.log('have token')
      const userInfo = await loginConfig.getUserInfo({ token })
      return userInfo
    },
    notHaveToken: async () => {
      console.log('not have token')
      // 判断用户之前是否授权过，如果授权过，直接授权获取登录信息
      const settingInfo = await wxGetSetting()
      console.log('settingInfo', settingInfo)
      let userInfo
      if (settingInfo.data && settingInfo.data.authSetting['scope.userInfo']) {
        const wxUserRes = await wxGetUserInfo()
        console.log('wxUserRes', wxUserRes)
        if (wxUserRes.code === 0) {
          userInfo = await getTokenAndUserByWxCode(wxUserRes.data)
        } else {
          throw new Error('wx login fail')
        }
      }
      return userInfo
    }
  }
  if (token) {
    user = await methodFn.haveToken()
  } else {
    user = await methodFn.notHaveToken()
  }
  setStoreData('userInfo', user)
  setStoreData('hasUserInfo', true)
  console.log('login_result', wx.getStorageSync('token'), store.data.userInfo, store.data.hasUserInfo)

  return user
}
async function getTokenAndUserByWxCode(wxUserRes) {
  const loginData = await wxLogin()
  console.log('loginConfig', loginConfig)
  let { token, userInfo = null } = await loginConfig.getTokenByWxCode(Object.assign(loginData.data, wxUserRes))
  wx.setStorageSync('token', token)

  if (!userInfo) { userInfo = await loginConfig.getUserInfo(Object.assign(loginData.data, wxUserRes)) }
  return { token, userInfo }
}
