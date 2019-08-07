function findBottle(num){
    if(num==3 || num===2){
        return 1;
    }
    if(num <=1){
        return 0;
    }
    let state = parseInt(num/3);
    return state + findBottle(state+num%3);
}

let data;
while(data=readline()){
    if(parseInt(data)!==0){
        print(findBottle(parseInt(data)));
    }else{
        break;
    }
}