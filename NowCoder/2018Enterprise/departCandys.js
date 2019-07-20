/*
 * @Author: SkylineBin 
 * @Date: 2019-07-20 22:23:04 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-20 22:25:16
 */


/*****
 * 
 * 招商银行2019笔试真题--分糖果
 * 
 * 假设你是一位很有爱的幼儿园老师，想要给幼儿园的小朋友们一些小糖果。
 * 但是，每个孩子最多只能给一块糖果。对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的糖果的最小尺寸；
 * 并且每块糖果 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个糖果 j 分配给孩子 i ，这个孩子会得到满足。
 * 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * 注意：你可以假设胃口值为正。一个小朋友最多只能拥有一块糖果。
 * 
 * 
 * 输入：  
 * 第一行输入每个孩子的胃口值 
 * 第二行输入每个糖果的尺寸 
 * 孩子数和糖果数不超过1000
 * 
 * 输出：  
 * 能满足孩子数量的最大值
 * 
 */

function maxNumofKids(kids,candys){
    let output = 0;
    kids.sort((a,b)=> a-b);
    candys.sort((a,b)=> a-b);
    let k=0;
    for(let i=0;i<candys.length;i++){
        if(candys[i]>=kids[k]){
            k++;
            output++;
            if(k===kids.length){
                break;
            }
        }
    }
    return output;
}




let data1 = readline().split(' ');
let kids = [];
for(let i=0; i< data1.length;i++){
    kids.push(parseInt(data1[i]));
}

let data2 = readline().split(' ');
let candys = [];
for(let j=0; j< data2.length;j++){
    candys.push(parseInt(data2[j]));
}

print(maxNumofKids(kids,candys))