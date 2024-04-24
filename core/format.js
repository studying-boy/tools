import dayjs from 'dayjs'

/**
 * 功能：将一个输入转成正确的时间格式
 * @param {String|Number} val
 * @param {String} rule 时间格式规则
 * @returns {String}
 */
export function formatCustomTime(val, rule) {
  // 兼容时间戳必须用number类型，使用string会转换时间不对
  const time = dayjs(!isNaN(val) ? Number(val) : val)
  return time.isValid() ? time.format(rule) : ''
}

/**
 * 功能：金钱格式化
 * @param {String|Number} val
 * @returns {String}
 */
export function formatMoney(val) {
  return !isNaN(val) ? `${(parseFloat(val).toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')}` : 'NaN'
}
