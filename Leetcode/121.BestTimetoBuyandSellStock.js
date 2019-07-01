/*
 * @Author: SkylineBin 
 * @Date: 2019-07-01 21:37:48 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-01 21:40:41
 */

/****
 * 
 * 买卖股票的最佳时机
 * 
 * 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPro=0,min=Number.MAX_VALUE;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min){
            min = prices[i];
        }
        if(prices[i]-min > maxPro){
            maxPro = prices[i]-min;
        }
    }
    return maxPro;
};