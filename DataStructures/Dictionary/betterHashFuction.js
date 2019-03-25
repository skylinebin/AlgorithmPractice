/****
 * 
 * @function 更好的散列函数实例
 * 比之前使用的loseloseHashCode 好一些的散列函数
 * 
 */

// const Dictionary = require('./CreateDictionary');

var djb2HashCode = function (key) {
    var hash = 5381; // 变量初始值为一个质数
    for (let index = 0; index < key.length; index++) {
        hash = hash * 33 + key.charCodeAt(index); // 33 是此处的魔力数    
    }
    return hash % 1013;
}

module.exports = djb2HashCode;

// let dictionary = new Dictionary();
// dictionary.set('John', 'jogn@gmail.com');
// dictionary.set('Tyrion', 'tyrion@gmail.com');
// dictionary.set('Shanny', 'shanny@gmail.com');
// dictionary.set('Mike', 'mike@gmail.com');

// console.log('------------------------------------');
// console.log(dictionary.size());
// console.log('------------------------------------');
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log('------------------------------------');
// console.log('------------------------------------');
// console.log(dictionary.delete('Shanny'));
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.getItems());
// console.log('------------------------------------');
// console.log('------------------------------------');
// console.log(dictionary.get('John'));

let map = new Map();
map.set('John', 'jogn@gmail.com');
map.set('Tyrion', 'tyrion@gmail.com');
map.set('Shanny', 'shanny@gmail.com');
map.set('Mike', 'mike@gmail.com');
console.log(map.delete('Shanny'));
console.log(map.keys());
console.log(map.values());
console.log(map.size);

console.log('------------------------------------');
console.log('------------------------------------');

let weakmap = new WeakMap();
let obj1 = {name: 'John'},
    obj2 = {name: 'Hasky'},
    obj3 = {name: 'Goldway'};

weakmap.set(obj1, 'john@email.com');
weakmap.set(obj2, 'hasky@email.com');
weakmap.set(obj3, 'goldway@email.com');

console.log(weakmap.has(obj1));
console.log(weakmap.get(obj2));
console.log(weakmap.delete(obj3));