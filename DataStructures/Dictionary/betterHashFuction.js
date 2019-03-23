/****
 * 
 * @function 更好的散列函数实例
 * 比之前使用的loseloseHashCode 好一些的散列函数
 * 
 */

var djb2HashCode = function (key) {
    var hash = 5381; // 变量初始值为一个质数
    for (let index = 0; index < key.length; index++) {
        hash = hash * 33 + key.charCodeAt(index); // 33 是此处的魔力数    
    }
    return hash % 1013;
}

module.exports = djb2HashCode;