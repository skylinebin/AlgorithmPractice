/****
 * 
 * 求 1~n 直接 出现 1 的数的个数
 * 
 * 求出1~13 的整数中1出现的次数, 并算出100~1300 的整数中1出现的次数？ 
 * 为此他特别数了一下1~13 中包含1的数字有1、 10、 11、 12、 13 因此共出现6次, 但是对于后面问题他就没辙了。 
 * ACMer希望你们帮帮他, 并把问题更加普遍化, 可以很快的求出任意非负整数区间中1出现的次数（ 从1 到 n 中1出现的次数）。
 * 
 */

// ! 非原理性解法(暴力解法)

function NumberOf1Between1AndN_Solution(n) {
    // write code here
    if (n <= 0) {
        return 0;
    }
    var count = 0;
    for (let i = 1; i <= n; i++) {
        var tempData = String(i).match('1');
        if (tempData !== null) {
            var tempArr = String(i);
            for (var j in tempArr) {
                if (tempArr[j] === '1') {
                    count++;
                }
                
            }
            // count += tempData.length;
        }
    }
    return count;
}

var num = 13;
console.log(NumberOf1Between1AndN_Solution(num));

// 原理性解法
// 判断一个数里面有几个 1