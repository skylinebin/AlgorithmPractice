function processStr(str){
    var count=0;
    var len = str.length;
    var temp='';
    if(str[0]>='0'&&str[0]<='9'){
        temp=str[0];
    }
    for (let i = 1; i < len; i++) {
        if(str[i]>='0'&&str[i]<='9'){
            temp+=str[i];
        }else{
            if(temp.length>0){
                count+=parseInt(temp);
                temp='';
            }
        }
    }
    return count;

}

let str = "abc24fdfajf435d43fsf34dbfb324afafd";
console.log(processStr(str));