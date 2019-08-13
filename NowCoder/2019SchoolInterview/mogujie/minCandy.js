/*
 * @Author: SkylineBin 
 * @Date: 2019-08-13 10:57:56 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-13 11:28:07
 */

/********
 * 
 * 有N个孩子站成一排，每个孩子有一个分值。给这些孩子派发糖果，需要满足如下需求：
 * 1、每个孩子至少分到一个糖果
 * 2、分值更高的孩子比他相邻位的孩子获得更多的糖果
 * 求至少需要分发多少糖果？
 * 
 * 
 * 输入描述：
 * 0,1,0
 * 输出描述：
 * 4
 * 
 * 输入：
 * 5,4,1,1
 * 
 * 输出：
 * 7
 * 
 * 
 */


function minCandy(datas){
    let len = datas.length;
    let candys = new Array(len);
    if(len===2){
        if(datas[0]!==datas[1]){
            return 3;
        }else{
            return 2;
        }
    }
    if(len===1){
        return 1;
    }
    candys[len-1]=1;
    // 用于修正已经分配的糖果
    function reflow(index,arr){
        arr[index]=1;
        let len=arr.length;
        let store=[];
        index++;
        store.push(index);
        while(index<len-1){
            if(arr[index]<=arr[index+1]&&(arr[index+1]-arr[index]<=1)){
                store.push(index+1);
            }else{
                // store.push(index);
                break;
            }
            index++;
        }
        // console.log(store);
        for(let i=0;i<store.length;i++){
            arr[store[i]]=arr[store[i]]+1;
        }
        return arr;
    }

    for(let i=len-2;i>=0;i--){
        if(datas[i]>datas[i+1]){
            candys[i]=candys[i+1]+1;
        }else if(datas[i]===datas[i+1]){
            candys[i]=candys[i+1];
        }else{
            if(candys[i+1]>1){
                // 注意为了最小化，这里一定要给1，贪心的思想
                // candys[i]=candys[i+1]-1;
                candys[i]=1;
            }else{
                candys=reflow(i,candys);
            }
        }
    }
    // console.log(datas);
    // console.log(candys);
    let sum=candys.reduce((a,b)=>a+b);
    return sum;
}

// let datas=[2,3,4,1,5,6,2,1]; // 15
let datas=[2,3,4,9,6,8,4,3,2]; // 21
// let datas=[2,3,4,1,5,6,2,1]; // 15
// let datas=[5,4,1,1]; // 7
// let datas=[2,8,3,6]; // 6

console.log(minCandy(datas));