function processStr(str){
    var output=[];
    var state=true;
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str[i]!=='<'){
            if(str[i]==='('){
                state=false;
                count++;
            }else if(str[i]===')'){
                count--;
                if(count===0){
                    state=true;
                }
            }else if(state){
                output.push(str[i]);
            }
        }else if(str[i]==='<'&&state){
            if(output.length>0){
                output.pop();
            }
            
        }
    }
    return output.join('');
}


let str="a<<b((c)<)";
console.log(processStr(str));


// var str;
// while(str=read_line()){
//     if(str){
//         print(processStr(str));
//     }
    
// }