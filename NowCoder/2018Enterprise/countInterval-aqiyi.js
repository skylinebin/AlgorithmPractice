/*
 * @Author: SkylineBin 
 * @Date: 2019-05-17 14:55:41 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-05-17 14:59:01
 */

/****
 * 
 * 2018 爱奇艺校招一题
 * 
 * 牛牛的老师给出了一个区间的定义:对于x ≤ y,[x, y]表示x到y之间(包括x和y)的所有连续整数集合。
 * 例如[3,3] = {3}, [4,7] = {4,5,6,7}.
 * 牛牛现在有一个长度为n的递增序列,牛牛想知道需要多少个区间并起来等于这个序列。例如:
 * {1,2,3,4,5,6,7,8,9,10}
 * 最少只需要[1,10]这一个区间
 * {1,3,5,6,7}
 * 最少只需要[1,1],[3,3],[5,7]这三个区间
 * 
 * 输入包括两行, 第一行一个整数n(1≤ n≤ 50),
 * 第二行n个整数a[i](1≤ a[i]≤ 50), 表示牛牛的序列, 保证序列是递增的。
 * 
 * 输入：
 * 5
 * 1 3 5 6 7
 * 
 * 输出：
 * 3
 * 
 * 
 */


function countNum(arrays) {
    let count = 1;
    if (arrays.length === 0) {
        return 0;
    }
    if (arrays.length === 1) {
        return count;
    }
    for (let i = 1; i < arrays.length; i++) {
        if (arrays[i] - arrays[i - 1] > 1) {
            count++;
        }
    }
    return count;
}

// 注意看读行过程

var initPre = readline().split(" ");
var countN = parseInt(initPre[0]);

var datas = readline().split(" ");
var realdatas = [];

for (var i = 0; i < countN; i++) {
    realdatas.push(parseInt(datas[i]));
}
var result = countNum(realdatas);
print(result);