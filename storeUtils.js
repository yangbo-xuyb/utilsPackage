/*********************
 * 存储处理
 */
// 格式校验工具
const checkUtils = require('./checkUtils.js')
const storage = window.localStorage

export default  {

    /***************************************************************************************************
     *                                          COOKIE 操作类
     ***************************************************************************************************/

    /************
     * 添加一个cookie
     */
    setCookie: (key, value) => {
        let Days = 30
        let exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
        document.cookie = key + '=' + escape(value) + ';expires=' + exp.toGMTString()
    },
    /************
     * 获取某个cookie的值
     */
    getCookie: (key) => {
        let allcookies = document.cookie
        let arr = allcookies.split(';')
        let value
        for (let i = 0; i < arr.length; i++) {
            let strIn = arr[i]
            let pos = strIn.indexOf('=')
            let regEx = /\s+/g
            if (strIn.substring(0, pos).replace(regEx, '') === key) {
                value = strIn.substring(pos + 1, strIn.length)
            }
        }
        return unescape(value)
    },
    /************
     * 判断某个cookie是否存在
     */
    containCookie: (key) => {
        let allcookies = document.cookie
        let cookiePos = allcookies.indexOf(key)
        if (cookiePos > -1) {
            return true
        }
        return false
    },
    /************
     * 移除某个cookie
     *
     * 如果只移除一个，传第一个参数
     * 如果全部移除，传两个参数，如('', true)
     */
    removeCookie: (key, removeAll) => {
        let removeAllVal = typeof removeAll === 'boolean' ? removeAll : false
        let keys = document.cookie.match(/[^ =;]+(?=\=)/g)
        if (keys) {
            for (let i = 0; i < keys.length; i++) {
                if (!removeAllVal) {
                    if (keys[i] === key) {
                        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                    }
                } else {
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                }
            }
        }
    },
    /***************************************************************************************************
     *                                          localStorage 操作类
     ***************************************************************************************************/
    /************
     * 是否存在localStorage
     * att 需要判断的属性
     */
    containLocalStorage: (attr) => {
        if (storage.hasOwnProperty(attr)) {
            return true
        } else {
            return false
        }
    },
    /************
     * 添加localStorage
     * json 传入字面量对象格式如{name:'夏天'}
     */
    setLocalStorage: (json) => {
        if (!checkUtils.isJSON(json) || !storage) {
            console.error('添加localStorage失败')
            return
        }
        for (let item in json) {
            if (json.hasOwnProperty(item)) {
                storage[item] = JSON.stringify(json[item])
            }
        }
    },
    /************
     * 获取localStorage
     * 存在，返回对应值
     * 不存在，返回''
     */
    getLocalStorage: (attr) => {
        let json = JSON.parse(storage[attr])
        return json
    },
    /************
     * 删除localStorage
     */
    delLocalStorage: (attr) => {
        storage.removeItem(attr)
    },
    /************
     * 删除全部localStorage
     */
    delAllLocalStorage: (attr) => {
        storage.clear()
    }
}
