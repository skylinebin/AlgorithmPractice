function process(computes,replaces,last){
    let Dics={};
    for(let i=0;i<replaces.length;i++){
        let temp = replaces[i].split('=');
        Dics[temp[0]]=temp[1];
    }
    for(let j=computes.length-1;j>=0;j--){
        let cTemp = computes[j].split('=');
        let tempBefore=cTemp[1];
        for(let key in Dics){
            if(Dics.hasOwnProperty(key)){
                while(tempBefore.indexOf(key)!==-1){
                    tempBefore=tempBefore.replace(key,"("+Dics[key]+")");
                }
            }
        }
        Dics[cTemp[0]]=tempBefore;
    }
    let lastCompute = Dics[last];
    let afterCom="";
    for(let k=0;k<lastCompute.length;k++){
        if(lastCompute[k]==='{'){
            afterCom+="(";
        }else if(lastCompute[k]==='}'){
            afterCom+=")";
        }else{
            afterCom+=lastCompute[k];
        }
    }
    return eval(afterCom); 
}


// let str = readline().split(";");
let str = "[1234]=[12]+[34]*{50},[12]=[1]+[2]/{2};[1]=10,[2]=20,[34]=50;[1234]".split(";");
let computes = str[0].split(",");
let replaces = str[1].split(",");
let last=str[2];
console.log(process(computes,replaces,last));