/* eslint-disable no-underscore-dangle */
import md5 from '../../utils/md5'
import config from '../../config'

const requestConfig = config.requestConfig
class Request {
  // @ts-ignore
  constructor(config = {}) {
    this.baseUrl = config.baseUrl || ''
    this.token = config.token
  }
  setConfig(option) {

  }
  setToken(token) {
    this.token = token
  }
  register(key, obj) {
    const _register = (o, resolve) => {
      o = this.setParams(o || {})
      this[obj.method || 'get'](Object.assign(obj, { data: o })).then(async (obj) => {
        resolve(obj)
      }).catch((err) => {
        console.error(err)
        resolve({ err, res: null })
      })
    }
    Object.defineProperty(this, key, {
      // @ts-ignore
      value: o => new Promise((resolve) => { _register(o, resolve) })
    })
  }
  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl
  }
  getBaseUrl() {
    if (this.baseUrl && this.baseUrl.length > 0) { return this.baseUrl }
    return requestConfig.baseURL
  }
  _getData({ url, data, method, contentType = 'application/json' }) {
    const token = this.token
    const self = this
    let options = { ...getOption() }
    if (requestConfig.interceptors && requestConfig.interceptors.request) {
      options = requestConfig.interceptors.request(options)
      if (!options) { throw new Error('requestConfig.interceptors.request need return object') }
    }
    return new Promise((resolve, reject) => {
      // @ts-ignore
      wx.request({
        ...options,
        fail(res) { failCallBack(options, res, resolve, reject) },
        success(res) { successCallBack(options, res, resolve, reject) }
      })
    })
    function getOption() {
      const _data = data

      return {
        url: url.indexOf('http') === 0 ? url : self.getBaseUrl() + url,
        data: _data,
        method,
        dataType: 'text',
        header: {
          'Content-type': contentType,
          Os: 'wx',
          Token: token || ''
        }
      }
    }
    function successCallBack(options, res, resolve, reject) {
      if (res.statusCode !== 200) {
        return failCallBack(options, res, resolve, reject)
      }
      if (requestConfig.interceptors.response) {
        res = requestConfig.interceptors.response(options, res)
        if (!res) { console.warn('may be requestConfig.interceptors.response do not have return') }
      }
      const data = JSON.parse(res.data.replace(/:(\d{17,})/g, ':"$1"'))
      resolve(data)
    }
    function failCallBack(options, res, resolve, reject) {
      // @ts-ignore
      if (requestConfig.interceptors.fail) {
        requestConfig.interceptors.fail(options, res)
      }
      reject(res)
    }
  }

  get(obj) {
    return this._getData(Object.assign(obj, { method: 'get', data: obj.data }))
  }

  post(obj) {
    return this._getData(Object.assign(obj, { data: obj.data }))
  }

  setParams(params = {}) {
    params.nonce = Math.ceil(Math.random() * 10000)
    params.time = Math.floor(new Date().getTime() / 1000)
    const signStr = md5(`${this.getMD5(params)}`)
    params.sign = signStr
    return params
  }

  getMD5(params) {
    const newkey = Object.keys(params).sort()
    // 先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    const newObj = {} // 创建一个新的对象，用于存放排好序的键值对
    for (let i = 0; i < newkey.length; i++) {
      // 遍历newkey数组
      newObj[newkey[i]] = params[newkey[i]] // 向新创建的对象中按照排好的顺序依次增加键值对
    }
    return this.parseParam(newObj) // 返回排好序的新对象
  }

  parseParam(param) {
    let paramStr = ''
    for (const item in param) {
      if (paramStr !== '') {
        paramStr += '&'
      }
      let val = ''
      if (typeof param[item] === 'string' || typeof param[item] === 'number') {
        val = `${item}=${param[item]}`
      } else {
        val = `${item}=`
      }
      paramStr += val
    }
    return paramStr
  }
}

export default Request
