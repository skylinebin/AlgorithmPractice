function decodeString(str){
    // your code here
    let outsideStr = "";
    let lastNum = [];
    let tempNum = "";
    let start = 0;
    tempStr = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i]>="0"&&str[i]<="9"){
            tempNum+=str[i];
        }else if(str[i]==="["){
            tempStr = "";
            start=i;
            lastNum.push(parseInt(tempNum));
        }else if(str[i]==="]"){
            let ts = tempStr;
            outsideStr = outsideStr.substring(0,start-1)+ts.repeat(lastNum.pop());
        }else{
            tempStr+=str[i];
        }
        outsideStr+=str[i];
    }
    let state = true;
    for (let i = 0; i < outsideStr.length; i++) {
        if(outsideStr[i]=="["){
            state=false;
        }
    }
    if(state){
        if(outsideStr[outsideStr.length-1]==="]"){
            return outsideStr.substring(0,outsideStr.length-1);
        }
        return outsideStr;
    }else{
        return decodeString(outsideStr);
    }
}

// decodeString('2[a2[b]]')
// let str="2[a2[b]]";
let str="3[ab]";
console.log(decodeString(str));
