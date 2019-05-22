/*
 * @Author: SkylineBin 
 * @Date: 2019-05-22 20:26:17 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-22 20:41:10
 */


/******
 * 
 * 编写一个Javascript函数，传入一个数组，对数组中的元素进行去重并返回一个无重复元素的数组，数组的元素可以是数字、字符串、数组和对象。举例说明： 
 * 1. 如传入的数组元素为[123, "meili", "123", "mogu", 123],则输出：[123, "meili", "123", "mogu"]
 * 2. 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"],则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]     
 * 3. 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"],则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
 * 
 * 
 * 
 */

// 使用 Set 进行构造不重复的数组
Array.prototype.getUnique = function (){
    // let arr = this;
    return [...(new Set(this.map(n => JSON.stringify(n))))].map(m => JSON.parse(m));
}


Array.prototype.unique = function () {
    let hash = new Map();
    let result = [];
    let tempData;
    for (let index = 0; index < this.length; index++) {
        if (Object.prototype.toString.call(this[index]) === '[object Object]' || Object.prototype.toString.call(this[index]) === '[object Array]') {
            tempData = JSON.stringify(this[index]);
        } else {
            tempData = this[index];
        }
        if (!hash.has(tempData)) {
            hash.set(tempData,true);
            result.push(this[index]);
        }
    }
    return result;
}


let arr = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"];
let arr2 = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"];
console.log(arr2.unique());
console.log(arr.getUnique());