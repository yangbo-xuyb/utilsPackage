
// 对象操作工具
import objUtils from './objUtils.js'
// 格式校验工具
import checkUtils from './checkUtils.js'
// 存储操作工具
import storeUtils from './storeUtils.js'
// 简单操作工具
import simpleUtils from './simpleUtils.js'
// dom操作工具
import domUtils from './domUtils.js'
// 设计模式
import modeUtils from './modeUtils.js'

window.mzyUtils = (function mzyEasyUtils () {
    var utils
    return (function () {
        if (!utils) {
            utils = {
                ...checkUtils,
                ...storeUtils,
                ...objUtils,
                ...simpleUtils,
                ...domUtils,
                ...modeUtils
            }
        }
        return utils
    })()
})()
export default window.mzyUtils
