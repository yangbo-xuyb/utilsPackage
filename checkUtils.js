/************************
 *
 * 校验类
 *  类型校验
 *  正则校验
 *
 */

import regUtils from './regUtils.js'
import typeUtils from './typeUtils.js'
import objUtils from './objUtils.js'


const checkUtils = {}


Object.keys(regUtils).forEach(key => {
    checkUtils[key] = (value) => {
        if (typeUtils.isUndef(value)) {
            return false
        }
        value += ''
        return regUtils[key].test(value)
    }
})

Object.keys(typeUtils).forEach(key => {
    checkUtils[key] = typeUtils[key]
})

export default checkUtils

