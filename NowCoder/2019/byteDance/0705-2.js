/*
 * @Author: SkylineBin 
 * @Date: 2019-07-05 21:26:33 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-06 16:40:27
 */


/*****
 * 
 * 计算日期到 2012.03.12的天数
 * 
 * 
 * 
 */

function findDays(arrs){
    let outCount = [];
    let startDate = new Date('2012-3-12');
    this.calDay = function(tempDate){
        let newDate = new Date(String(tempDate.join('-')));
        // 以毫秒计数，要除以1000来计算间隔的天数
        return parseInt((newDate-startDate)/24/60/60/1000);
    }
    for (let i = 0; i < arrs.length; i++) {
        outCount.push(this.calDay(arrs[i]));
    }
    return outCount;
}

let arrs = [[2012,3,14],[2013,3,12],[2014,5,15],[2019,3,12],[2019,7,5]];
console.log(findDays(arrs));