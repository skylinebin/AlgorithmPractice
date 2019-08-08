function processStr(str){
    let allStr = str.split('@');
    let hadStr = allStr[1];
    let initStr = allStr[0];
    if(hadStr.length===0){
        return initStr;
    }
    let dics = initStr.split(',');
    let initMap = new Map();
    for (let i = 0; i < dics.length; i++) {
        let tempData = dics[i].split(':');
        initMap.set(tempData[0],parseInt(tempData[1]));
    }
    let used = hadStr.split(',');
    for (let j = 0; j < used.length; j++) {
        let tempDataU = used[j].split(':');
        let hadNum = initMap.get(tempDataU[0]);
        if(hadNum-parseInt(tempDataU[1])>0){
            initMap.set(tempDataU[0],hadNum-parseInt(tempDataU[1]));
        }else{
            initMap.delete(tempDataU[0]);
        }
    }
    let output="";
    for(let [key,value] of initMap){
        output+= key+':'+value+',';
    }
    output = output.substring(0,output.length-1);
    return output;
}

let str = readline();
print(processStr(str));

// let str = "a:3,b:5,c:2@a:1,b:2";
let str = "a:3,b:5,c:2@a:3,b:2";
console.log(processStr(str));

