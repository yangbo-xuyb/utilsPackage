/************************
 * dom 操作类
 *
 *
 */

/******************
 *      外观模式
 ******************/
// 添加事件
function addEvent(dom, type, fn) {
    // 对于支持 addEventListener的浏览器
    if (dom.addEventListener) {
        // addEventListener第三个参数 useCapture：是否在捕获阶段执行。默认为false，冒泡阶段执行。
        dom.addEventListener(type, fn, false)
        // 对于支持 attachEvent的浏览器
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn)
        // 对于支持 on + '事件名' 的浏览器
    } else {
        dom['on' + type] = fn
    }
}
// 获取事件对象
function getEvent (event) {
    //标准浏览器返回event，IE下返回window.event
    return event || window.event
}
// 获取元素
function getTarget (event) {
    var event = getEvent(event)
    return event.target || event.srcElement
}
// 阻止默认事件
function preventDefault (event) {
    var event = getEvent(event)
    if (event.preventDefault) {
        event.preventDefault()
    } else {
        event.returnValue = false
    }
}


export default  {
    addEvent,
    getEvent,
    getTarget,
    preventDefault
}
