function getUsers(nums,num){
    let output=[];
    let index=0;
    while(index<num){
        let temp = parseInt(Math.random()*nums)+1;
        if(output.indexOf(temp)===-1){
            output.push(temp);
            index++;
        }
    }
    return output;
}

console.log(getUsers(100,10));