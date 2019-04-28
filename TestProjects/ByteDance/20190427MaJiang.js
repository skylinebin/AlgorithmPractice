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

    // ! 用于判断 14 张牌是否能够和牌
    this.checkIfWin = function (tempArr) {
        if (tempArr.length !== 14) {
            return false;
        }
        // 统计每种数字的数量
        var countArr = [];
        countArr[0] = 0;
        for (let i = 1; i <= 9; i++) {
            countArr[i] = 0;
        }
        for (let j = 0; j < tempArr.length; j++) {
            countArr[tempArr[j]]++;
        }

        // 对 统计的结果 countArr 进行判断是否和牌
        // console.log(countArr);
        var proDouble = [];
        for (let i = 1; i <=9; i++) {
            // 存在 5 个 一样的是不合法的数据，不能胡牌
            if (countArr[i]>= 5) {
                return false;
            }

            // 存在 有 对子的 先存起来
            if (countArr[i] >= 2) {
                proDouble.push(i);
            }
        }
        // console.log(proDouble);
        if (proDouble.length === 0) {
            return false;
        }

        var lastResult = false;
        // 循环判断 去除 雀头 后是否为 4 个 顺子或 刻子
        for (let k = 0; k < proDouble.length; k++) {
            var lastArr = countArr.slice(0);
            lastArr[proDouble[k]]-= 2;
            if (this.checkIfOrderorTri(lastArr)) {
                // console.log('someone like u');
                lastResult = true;
            }
        }

        return lastResult;

    }

    // ! 用于判断是否是 4 个 顺子或刻子
    this.checkIfOrderorTri = function (lastArr) {
        // console.log('lastArr', lastArr);
        var resultState = false;
        var countResult = 0;
        var tempOrder = [];
        var backOrder = [];
        var bace;
        for (let i = 1; i <=9; i++) {
            if (lastArr[i] !== 0) {
                if (lastArr[i] === 4) {
                    countResult++;
                    tempOrder.push(i);
                }
                if (lastArr[i] === 3) {
                    countResult++;
                }
                if (lastArr[i] === 2) {
                    tempOrder.push(i);
                    backOrder.push(i);
                }
                if (lastArr[i] === 1) {
                    tempOrder.push(i);
                    backOrder = [];
                    bace = true;
                }

                if (tempOrder.length === 3) {
                    if ((tempOrder[1] === tempOrder[0] + 1) && (tempOrder[2] === tempOrder[1] + 1)) {
                        countResult++;
                        tempOrder = [];
                        if (bace && lastArr[i] === 2) {
                            tempOrder.push(i);
                            bace = false;
                        }

                    } else {
                        return resultState;
                    }
                }
                if (backOrder.length === 3) {
                    if ((backOrder[1] === backOrder[0] + 1) && (backOrder[2] === backOrder[1] + 1)) {
                        countResult++;
                        backOrder = [];
                    }
                }


            }
        }
        if (countResult === 4) {
            resultState = true;
        }

        return resultState;
    }

    
    for (let i = 1; i <=9; i++) {
        var tempArr = cardArr.slice(0);
        tempArr.push(i);
        // console.log(tempArr);
        if (this.checkIfWin(tempArr)) {
            effecArr.push(i);
        }
    }
    return effecArr;
}

var cardArr = [1, 1, 1, 1, 2, 2, 3, 3, 5, 6, 7, 8, 9]; // 4,7
var cardArr2 = [1, 1, 1, 2, 2, 2, 5, 5, 5, 6, 6, 6, 9]; // 9
console.log(countWinWays(cardArr2));