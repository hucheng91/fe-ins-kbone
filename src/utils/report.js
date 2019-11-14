// @ts-nocheck


import { successRes, errorRes } from '../common/request/res'
import logger from './logger'
class ReportSDK {
  /**
   *
   * @param {String} app 上报平台对应的 app
   * @param {*} topic
   * @param {*} url  上报的 url
   * @param {*} defaultReportData // 公共上报的字段
   */
  constructor (app, topic, url, defaultReportData = {}) {
    this.app = app
    this.topic = topic
    this.url = url
    this.defaultReportData = defaultReportData
    this.MUST_HAVE_FIELDS = ['page', 'event', 'topic', 'url', 'app']
  }
  /**
   *
   * @param {Object} data
   */
  normalReport (data = {}) {
    let default_data = { topic: this.topic, url: this.url, ...this.defaultReportData }
    data = Object.assign(default_data, data)
    try {
      for (let field of this.MUST_HAVE_FIELDS) {
        if (!(field in data) || !data[field]) {
          logger.error(`=====ReportSDK：参数${field}缺失=====`)
          return errorRes(`参数${field}缺失`)
        }
      }
      if (!data.topic) {
        logger.error('normalReport: 请传输topic字段 ')
        return errorRes('请传输topic字段')
      }
      return this._reportByWx(data)
    } catch (error) {
      this._reportSdkError(error, data)
      return errorRes(error)
    }
  }

  _mergeDefaultData (data) {
    let target = {
      event_time: new Date().getTime(),
      log_id: String(32),
      protocol_version: '2.0',
      os: 'h5',
      source: 'wx'
    }
    target = Object.assign(target, data)
    if (target.extend_info && typeof target.extend_info !== 'string') {
      target.extend_info = JSON.stringify(target.extend_info)
    }
    return target
  }

  _reportByWx (data = {}) {
    data = this._mergeDefaultData(data)

    let url = data.url
    delete data.url
    wx.request({ url: url + '?' + this._getParams(data) })
    return successRes()
  }
  _getParams (data) {
    let keys = Object.keys(data)
    let paramArray = []
    keys.forEach(key => {
      if (Object.prototype.toString.call(data[key]) === '[object Object]') {
        data[key] = JSON.stringify(data[key])
      }
      paramArray.push(`${key}=${encodeURIComponent(data[key])}`)
    })
    return paramArray.join('&')
  }
  _reportSdkError (error, data) {
    logger.log(error.toString())
    let err = error.toString()
    let url = `https://log.1sapp.com/a.gif?cmd=10086&err=${err}&data=${JSON.stringify(data)}&date=${new Date().getTime()}`
    wx.requst({ url })
  }
}

export default ReportSDK
