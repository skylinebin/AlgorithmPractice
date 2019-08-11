function flattenArr(arr,times){
    times = times || 1;
    let result = [];
    while (times>0) {
        result = [];
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])){
                result = result.concat(arr[i]);
            }else{
                result.push(arr[i]);
            }
        }
        arr = result.slice();
        times--;
    }
    return result;
}


let arr = [1,2,[3,4],[5,[6,7]],[8,9],[[11,12,[13,14,[15,16],[17,18,[19,20,21]]]],[22,23,[24,25]]]];
console.log(flattenArr(arr,1));
// console.log(flattenArr(arr,2));
// console.log(flattenArr(arr,3));
// console.log(flattenArr(arr,4));