
/**
 * 深拷贝
 * @param {*} obj
 * @param {Array <Object> } cache
 * @return {*}
 */
const deepCopy =  (obj, cache = []) => {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
        return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    })

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache)
    })

    return copy
}
const find =  (list, f) => {
    return list.filter(f)[0]
}

/***********
 * 合并对象
 * @param obj1：对象1
 * @param obj2：对象2
 */
const extend =  (obj1, obj2) => {
    Object.keys(obj2).forEach(key => {
        obj1[key] = obj2[key]
    })
    return obj1
}
export default {
    deepCopy,
    find,
    extend
}
