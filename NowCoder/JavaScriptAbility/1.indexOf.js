
function indexOf(arr, item) {
    if(Array.prototype.indexOf){
        return arr.indexOf(item);
    }else{
        for(var i=0;i<arr.length;i++){
            if(item === arr[i]){
                return i;
            }
        }
        return -1;
    }
}

let arr = [1,2,3,4,5];
let item = 3;
console.log(indexOf(arr, item));

let datas = readline().split(" ");
let arr = new Array(datas[0]);
let item = parseInt(datas[1]);
print(indexOf(arr, item))