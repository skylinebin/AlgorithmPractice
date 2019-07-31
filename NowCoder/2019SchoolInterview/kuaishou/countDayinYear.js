/*
 * @Author: SkylineBin 
 * @Date: 2019-07-31 09:43:37 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-31 09:47:53
 */


/*****
 * 
 * 今年第几天
 * 
 * 输入年、月、日，计算该天是本年的第几天。 
 * 输入： 
 * 包括三个整数年(1<=Y<=3000)、月(1<=M<=12)、日(1<=D<=31)。 
 * 输出： 
 * 输入可能有多组测试数据，对于每一组测试数据， 
 * 输出一个整数，代表Input中的年、月、日对应本年的第几天。
 * 
 * 输入描述：
 * 输入：1990 9 20
 * 输出描述：
 * 输出：263
 * 
 * 输入示例：
 * 2000 5 1
 * 输出示例：
 * 122
 * 
 * 
 * 
 */


function countDayinYear(year,month,day){
    let count=0;
    let mons = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    // 判断是否是闰年的方法
    function checkifLeap(y){
        if((y%4===0 && y%100!==0) || y%400===0){
            return true;
        }else{
            return false;
        }
    }
    // 闰年改二月
    if(checkifLeap(year)){
        mons[1]=29;
    }
    // 计算已经过去的月份
    for(let i=0;i<month-1;i++){
        count+=mons[i];
    }
    count+=day;
    return count;
}


let [year,month,day] = [2019,8,1];
console.log(countDayinYear(year,month,day));


// let initData = readline().split(' ');
// let year = parseInt(initData[0]);
// let month = parseInt(initData[1]);
// let day = parseInt(initData[2]);

// print(countDayinYear(year,month,day))