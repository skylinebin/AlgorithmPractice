/*
 * @Author: SkylineBin 
 * @Date: 2019-07-26 21:32:46 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-28 14:50:04
 */


/****
 * 
 * 种树方案
 * 
 * 小多想在美化一下自己的庄园。他的庄园毗邻一条小河，他希望在河边种一排树，共 M 棵。
 * 小多采购了 N 个品种的树，每个品种的数量是 Ai (树的总数量恰好为 M)。
 * 但是他希望任意两棵相邻的树不是同一品种的。小多请你帮忙设计一种满足要求的种树方案。
 * 
 * 输入描述：  
 * 第一行包含一个正整数 N，表示树的品种数量。
 * 第二行包含 N 个正整数，第 i (1 <= i <= N) 个数表示第 i 个品种的树的数量。
 * 数据范围：
 * 1 <= N <= 1000
 * 1 <= M <= 2000
 * 
 * 输出描述：
 * 输出一行，包含 M 个正整数，分别表示第 i 棵树的品种编号 (品种编号从1到 N)。
 * 若存在多种可行方案，则输出字典序最小的方案。若不存在满足条件的方案，则输出"-"。
 * 
 * 
 * 
 * 
 * 
 */


// 时间复杂度太高
function treeSolution(numN,trees){
    let solutions = [];
    if(numN === 1){
        if(trees[0]>1){
            return '-';
        }else {
            return '1';
        }
    }
    let store = trees.slice(0);
    let i=0,j=1;
    let state = true;
    while(j<numN){
        if(store[i]>0 && state){
            state = false;
            solutions.push(i+1);
            store[i] = store[i]-1;
        }else if(!state && store[j]>0){
            state = true;
            solutions.push(j+1);
            store[j] = store[j]-1;
        }
        if(store[i]===0 && store[j]!==0){
            i = j;
            j = j+1;
        }else if(store[j]===0){
            j=j+1;
        }
    }
    if(store[i]>0 && state){
        solutions.push(i+1);
        store[i] = store[i]-1;
    }
    if(store[i]!==0){
        return '-';
    }
    return solutions.join(' ');
}

let numN = 3;
let trees = [4,2,1];
console.log(treeSolution(numN,trees));


// 判断及剪枝的方法  

function treeSolution2(numN,trees){
    let M=0;
    for (let i = 0; i < numN; i++) {
        M+= trees[i];
    }
    let odd = M%2===0? false:true;
    let checkL=false;
    if (odd) {
        checkL = trees.some((a)=> a > (M+1)/2); //some 方法 如果有返回 true
    }else {
        checkL = trees.some((a)=> a > M/2);
    }
    if(checkL){
        return '-';
    }
    
    let ans = [];
    function checkFite(left){
        for (let i = 0; i < numN; i++) {
            if (trees[i]> (left + 1)/2) {
                return false;
            }
        }
        return true;
    }

    function dfs(index){
        if(!checkFite(M-index)){
            return false;
        }
        if (index===M) {
            return true;
        } else {
            for (let i = 0; i <numN; i++) {
                if(index===0 || (trees[i]!==0 && (i+1) !== ans[ans.length-1])){
                    trees[i]--;
                    ans.push(i+1);
                    if(dfs(index+1)){
                        return true;
                    }
                    ans.pop();
                    trees[i]++;
                }
            }
        }
        return false;
    }

    let states = dfs(0);
    if(states){
        return ans.join(' ');
    }else{
        return '-';
    }
}

// 上述代码已通过

console.log(treeSolution2(numN,trees));

let numN = parseInt(readline());
let trees = [];
let datas = readline().split(' ');
for(let i=0;i<numN;i++){
    trees.push(parseInt(datas[i]));
}
print(treeSolution2(numN,trees));