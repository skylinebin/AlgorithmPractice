/*
 * @Author: SkylineBin 
 * @Date: 2019-07-24 21:52:44 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-24 22:24:35
 */


/****
 * 
 * 游戏海报
 * 
 * 小明有26种游戏海报，用小写字母"a"到"z"表示。
 * 小明会把游戏海报装订成册（可能有重复的海报），册子可以用一个字符串来表示，每个字符就表示对应的海报，例如abcdea。
 * 小明现在想做一些“特别版”，然后卖掉。特别版就是会从所有海报（26种）中随机选一张，加入到册子的任意一个位置。
 * 那现在小明手里已经有一种海报册子，再插入一张新的海报后，他一共可以组成多少不同的海报册子呢？
 * 
 * 
 * 输入：  
 * 海报册子的字符串表示，1 <= 字符串长度<= 20
 * 
 * 输出：  
 * 一个整数，表示可以组成的不同的海报册子种类数
 * 
 * 输入示例： a
 * 
 * 输出实例：51
 * 
 * 
 */

function findKindsofStr(initStr){
    // 算法复杂度 O(26*N)
    let back = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let len = initStr.length;
    let store = []
    for(let i=0;i<26;i++){
        for(let j=0;j<=len;j++){
            store.push(initStr.slice(0,j)+back[i]+initStr.slice(j,len));
        }
    }
    let onlyStore = [...new Set(store)];
    return onlyStore.length;
}


let initDatas = readline().split(' ');
let initStr = initDatas[0];
print(findKindsofStr(initStr))


// 简单解法：排列问题  

// (len(str) + 1) * 26 - len(str)
// 有 len(str)+1 个位置可以插入新的字符，但是可能因为重复字母导致插入前后是相同的字符串

function findKindsofStr2(initStr){
    let len = initStr.length;
    return (len+1)*26 - len;
}