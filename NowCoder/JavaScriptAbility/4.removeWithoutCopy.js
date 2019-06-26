
// 复杂最普通方法
function removeWithoutCopy(arr, item) {
    if (!arr || arr.length === 0) {
        return arr;
    }
    var len = arr.length;
    var count = 0,
        temp = 0;
    while (count < len) {
        if (JSON.stringify(arr[temp]) === JSON.stringify(item)) {
            arr.splice(temp, 1);
        } else {
            temp++;
        }
        count++;
    }
    return arr;
}

// 机智方法 倒着遍历，不用担心已删除的位置发生错位
function removeWithoutCopy2(arr, item){
    if (!arr || arr.length === 0) {
        return arr;
    }
    for (var index = arr.length-1; index >=0; index--) {
        if(arr[index]===item){
            arr.splice(index,1)
        }
    }
}

// 自己与自己作战
// 将 arr 看作队列，不重复的再放一遍到队列最后,
// 循环一次会把原有的数组都清除掉，剩下的就是copy的不重复的数据，顺序也能保持一致
function removeWithoutCopy3(arr, item){
    if (!arr || arr.length === 0) {
        return arr;
    }
    for (var index = 0; index <arr.length; index++) {
        if(arr[0]!==item){
            arr.push(arr[0]);
        }
        arr.shift()
    }
    return arr;
}