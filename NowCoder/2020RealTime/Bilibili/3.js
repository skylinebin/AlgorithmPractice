function checkIfL(str){
    let strDic={
        "]":"[",
        ")":"(",
        "}":"{"
    };
    let len = str.length;
    let store=[];
    for(let i=0;i<len;i++){
        if(str[i]==="("||str[i]==="["||str[i]==="{"){
            store.push(str[i]);
        }else if(str[i]===")"||str[i]==="]"||str[i]==="}"){
            if(!store.length){
                return false;
            }else{
                let temp = store.pop();
                if(strDic[str[i]]!==temp){
                    return "false";
                }
            }
        }
    }
    if(store.length!==0){
        return "false";
    }
    return "true";
}


// let str = readline();
// print(checkIfL(str))

let str="{[][()()]}";
console.log(checkIfL(str));