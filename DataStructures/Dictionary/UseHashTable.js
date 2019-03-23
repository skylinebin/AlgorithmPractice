/*****
 * 
 * @author SkylineBin
 * @time 2018-10-16
 * @function Create HashTable Structure by JavaScript
 * 散列算法的作用是尽可能快地在数据结构中找到一个值
 * 散列函数的作用是给定一个键值，然后返回值在表中的地址
 * 
 */

const djb2HashCode = require('./betterHashFuction');

function HashTable() {
    var table = [];

    //  lose lose hash code 散列函数
    // 此种简单的散列方式存在一定的缺陷，即可能产生冲突，常用的冲突处理方法有：分离链接、线性探查和双散列法
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (let index = 0; index < key.length; index++) {
            hash += key.charCodeAt(index);            
        }
        return hash % 37;
    };

//  put this value at the position computed by this key
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        // var position = djb2HashCode(key);
        console.log(position + '-' + key);
        table[position] = value;
    }

    //  get this value by key
    this.get = function (key) {
        return table[loseloseHashCode(key)];
        // return table[djb2HashCode(key)];
    }

    // remove this value by key
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
        // table[djb2HashCode(key)] = undefined;
    }

    // print values of this HashTable
    this.print = function () {
        for (let index = 0; index < table.length; index++) {
            if (table[index] !== undefined) {
                console.log(index + " : "+table[index]);
            }
            
        }
    }
}

let hash = new HashTable();
hash.put('John', 'jogn@gmail.com');
hash.put('Tyrion', 'tyrion@gmail.com');
hash.put('Shanny', 'shanny@gmail.com');
hash.put('Mike', 'mike@gmail.com');

console.log('------------------------------------');
console.log(hash.get('Mike'));
console.log(hash.get('John'));
console.log('------------------------------------');

// 演示冲突的产生
hash.put('Jonathan', 'jonathan@gmail.com');
hash.put('Jamie', 'jamie@gmail.com');
hash.put('Sue', 'sue@gmail.com');

hash.print();