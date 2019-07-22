/*
 * @Author: SkylineBin 
 * @Date: 2019-07-07 14:22:10 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-07 21:50:07
 */


/****
 * 
 * 字节跳动第三题
 * 
 * 圆桌，按身高入座，任意两人身高查不超过 M ,求问有多少解决方案
 * 
 * 
 * 参考问题：
 * Matrix67 发现身高接近的人似乎更合得来。
 * Matrix67 举办的派对共有 N(1<=N<=10) 个人参加，
 * Matrix67 需要把他们安排在圆桌上。
 * Matrix67 的安排原则是，圆桌上任意两个相邻人的身高之差不能超过 K。
 * 请告诉 Matrix67 他共有多少种安排方法。
 * 
 * 
 * 
 */


// 只记录第几个参数的方法

function heightMaxMiddle(maxValue, nums){
    let count = 0;
    let len = nums.length;
    let vis=[];
    let f = [];
    f[0]=0;
    if(len === 1){
        return 1;
    }   
    // let sortNums = nums.sort(function(a,b){
    //     return a-b;
    // })
    // // 排序后判断是否存在相差大于 maxValue 的情况
    // for (let i = 0; i < sortNums.length-1; i++) {
    //     vis[i]=false;
    //     f[i]=0;
    //     if(sortNums[i+1]-sortNums[i] > maxValue){
    //         return count;
    //     }
    // }


    this.dfs = function(num){
        if(num === len-1){
            for (let j = 1; j < len; j++) {
                if(!vis[j] && Math.abs(nums[f[0]]-nums[j])<=maxValue && Math.abs(nums[j]-nums[f[num-1]])<=maxValue){
                    count++;
                    f[num]=j;
                    console.log(f);
                }
            }
            return;
        }else{
            for (let i = 1; i < len; i++) {
                if(!vis[i] && Math.abs(nums[f[num-1]]-nums[i]) <= maxValue){
                    f[num] = i;
                    vis[i]=true;
                    this.dfs(num+1);
                    vis[i]=false;
                }
            }
        }
    }
    vis[0] = true;
    this.dfs(1);
    return count;
}

// let maxValue = 8;
// let nums = [5,16,8,10];
// console.log(heightMaxMiddle(maxValue, nums));



// 记录上一次的选取的位置
function heightMaxMiddle2(maxValue, nums){
    let count = 0;
    let len = nums.length;
    let vis=[];
    // let f = [];
    // f[0]=0;
    if(len === 1){
        return 1;
    }   
    // let sortNums = nums.sort(function(a,b){
    //     return a-b;
    // })
    // // 排序后判断是否存在相差大于 maxValue 的情况
    // for (let i = 0; i < sortNums.length-1; i++) {
    //     vis[i]=false;
    //     // f[i+1]=0;
    //     if(sortNums[i+1]-sortNums[i] > maxValue){
    //         return count;
    //     }
    // }

    this.dfs = function(total,num,nums){
        if(total === len){
            if(Math.abs(nums[num]-nums[0])<=maxValue){
                count++;
            }
            return;
        }else{
            for (let i = 0; i < len; i++) {
                if(!vis[i] && Math.abs(nums[num]-nums[i])<=maxValue){
                    vis[i]=true;
                    this.dfs(total+1,i,nums);
                    vis[i]=false;
                }
            }
        }
    }
    vis[0]=true;
    this.dfs(1,0,nums);
    return count;
}

// let maxValue = 8;
// let nums = [5,16,8,10];
// console.log(heightMaxMiddle2(maxValue, nums));



// 对矩阵直接转换操作
function heightMaxMiddle3(maxValue, nums){
    let m = maxValue;
    let res = [];
    let count = 0;
    this.sort = function(nums,start,res){
        if(start == nums.length-1 && Math.abs(nums[start]-nums[start-1])<=m && Math.abs(nums[start]-nums[0])<=m){
            count++;
            res.push(nums.slice(0));
        }else{
            for(let i = start; i < nums.length; i++){
                this.swap(nums, start, i);
                if(Math.abs(nums[start]-nums[start-1])<=m){
                    this.sort(nums, start+1, res);
                }
                this.swap(nums, start, i);
            }
        }
    }
    this.swap = function(arr,a,b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b]= temp;
    }

    this.sort(nums,1,res);
    console.log(res);
    return count;
}

let maxValue = 8;
let nums = [5,16,8,10];
console.log(heightMaxMiddle3(maxValue, nums));