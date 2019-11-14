import { SUCCESS_CODE, ERROR_CODE, successRes, errorRes } from './res'
import Request from './request'
import requestResoure from './requestResource'

const request = initRequestMap()

function initRequestMap(baseUrl) {
  const requst = new Request(baseUrl)
  Object.keys(requestResoure).forEach((method) => {
    const urpMap = requestResoure[method]
    requst.register(method, urpMap)
  })
  return requst
}
export {
  SUCCESS_CODE,
  ERROR_CODE,
  successRes,
  errorRes,
  Request,
  requestResoure
}
export default request
