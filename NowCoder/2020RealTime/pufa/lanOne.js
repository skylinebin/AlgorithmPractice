function processStr(str){
    var store = new Map();
    var len = str.length;
    for (let i = 0; i < len; i++) {
        if(store.get(str[i])){
            store.set(str[i],store.get(str[i])+1);
        }else{
            store.set(str[i],1);
        }
    }
    var arrs=[];
    for(let [key,values] of store){
        arrs.push([values,String(key).repeat(values)]);
    }
    arrs.sort((a,b)=>b[0]-a[0]);
    let output='';
    for (let j = 0; j < arrs.length; j++) {
        output+=arrs[j][1];
    }
    return output;

}

let str = "abcfdfajfdfsfdbfbafafd";
console.log(processStr(str));