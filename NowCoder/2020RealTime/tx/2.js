
function isPrivate(ip){
    // TODO
    // if(ip==="127.0.0.0"||ip==="127.0.0.8"){
    //     return true;
    // }
    let regexpCy = /127.0.0.[0-8]/;
    if(regexpCy.test(ip)){
        return true;
    }
    let regexpA = /10(.((\d{1,2})|(1\d{1,2})|2([0-4]\d)|(25[0-5]))){3}/;
    if(regexpA.test(ip)){
        return true;
    }
    let regexpB = /172.(1[6-9]|2\d|3[01])(.((\d{1,2})|(1\d{1,2})|2([0-4]\d)|(25[0-5]))){2}/;
    if(regexpB.test(ip)){
        return true;
    }
    let regexpC = /192.168(.((\d{1,2})|(1\d{1,2})|2([0-4]\d)|(25[0-5]))){2}/;
    if(regexpC.test(ip)){
        return true;
    }
    return false;
}

let ip="0.0.0.0";
console.log(isPrivate(ip));