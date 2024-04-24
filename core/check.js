/**
 * 功能：验证输入是否是一个正确的邮箱
 * @param {String} val
 * @returns {Boolean}
 */
export function checkEmail(val) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)
}

/**
 * 功能：验证输入是否是一个正确的手机号
 * @param {String} val
 * @returns {Boolean}
 */
export function checkPhone(val) {
  return /^1[3456789]\d{9}$/.test(val)
}

/**
 * 功能：验证输入是否是一个正确的身份证
 * @param {String} val
 * @returns {Boolean}
 */
export function checkIdCard(val) {
  // 正则表达式用于验证身份证号码格式是否正确
  const regex = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}[\dXx]$/

  if (!regex.test(val)) {
    return false // 格式不正确，直接返回 false
  }

  // 校验码验证
  const weightFactors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 权重因子
  const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'] // 校验码映射表
  const idCardChars = val.split('')
  let sum = 0

  for (let i = 0; i < 17; i++) {
    sum += parseInt(idCardChars[i]) * weightFactors[i]
  }

  const mod = sum % 11
  const checkCode = checkCodes[mod]
  const lastChar = idCardChars[17].toUpperCase() // 将最后一位转为大写字母

  return lastChar === checkCode
}
