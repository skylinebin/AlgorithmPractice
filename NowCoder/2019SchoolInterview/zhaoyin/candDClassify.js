/*
 * @Author: SkylineBin 
 * @Date: 2019-07-31 09:01:36 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-31 09:20:29
 */


/********
 * 
 * 鸡鸭分类问题  
 * 
 * 农场有n只鸡鸭排为一个队伍，鸡用“C”表示，鸭用“D”表示。当鸡鸭挨着时会产生矛盾。
 * 需要对所排的队伍进行调整，使鸡鸭各在一边。每次调整只能让相邻的鸡和鸭交换位置，
 * 现在需要尽快完成队伍调整，你需要计算出最少需要调整多少次可以让上述情况最少。
 * 例如：CCDCC->CCCDC->CCCCD这样就能使之前的两处鸡鸭相邻变为一处鸡鸭相邻，需要调整队形两次。
 * 
 * 输入描述：
 * 输入一个长度为N，且只包含C和D的非空字符串。
 * 
 * 输出描述：
 * 使得最后仅有一对鸡鸭相邻，最少的交换次数
 * 
 * 输入：
 * CCDCC
 * 
 * 输出：
 * 2
 * 
 * 类似快慢指针的思想  
 * 
 * 测试用例里面全是 C在左D在右的
 * 
 * 
 * 
 */


// 第一个简单版本

function minChangeTime(data){
    let times = 0,count=0;
    for(let i=0;i<data.length;i++){
        if(data[i]==="C"){
            times += i - count;
            count++;
        }
    }
    return times;
}


// 考虑C可能往左移，D也可能往左移的情况
function minChangeTime2(data){
    let timesC = 0,countC=0,timesD = 0,countD=0;
    for(let i=0;i<data.length;i++){
        if(data[i]==="C"){
            timesC += i - countC;
            countC++;
        }else if(data[i]==="D"){
            timesD += i - countD;
            countD++;
        }
    }
    return Math.min(timesC, timesD);
}



let data = readline().split(' ')[0];

print(minChangeTime(data))