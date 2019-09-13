/*
 * @Author: SkylineBin 
 * @Date: 2019-09-12 21:08:56 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-09-12 21:10:48
 */

/*****
 * 
 * 射气球的最小只箭
 * 
 * 使用贪心算法
 * 
 * 
 * 
 */


var findMinArrowShots = function(points) {
    if(!points || points.length===0){
        return 0;
    }
    points.sort((a,b)=>a[0]-b[0]);
    var count=1;
    var rangeLeft=points[0][0];
    var rangeRight=points[0][1];
    for(var i=1;i<points.length;i++){
        var tempPoint=points[i];
        if(tempPoint[0]>rangeRight){
            count++;
            rangeLeft=tempPoint[0];
            rangeRight=tempPoint[1];
        }else if(tempPoint[1]>=rangeRight&&tempPoint[0]<=rangeRight){
            rangeLeft=tempPoint[0];
        }else if(tempPoint[1]<=rangeRight&&tempPoint[0]>=rangeLeft){
            rangeLeft=tempPoint[0];
            rangeRight=tempPoint[1];
        }
    }
    return count;
};

var points=[[0,9],[1,8],[7,8],[1,6],[9,16],[7,13],[7,10],[6,11],[6,9],[9,13]];
console.log(findMinArrowShots(points));