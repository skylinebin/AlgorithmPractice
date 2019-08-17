function processArr(datas){
    let output = [];

    function strRegExp(str){
        let pStr = str;
        let regexp1 = /[a-zA-Z][0-9]+/; //匹配字符后面是数字的
        let regexp2 = /\(\w*\)[0-9]+/; // 匹配括号后面是数字的

        // 处理掉字符后面是数字的情况
        let turnOne = pStr.match(regexp1);
        while(turnOne!== null){
            let matchStr = turnOne[0];
            let rStr = matchStr[0];
            let len = matchStr.length;
            let times = parseInt(matchStr.substring(1,len));
            pStr = pStr.replace(matchStr, rStr.repeat(times));
            turnOne = pStr.match(regexp1);
        }

        // 处理括号后面是数字的情况
        let turnTwo = pStr.match(regexp2);
        while(turnTwo!== null){
            let matchStr = turnTwo[0];
            let proStr = matchStr.split(')');
            let rStr = proStr[0].substring(1,proStr[0].length);
            let times = parseInt(proStr[1]);
            pStr = pStr.replace(matchStr, rStr.repeat(times));
            turnTwo = pStr.match(regexp2);
        }
        return pStr;
    }


    for (let i = 0; i < datas.length; i++) {
        output.push(strRegExp(datas[i]));
    }
    return output;

}


function strRegExp(str){
    let pStr = str;
    let regexp1 = /\[[0-9]+\|[A-Z]+\]/; //匹配字符后面是数字的
    // let regexp2 = /\(\w*\)[0-9]+/; // 匹配括号后面是数字的

    // 处理掉字符后面是数字的情况
    let turnOne = pStr.match(regexp1);
    console.log(turnOne);
    while(turnOne!== null){
        let matchStr = turnOne[0];
        let datas = matchStr.split('|');
        let rStr = datas[1].substring(0,datas[1].length-1);
        let times = parseInt(datas[0].substring(1,datas[0].length));
        pStr = pStr.replace(matchStr, rStr.repeat(times));
        turnOne = pStr.match(regexp1);
    }

    // let turnOne = pStr.match(regexp1);
    // while(turnOne!== null){
    //     let matchStr = turnOne[0];
    //     let rStr = matchStr[0];
    //     let len = matchStr.length;
    //     let times = parseInt(matchStr.substring(1,len));
    //     pStr = pStr.replace(matchStr, rStr.repeat(times));
    //     turnOne = pStr.match(regexp1);
    // }

    // // 处理括号后面是数字的情况
    // let turnTwo = pStr.match(regexp2);
    // while(turnTwo!== null){
    //     let matchStr = turnTwo[0];
    //     let proStr = matchStr.split(')');
    //     let rStr = proStr[0].substring(1,proStr[0].length);
    //     let times = parseInt(proStr[1]);
    //     pStr = pStr.replace(matchStr, rStr.repeat(times));
    //     turnTwo = pStr.match(regexp2);
    // }
    return pStr;
}

let str ="HG[3|B[2|CA]]F";

console.log(strRegExp(str));


function processStr(str){
    let pStr = str;
    let regexp1 = /\[[0-9]+\|[A-Z]+\]/; 
    let turnOne = pStr.match(regexp1);
    while(turnOne!== null){
        let matchStr = turnOne[0];
        let datas = matchStr.split('|');
        let rStr = datas[1].substring(0,datas[1].length-1);
        let times = parseInt(datas[0].substring(1,datas[0].length));
        pStr = pStr.replace(matchStr, rStr.repeat(times));
        turnOne = pStr.match(regexp1);
    }
    return pStr;
}




// let str = readline();
// print(processStr(str))