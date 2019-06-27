/*
 * @Author: SkylineBin 
 * @Date: 2019-06-27 20:52:17 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-27 21:06:45
 */

function count(start, end) {
    console.log(start);
    function timeInterval(){
    // 执行定时调用的方法
        if(start < end){
            console.log(++start);
            setTimeout(timeInterval, 100);           
        }
    }
    timeInterval();
    let backObj={};
    backObj.cancel = function(){
        timeInterval=null;
    }
    return backObj;
}

function count2(start, end) {
    if(start<=end){
        console.log(start++);    
        var timer = setTimeout(function(){count(start,end)},100);
    }
    return {
        cancel:function(){
            clearTimeout(timer);
        }
    };
}


// 只有第三个通过了

function count3(start, end) {
    console.log(start++); 
    var timer = setInterval(function(){
        if(start<=end){
            console.log(start++); 
        }else {
            clearInterval(timer);
        }
    },100);

    return {
        cancel:function(){
            clearInterval(timer);
        }
    };
}

count3(1,10);