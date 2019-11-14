/*
 * @Author: hucheng
 * @Date: 2019-07-18 16:04:16
 * @Description: logger
 */

let label = '[wx Action]'
let debugMode = false

try {
  if (process.env.NODE_ENV !== 'production') {
    debugMode = true
  }
} catch (e) { }

function isDebug (isDebug = true, label = '') {
  debugMode = isDebug
}
export { isDebug }
export default {
  log (...args) {
    if (debugMode) {
      console.log(label, ...args)
    }
  },
  info (...args) {
    if (debugMode) {
      console.info(label, ...args)
    }
  },
  warn (...args) {
    console.warn(label, ...args)
  },
  error (...args) {
    console.error(label, ...args)
  }
}
