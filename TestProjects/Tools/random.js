/****
 * 
 * 常用的随机函数生成器
 * 
 * 
 */

/**
 * 返回一个 0~maxNum 之间的整数
 * @param {*} maxNum 
 */
function backInMax(maxNum) {
    return Math.floor(Math.random() * Math.floor(maxNum));
}


/**
 * 生成指定长度和取值范围的数组
 * @param {*} size 
 * @param {*} value 
 */ 
function generateRandomArray(size, value) {
    let randomArrays = [];
    // 生成长度随机的数组  
    let arrayLength = parseInt((size + 1) * Math.random());
    for (let index = 0; index < arrayLength; index++) {
        randomArrays[index] = parseInt((value + 1) * Math.random()) - parseInt(value * Math.random());
    }

    if (randomArrays.length === 0) {
        arrayLength = generateRandomArray(size, value);
    }

    return randomArrays;
}