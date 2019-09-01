function countThreeNums(left,right){
    let count=0;
    while(left<=right){
        let tN='';
        let tc=1;
        let num;
        while(tc<=left){
            tN+=tc;
            tc++;
        }
        // num=parseInt(tN);
        // console.log(num);
        let tNums = tN.split('').map((a)=>parseInt(a));
        num = tNums.reduce((a,b)=>a+b,0);
        if(num%3===0){
            count++;
        }
        left++;
    }
    return count;
}

// let left=2;
// let right=5;
let left=10;
let right=110;
console.log(countThreeNums(left,right));


// 复杂度稍降的写法
// 只需要计算序号
// i%3=1 不能被整除
// i%3=2 可以被整除
// i%3=0 可以被整除
function countThreeNums2(left,right){
    let count=0;
    while(left<=right){
        if(left%3!==1){
            count++;
        }
        left++;
    }
    return count;
}
