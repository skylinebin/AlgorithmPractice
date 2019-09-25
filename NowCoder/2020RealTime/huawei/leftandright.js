// 更改数组，保证奇数在左边偶数在右边
// 时间复杂度O(N),空间复杂度O(1),对原有顺序无要求

function moveArrs(arr){
    var len = arr.length-1;
    while(len>=0){
        if(arr[len]%2===0){
            var temp=arr.splice(len,1)[0];
            arr.push(temp);
        }
        len--;
    }
    return arr;
}


var arr=[1,2,3,4,5,6,7,8,6,7,9,0];
console.log(moveArrs(arr));

// 时间复杂度O(N)，空间复杂度O(N)，对原有顺序有要求
function moveArrs2(arr){
    var len = arr.length;
    var res=[];
    for (let i = 0; i <len; i++) {
        if(arr[i]%2===0){
            res.push(arr[i]);
        }
    }
    for (let i = len-1; i >=0; i--) {
        if(arr[i]%2===1){
            res.unshift(arr[i]);
        }
    }
    return res;
}

var arr2=[1,2,3,4,5,6,7,8,6,7,9,0];
console.log(moveArrs2(arr2));


// 双指针版本
function moveArrs3(arr){
    var len = arr.length;
    var res=[];
    var left=0,right=len-1;
    while(left<len&&right>=0){
        if(arr[left]%2===0){
            res.push(arr[left]);
        }
        if(arr[right]%2===1){
            res.unshift(arr[right]);
        }
        left++;
        right--;
    }
    return res;
}

var arr3=[1,2,3,4,5,6,7,8,6,7,9,0];
console.log(moveArrs3(arr3));