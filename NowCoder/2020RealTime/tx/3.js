function camel(str) {
    // TODO
    let outStr="";
    let len = str.length;
    let state=false;
    for(let i=0;i<len;i++){
        if(i!==len-1&&(str[i]==='-'||str[i]==='_'||str[i]==='@')){
            state=true;
        }else{
            if(state){
                outStr+= str[i].toUpperCase();
                state=false;
            }else{
                outStr+= str[i];
            }
        }
    }
    return outStr;
};