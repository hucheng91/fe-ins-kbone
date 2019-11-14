// @ts-nocheck

import devConfig from './dev.con'
import prodConfig from './prod.con'
import request from '../common/request/index'
import { Raven } from '@qtt/fe-mobile-report-wx/dist/index.es.js'

let CONFIG = {}

// 添加 ravenjs 上报日志信息
function addRavenBreadcrumb(options, res) {
  Raven.captureBreadcrumb({
    type: 'http',
    category: 'xhr',
    data: {
      method: options.method,
      url: options.url,
      status_code: res.statusCode
    }
  })
}
function copyConfig(source1, source2) {
  const result = {}
  Object.keys(source1).forEach((key) => {
    result[key] = Object.assign(source1[key], source2[key])
  })
  return result
}
const defaultConfig = {
  REPORT_CONFIG: {
    app: 'com_jifen_dandan',
    topic: 'log_dandan_svideo',
    url: 'https://dkk-logserver.1sapp.com'
  },
  requestConfig: {
    baseURL: 'http://localhost:8080/api/v1',
    //token: wx.getStorageSync('token'),
    headers: {}, // {'X-Requested-With': 'XMLHttpRequest'}
    interceptors: {
      request(config) {
        console.log('req interceptors', config)
        return config
      },
      response(options, response) {
        console.log('response', response)
        addRavenBreadcrumb(options, response)
        return response
      },
      fail(options, res) {
        wx.showToast({
          title: res.message,
          icon: 'none',
          duration: 2000
        })
        addRavenBreadcrumb(options, res)
        return res
      }
    },
    success() {},
    failFn() {},
    completeFn() {}
  },
  loginConfig: {
    async getTokenByWxCode({ code, encryptedData, iv, signature, userInfo, rawData }) {
      // 回穿 wx.login() 的 code，这里一般调用后端 API，换取用户信息
      return request.login({ encryptedData, iv, signature, userInfo, code }).then((res) => {
        console.log('res', res)
        return {
          token: res.token,
          userInfo: res.userInfo // 回传 userInfo，如果没有，会默认调用 getUserInfo
        }
      })
    },
    async getUserInfo({ token }) {
      return request.getUserInfo({ token }).then(res => res.userInfo) // 回传 userInfo，如果没有，会默认调用 getUserInfo
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
  CONFIG = copyConfig(defaultConfig, devConfig)
} else {
  CONFIG = copyConfig(defaultConfig, prodConfig)
}

console.log('CONFIG', CONFIG)
export default CONFIG
