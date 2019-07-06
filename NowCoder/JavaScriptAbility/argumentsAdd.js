/*
 * @Author: SkylineBin 
 * @Date: 2019-07-06 22:04:00 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-06 22:09:47
 */


/****
 * 
 * Arguments 求和的解法
 * 
 * 
 * 
 */


// 普通版本
function useArguments() {
    var outside = 0;
    for(var i=0;i<arguments.length;i++){
        outside+=arguments[i];
    }
    return outside;
}

// 精简版本
function useArguments2() {
    var result = Array.prototype.slice.call(arguments);
    return eval(result.join('+'));
}

// 优秀版本
function useArguments3(){
    var result = Array.prototype.reduce.call(arguments,function(a,b){return a+b});
    return result;
}

// ES6 版本
let useArgumentsES6 = (...args) => args.reduce((a,b)=>a+b);
console.log(useArgumentsES6(1,2,3,4,5,6));