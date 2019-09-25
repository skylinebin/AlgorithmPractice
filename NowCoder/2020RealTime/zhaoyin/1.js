function updateNums(str){
    let res=[];
    let len = str.length;
    if(str[0]!=='R' || str[len-1]!=='L'){
        return res;
    }
    let states=[];
    for (let i = 0; i < len; i++) {
        states[i]=1;
    }
    function move(){
        let before,current;
        before = states[0];
        states[0]=0;
        for (let i = 1; i < len; i++) {
            current = states[i];
            let temp = before || 0;
            if(str[i]==='R'){
                states[i]=0;
                before=current;
            }
            if(str[i]==='L'){
                states[i-1]+=current;
                states[i]=0;
                before=0;
            }
            states[i]+=temp;
        }
        return states.join('#');
    }
    let stores=[];
    
    let count=1;
    let data=move();
    stores.push(data);
    console.log(states);
    while(stores.indexOf(data)===-1 || count%2!==0){
        data=move();
        count++;
        stores.push(data);
        console.log(states);
    }
    // move();
    // console.log(states);
    // move();
    // console.log(states);
    return states;
}

let str="RRLRL";
// let str="RRRRRLRLRL";
console.log(updateNums(str));