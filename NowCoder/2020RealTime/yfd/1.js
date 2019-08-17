/******
 * 
 * 字母压缩展开
 * 
 * "A2B" => "AAB"
 * "D((A2B)2)2B" => "DAABAABAABAABB"
 * 
 * 
 * 
 */


// 此方法不通过
function processStr(numN,datas){
    let output = [];

    function proStr(str){
        let pdstr=""
        let store = [];
        state = false;
        let count = "";
        for (let j = 0; j < str.length; j++) {
            let temp = str[j];
            if(temp>='0'&& temp<='9'){
                count += temp;
                state= true;
                // console.log(count);
            }else if(temp === '('){
                count = "";
                pdstr += store.join('');
                store=[];
            }else if(temp === ')'){
                count="";
                state = true;
            }else{
                if(count !=='' && state){
                    // console.log(count);
                    let tstr = '';
                    let add = Number(count);
                    cstr = store.join('');
                    let k=0;
                    while(k<add){
                        tstr+=cstr;
                        k++;
                    }
                    pdstr+= tstr;
                    state= false;
                    store=[];
                    count="";
                    store.push(temp);
                }else{
                    store.push(temp);
                }
            }
        }

        if(store.length){
            pdstr += store.join('');
            store = [];
        }

        return pdstr;
    }

    for (let i = 0; i < datas.length; i++) {
        output.push(proStr(datas[i]));
    }
    return output;
}



// 使用正则表达式可通过
function processArr(numN,datas){
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





let numN=4;
let datas = ["A11B", "(AA)2A", "((A2B)2)2G", "(YUANFUDAO)2JIAYOU", "A2BC4D2"];
// console.log(processStr(numN,datas));
console.log(processArr(numN,datas));
