// @ts-nocheck

/**
 *
 * @param {Date} date
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 *
 * @param {any} n
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 *
 * @param {Object} obj
 */
const queryStringify = obj => {
  var qs = []
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      qs.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }
  return qs.join('&')
}

/**
 *
 * @param {String} url
 */
const queryParse = url => {
  var dic = {}
  // eslint-disable-next-line no-undef
  url = url || location.search.slice(1)
  var array = url.split('&')
  for (var i = 0, len = array.length; i < len; i++) {
    var params = array[i].split('=')
    if (params[0]) {
      dic[decodeURIComponent(params[0])] = decodeURIComponent(params[1])
    }
  }
  return dic
}

/**
 * 根据key返回url中的value
 * @param {string} key
 * @param {string} [url]
 * @returns {string}
 */
const query = (key, url) => {
  return queryParse(url)[key]
}

/**
 *
 * @param {any} selector
 */
const getElementsInfo = selector => {
  return new Promise((resolve, reject) => {
    try {
      wx.createSelectorQuery().selectAll(selector).boundingClientRect(rects => {
        resolve(rects)
      }).exec()
    } catch (error) {
      reject(error)
    }
  })
}

export {
  formatTime,
  queryStringify,
  query,
  getElementsInfo
}
