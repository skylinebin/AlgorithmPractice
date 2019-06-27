/*
 * @Author: SkylineBin 
 * @Date: 2019-06-27 21:14:50 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-27 21:15:47
 */


/*****
 * 
 * 将 arr 作为 fn 的参数
 * 
 * 
 */

// input:
// function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']

// output:
// Hello, Ellie!


function argsAsArray(fn, arr) {
    return fn.apply(this,arr);
}