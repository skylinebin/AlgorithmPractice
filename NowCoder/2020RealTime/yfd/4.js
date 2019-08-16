Array.prototype.copySlice= function(i,j){
    let arr = this;
    i = i || 0;
    j = j || arr.length;
    let res = [];
    for (let k = 0; k < arr.length; k++) {
        if(k>=i&&k<j){
            res.push(arr[k]);
        }
    }
    return res;
}

let arr = [1,2,3];
// let a=arr.copySlice(1,2);
let a=arr.copySlice();
console.log(a);
