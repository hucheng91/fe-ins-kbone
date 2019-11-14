
const SUCCESS_CODE = 0
const ERROR_CODE = -1

/**
 *
 * @param {string} data:any
 *  * @param {string} message
 */
const successRes = (data, message = 'success') => ({
  code: SUCCESS_CODE,
  message,
  data
})
/**
 *
 * @param {string} message
 */
const errorRes = (message = 'error') => ({
  code: ERROR_CODE,
  message
})
export {
  successRes,
  errorRes,
  SUCCESS_CODE,
  ERROR_CODE

}
