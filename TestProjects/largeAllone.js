/*****
 * 
 * 
 * 
 * 
 */

function largeAll(arr,k){
    if (arr.length === 0) {
        return 0;
    }

    var len = arr.length;
    var zeroArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(i);
        }
    }
    if (k>= zeroArr.length) {
        return len;
    }
}

while (line = readline()) {
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    // 读取参数完成方法调用
    var m = dictionarySortList(a, b);
    print(m);
}