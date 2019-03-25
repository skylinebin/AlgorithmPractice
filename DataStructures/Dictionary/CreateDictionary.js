/****
 * 
 * @function create dictionary module by JavaScript
 * 
 */

module.exports = class Dictionary {
    constructor() {
        this.items = {};
    }
    has(key) {
        return key in this.items;
    }
    // set this value with this key
    set(key, value) {
        this.items[key] = value;
    };

    // delete this item
    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    // get this item by key
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    // get all values
    values() {
        var values = [];
        for (let k in this.items) {
            if (this.has(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    };

    // clear this dictionary
    clear() {
        this.items = {};
    }

    // get the size of this Set
    size() {
        return Object.keys(this.items).length;
    }

    // get all keys
    keys() {
        return Object.keys(this.items); // 可直接使用对象的原型方法
    }

    // get this item
    getItems() {
        return this.items;
    }

}