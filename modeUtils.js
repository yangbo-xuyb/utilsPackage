/************************
 *  不同设计模式的工具
 *
 *******************/


/*****
 * 装饰者模式
 * @param target    目标对象
 * @param type      方法名称
 * @param fn        方法值
 */
const decorator = (target, type, fn) => {
    if (target[type] instanceof Function) {
        let oldFn = target[type]
        target[type] = function () {
            oldFn()
            fn()
        }
    } else {
        target[type] = fn
    }
}

export default {
    decorator
}

