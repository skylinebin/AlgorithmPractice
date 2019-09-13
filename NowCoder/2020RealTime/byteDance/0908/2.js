function findMinTimes(x,y,z,k){
    [x,y,z] = [x,y,z].sort((a,b)=>a-b);// 从小到大排序后赋值
    function twoTimes(a,b,k){ // 两个数就装满k的次数
        let count=0;
        let temp=a;
        while(temp%b!==k){
            count+=2;
            temp+=a;
            count++;
        }
        return count;
    }
    return Math.min.apply(null,[twoTimes(x,y,k),twoTimes(x,z,k),twoTimes(x,z,k)]); // 求三个数里面两个两个求取的最小值
}




let x=3;
let y=5;
let z=8;
let k=4;
console.log(findMinTimes(x,y,z,k));