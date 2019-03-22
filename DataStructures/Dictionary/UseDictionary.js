/*****
 * 
 * @author SkylineBin
 * @time 2018-10-16
 * @function Create Dictionary Structure by JavaScript
 * 
 * 
 */

function Dictionary() {
    var items = {};

    // check if has item
    this.has = function (key) {
        return key in items;
    };

    // set this value with this key
    this.set = function (key, value){
        items[key] = value;
    };

    // delete this item
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    // get this item by key
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    }

    // get all values
    this.values = function () {
        var values = [];
        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    // clear this dictionary
    this.clear = function () {
        items = {};
    }

    // get the size of this Set
    this.size = function () {
        return Object.keys(items).length;
    }

    // get all keys
    this.keys = function () {
        return Object.keys(items); // 可直接使用对象的原型方法
    }

    // get this item
    this.getItems = function () {
        return items;
    }
}


let dictionary = new Dictionary();
dictionary.set('John','jogn@gmail.com');
dictionary.set('Tyrion', 'tyrion@gmail.com');
dictionary.set('Shanny', 'shanny@gmail.com');
dictionary.set('Mike', 'mike@gmail.com');

console.log('------------------------------------');
console.log(dictionary.size());
console.log('------------------------------------');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log('------------------------------------');
console.log('------------------------------------');
console.log(dictionary.delete('Shanny'));
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());
console.log('------------------------------------');
console.log('------------------------------------');