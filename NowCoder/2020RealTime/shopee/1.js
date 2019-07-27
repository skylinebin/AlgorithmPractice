function processData(data){
    let outside = [];
    let store = new Map();
    data = data.toLowerCase();
    for(let i=0;i<data.length;i++){
        if(!store.get(data[i])){
            store.set(data[i],1);
        }else{
            store.set(data[i],store.get(data[i])+1);
        }
    }
    let reData = [];
    let onceData=[];
    for(let [key,value] of store){
        if(value === 1){
            onceData.push(key);
        }else{
            reData.push(key);
        }
    }
    onceData.sort((a,b)=>a.charCodeAt()-b.charCodeAt());
    reData.sort((a,b)=>a.charCodeAt()-b.charCodeAt());
    outside.push(reData.join(''));
    outside.push(onceData.join(''));
    return outside;
}

let data = "aaaaa";
console.log(processData(data));


let datas = readline();
let output = processData(datas);
if(output.length){
    for(let i=0;i<output.length;i++){
        if(output[i]){
            print(output[i]);
        }
    }
}else{
    print();
}
