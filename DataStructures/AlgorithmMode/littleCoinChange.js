/*****
 * 用 JavaScript 实现硬币找零 问题
 * 按照 动态规划的思路 
 * 
 * 问题描述: 给出面额 d1,d2,...,dn 的一定数量的硬币，和要找零的总钱数
 * 找出有多少种找零的方法
 * 
 */


/**
 * 将硬币找零问题变换为最少硬币个数的问题
 * @param {*} coins 
 * ! 使用动态规划思想解决
 * 找到 n 所需的最小硬币数，先找到对每个 x < n 的解，
 * 将 n 的解建立在更小的值的解的基础上
 */
function MinCoinChange (coins) {
    var coins = coins;
    var cache = {};

    // 递归函数实现找零问题
    // ! amount 表示需要找零的总金额
    this.makeChange = function (amount) {
        var that = this;
        if (!amount) {
            return [];
        }

        // cache 里存的是已有的解决方案
        if (cache[amount]) {
            return cache[amount];
        }

        var min = [], newMin, newAmount;
        // 基于硬币的面额解决问题
        for (let i = 0; i < coins.length; i++) {
            var coin = coins[i];
            newAmount = amount - coin;
            if (newAmount >= 0) {
                newMin = that.makeChange(newAmount);
            }

            // ! 问题的关键 对每个小于 amount 的数 都计算 makeChange 的结果
            // 判断 newAmount 是否有效, minValue 是否是最优解，minValue 和 newAmount 的值是否合理
            if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount);
                // console.log(cache); // 辅助理解
            }
        }
        return (cache[amount] = min);
    }

}

var coins = [1, 5, 10, 25]
var minCoinChange = new MinCoinChange(coins);
console.log(minCoinChange.makeChange(23));



/**
 * 使用贪心算法解决最少硬币问题
 * 
 * @param {*} coins
 */
function MinCoinChangeHun(coins){
    var coins = coins;
    this.makeChange = function (amount) {
        var change = [],
        total = 0;
        // 从最大的面额开始，其实要保证面额是有序的从小到大
        for (let i = coins.length; i >= 0; i--) {
            var coin = coins[i];
            while (total + coin <= amount) {
                change.push(coin);
                total += coin;
            }
        }
        return change;
    }
}


var coinsH = [1, 5, 10, 25]
var minCoinChangeH = new MinCoinChangeHun(coins);
console.log(minCoinChangeH.makeChange(23));

// 贪心算法并不是总是最优的
// 如果硬币 是 [1, 3, 4]
// 需要找零的硬币是 6
// 使用贪心算法 会得到 [4, 1, 1]
// 使用动态规划会得到 [3, 3]