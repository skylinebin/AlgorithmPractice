/*
 * @Author: SkylineBin 
 * @Date: 2019-06-27 21:23:33 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-27 21:24:47
 */


function functionFunction(str) {
    return function(str2){
        return str+', '+str2;
    };
}

console.log(functionFunction('Hello')('world'));