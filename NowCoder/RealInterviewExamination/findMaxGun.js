function findMax(numN,numM,Guns,plugins){
    let max = 0;
    function findGuns(gun){
        let temp = parseFloat(gun[0]);
        let tempNum = parseInt(gun[1]);
        let times = 1;
        for(let m=0;m<tempNum;m++){
            times+= parseFloat(plugins.get(gun[m+2]));
        }
        return temp*times;
    }
    
    for(let k=0;k<numN;k++){
        max = Math.max(max, findGuns(Guns[k]))
    }
    return max.toFixed(4);
}

let initData = readline().split(' ');
let numN = parseInt(initData[0]);
let numM = parseInt(initData[1]);
let Guns = [];
let temp = numN;
for(let i=0;i<temp;i++){
    Guns.push(readline().split(' '));
}
let plugins = new Map();
for(let j=0;j<numM;j++){
    let tempData = readline().split(' ');
    if(plugins.get(tempData[0])){
        if(tempData[1]>plugins.get(tempData[0])){
            plugins.set(tempData[0],tempData[1]);
        }
    }else{
        plugins.set(tempData[0],tempData[1]);
    }
}
print(findMax(numN,numM,Guns,plugins))







function findMax(numN,numM,Guns,plugins){
    let max = 0;
    
    for(let k=0;k<numN;k++){
        let gun = Guns[k];
        let temp = parseFloat(gun[0]);
        let tempNum = parseInt(gun[1]);
        let times = 1;
        for(let m=0;m<tempNum;m++){
            times+= parseFloat(plugins[gun[m+2]]);
        }
        let tempMax = (temp*times).toFixed(4);
        max = Math.max(max, tempMax);
    }
    return max.toFixed(4);
}

let initData,numN,numM,Guns,temp;
while(initData=readline()){
    initData= initData.split(' ');
    numN = parseInt(initData[0]);
    numM = parseInt(initData[1]);
    Guns = [];
    temp = numN;
    for(let i=0;i<temp;i++){
        let tempGun = readline().split(' ');
        Guns.push(tempGun);
    }
    let plugins = {};
    for(let j=0;j<numM;j++){
        let tempData = readline().split(' ');
        let state = plugins[tempData[0]];
        if(state){
            if(parseFloat(tempData[1])>parseFloat(state)){
                plugins[tempData[0]]=tempData[1];
            }
        }else{
            plugins[tempData[0]]=tempData[1];
        }
    }
    print(findMax(numN,numM,Guns,plugins));
}