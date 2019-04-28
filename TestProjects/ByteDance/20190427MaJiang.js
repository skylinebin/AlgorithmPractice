/*****
 * 
 * 字节跳动 春招技术类实习生笔试第二题
 * 
 * 36 张牌(9*4)的麻将打法 
 * 
 * 输入 13 张牌，问再取一张牌，取哪几种数字可以 和牌
 * 
 * 和牌条件：一个雀头(对子)，四个顺子(234,456)或刻子(111,333)
 * 和牌例子：1 1 1 2 2 2 6 6 6 7 7 7 9 9
 * 
 * ! 问题描述：输入 13 张牌， 问再取一张牌， 可以取哪几种数字达到和牌的条件
 * 输出为 数字的 集合
 */

// 解析: 将问题转换成 判断是否和牌的问题

function countWinWays(cardArr){
    var effecArr = [];
    if (cardArr.length !== 13){
        return effecArr;
    }

    // 用于判断 14 张牌是否能够和牌
    this.checkIfWin = function (tempArr) {
        if (tempArr.length !== 14) {
            return false;
        }
        // 统计每种数字的数量

    }

    for (let i = 1; i <=9; i++) {
        var tempArr = cardArr;
        tempArr.push(i);
        if (this.checkIfWin(tempArr)) {
            effecArr.push(i);
        }
    }
    return effecArr;
}

var cardArr = [1, 1, 1, 1, 2, 2, 3, 3, 5, 6, 7, 8, 9];
console.log(countWinWays(cardArr));