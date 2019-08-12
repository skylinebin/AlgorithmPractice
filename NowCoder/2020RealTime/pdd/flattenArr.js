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


// let arr = [1,2,[3,4],[5,[6,7]],[8,9],[[11,12,[13,14,[15,16],[17,18,[19,20,21]]]],[22,23,[24,25]]]];
// console.log(flattenArr(arr,1));
// console.log(flattenArr(arr,2));
// console.log(flattenArr(arr,3));
// console.log(flattenArr(arr,4));



// 按次数，并非按层
// 此时是按照层展开
function flat (arr, depth){
    let res = [],
        depthArg = depth || 1,
        depthNum = 0,
        flatMap = (arr) => {
            arr.map((element, index, array) => {
                if(Object.prototype.toString.call(element).slice(8, -1) === "Array"){
                        if( depthNum < depthArg ) {
                            depthNum++;
                            // console.log(depthNum);
                            flatMap(element);
                        }else{
                            res.push(element);
                        }
                }else {
                    res.push(element);
            }
            if( index === array.length -1 ) {
                // console.log('times');
                // 每处理一次数组，就把深度重新置零
                depthNum = 0;
            }
        });
    };
    flatMap(arr);
    return res;
}
var arr = [1,2,[3,4],[5,[6,7],6,[6,7],6,7],8,[9,10],11];
// console.log(flat(arr,1));
console.log(flattenArr(arr,1));