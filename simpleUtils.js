/*********************
 * 简单工具
 *
 */

export default {
    createRandomId: (len = 10) => {
        return Number(Math.random().toString().substr(3, len) + Date.now()).toString(36)
    }
}
