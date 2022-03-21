/***************
 * 正则列表
 */

export default {
    isNotEmpty: /^[\s\S]+$/,    // 非空
    isMobile: /^1[345678]\d{9}$/,    // 手机号
    isMobileCode: /^[0-9]{4}$/,    // 手机验证码
    isMail: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,    // 邮箱
    isIdCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,    // 身份证
    isNumber: /^\d+(\.\d+)?$/,    // 数字格式
    isTwoDecimalNumber:  /^\d+(\.\d{0,2})?$/,    // 两位小数数字格式
    isInitNumber:  /^[0-9]+$/,    // 正整数数字格式
    isNumberTwoDecimal:  /^\d{1,10}(\.\d{1,2})?$/,    // 数字框，最多保留两位小数,最大为9999999999
    isNumberOverZero:  /^[1-9]\d*(\.\d+)?$/,    // 大于零的数字格式
    isSocialCreditCode:  /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/,    // 社会信用代码/营业执照号
}
