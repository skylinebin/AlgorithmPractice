/*****
 * 
 * @author SkylineBin
 * @time 2018-10-16
 * @function Create HashTable Structure by JavaScript
 * 
 * 
 */

 function HashTable() {
     var table = [];

    //  lose lose hash code
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
         console.log(position + '-' + key);
         table[position] = value;
     }

    //  get this value by key
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    }

    // remove this value by key
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    }
 }

 let hash = new HashTable();
hash.put('John', 'jogn@gmail.com');
hash.put('Tyrion', 'tyrion@gmail.com');
hash.put('Shanny', 'shanny@gmail.com');
hash.put('Mike', 'mike@gmail.com');

console.log('------------------------------------');
console.log(hash.get('Mike'));
console.log(hash.get('Rick'));
console.log('------------------------------------');