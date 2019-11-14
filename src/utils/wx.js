// @ts-nocheck

import { successRes, errorRes } from '../common/request/index'
/**
 *
 */
const wxCheckSession = () => new Promise((resolve, reject) => {
  wx.checkSession({
    success(data) {
      resolve(successRes(data))
    },
    fail() {
      resolve(errorRes())
    }
  })
})

/**
   *
   */
const wxLogin = () => new Promise((resolve, reject) => {
  wx.login({
    success(res) {
      if (res.code) {
        resolve(successRes({ code: res.code }))
      } else {
        resolve(errorRes(`登陆失败${res.errMsg}`))
      }
    },
    fail(res) {
      resolve(errorRes(`fail${res.errMsg}`))
    }
  })
})

/**
   *
   */
const wxGetUserInfo = () => new Promise((resolve, reject) => {
  wx.getUserInfo({
    success(res) {
      resolve(successRes(res))
    },
    fail(res) {
      resolve(errorRes(`fail${res.errMsg}`))
    }
  })
})

const wxGetSetting = () => new Promise((resolve, reject) => {
  wx.getSetting({
    success(res) {
      console.log('res', res)
      resolve(successRes(res))
    },
    fail() {
      resolve(errorRes('fail'))
    }
  })
})

const wxGetNetworkType = () => new Promise((resolve, reject) => {
  wx.getNetworkType({
    success(res) {
      resolve(successRes(res))
      // wifi、2g、3g、4g、unknown(Android下不常见的网络类型)、none(无网络)
    }
  })
})
export {
  wxCheckSession,
  wxLogin,
  wxGetUserInfo,
  wxGetSetting,
  wxGetNetworkType
}
