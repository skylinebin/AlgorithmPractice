/*
 * @Author: SkylineBin 
 * @Date: 2019-07-27 18:32:10 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-28 11:06:37
 */


/****
 * 
 * 
 * shopee的办公室非常大，小虾同学的位置坐落在右上角，而大门却在左下角，
 * 可以把所有位置抽象为一个网格（门口的坐标为0，0），小虾同学很聪明，每次只向上，或者向右走，
 * 因为这样最容易接近目的地，但是小虾同学不想让自己的boss们看到自己经常在他们面前出没，或者迟到被发现。
 * 他决定研究一下如果他不通过boss们的位置，他可以有多少种走法？
 * 
 * 输入描述：
 * 
 * 第一行 x,y,n (0<x<=30, 0<y<=30, 0<=n<= 20) 表示x,y小虾的座位坐标,n 表示boss的数量（ n <= 20）
 * 接下来有n行, 表示boss们的坐标(0<xi<= x, 0<yi<=y，不会和小虾位置重合)
 * x1, y1
 * x2, y2
 * ……
 * xn, yn
 * 
 * 
 * 输出描述：
 * 输出小虾有多少种走法
 * 
 * 输入：
 * 3 3 2
 * 1 1
 * 2 2
 * 
 * 输出：
 * 4
 * 
 * 
 * 测试用例里面的数可能超过 16 位
 * JavaScript 应该注意
 * 
 */

// ! wrong solution
function waysofSolution(numX,numY,bPs){
    let solutions = 0;
    let numN = bPs.length;
    for(let i=0;i<bPs.length;i++){
        if(bPs[i][0]===0 && bPs[i][1]===0){
            return solutions;
        }
    }
    function checkifNone(x,y){
        let state = true;
        for(let i=0;i<bPs.length;i++){
            if(bPs[i][0]===x && bPs[i][1]===y){
                state = false;
                break;
            }
        }
        return state;
    }
    function dfs(tx,ty){
        if(tx===numX && ty===numY){
            solutions++;
            return;
        }
        if(tx>numX || ty>numY){
            return;
        }
        if(checkifNone(tx,ty)){
            dfs(tx+1,ty);
            dfs(tx,ty+1);
        }else{
            return;
        }
    }
    dfs(0,0);
    return solutions;
}

// 以上时间复杂度过高  


/****
 * 
 * 
 * 动态规划的思想
 * 注意细节
 * 
 */

function waysofSolution2(numX,numY,bPs){
    let state = true;
    let dp = [];
    for (let i = 0; i <= numX; i++) {
        dp[i] = [];
        for (let j = 0; j <=numY; j++) {
            dp[i][j]=0;
            
        }
        dp[i][0]=1;
    }

    for (let j = 0; j <=numY; j++) {
        dp[0][j]=1;
    }
    for(let i=0;i<bPs.length;i++){
        if(parseInt(bPs[i][0])===0 && parseInt(bPs[i][1])===0){
            state = false;
        }
        dp[bPs[i][0]][bPs[i][1]]=-1;
        if(bPs[i][0]===0){ // 考虑Boss 坐在两侧的情况，因为不能向左或向下对后面的置零
            for (let k = bPs[i][1]+1; k <=numY; k++){
                dp[0][k]=0;
            }
        }
        if(bPs[i][1]===0){
            for (let k = bPs[i][0]+1; k <=numX; k++){
                dp[k][0]=0;
            }
        }
    }
    // dp[0][0]=1;
    if(!state){
        return 0;
    }

    // 大于16位的数相加
    // 35532486379567141 如果直接相加就会变成 35532486379567140
    function bigNumAdd(a,b){
        let sum = '';
        let tempState = false,tempData=0; // 判断是否需要进位  
        a = String(a).split('');
        b = String(b).split('');
        while(a.length || b.length || tempState){
            // parseInt 对 '' 会转换成 NaN,但是 ~~ 会转换成 0
            if(a.length && b.length){
                tempData += ~~a.pop() + ~~b.pop();
            }else if(!a.length && b.length){
                tempData += 0 + ~~b.pop();
            }else if(!b.length && a.length){
                tempData += ~~a.pop() + 0;
            }
            
            sum = (tempData % 10) + sum;
            tempData = tempData > 9?1:0;
            tempState = tempData > 0;
        }
        // console.log(sum);
        return sum;
    }

    for (let i = 1; i <=numX; i++) {
        for (let j = 1; j <=numY; j++) {
            if(dp[i][j]===-1){
                continue;
            }
            if(dp[i-1][j]!==-1){
                dp[i][j] = bigNumAdd(dp[i][j],dp[i-1][j]);
            }
            if(dp[i][j-1]!==-1){
                dp[i][j] = bigNumAdd(dp[i][j],dp[i][j-1]);
            }
        }
    }
    // console.log(dp);
    return dp[numX][numY];
}

// 最开始以上测试用例可以通过 50%  ，经过测试和处理
// JavaScript 整数位 只能存 16位  
// 需要使用额外的整数相加





let numX = 2;
let numY = 2;
let bPs = [
    [0,1]
]
console.log(waysofSolution2(numX,numY,bPs));



function bigNumAdd(a,b){
    let sum = '';
    let tempState = false,tempData=0; // 判断是否需要进位  
    a = String(a).split('');
    b = String(b).split('');
    while(a.length || b.length || tempState){
        // parseInt 对 '' 会转换成 NaN,但是 ~~ 会转换成 0
        if(a.length && b.length){
            tempData += ~~a.pop() + ~~b.pop();
        }else if(!a.length && b.length){
            tempData += 0 + ~~b.pop();
        }else if(!b.length && a.length){
            tempData += ~~a.pop() + 0;
        }
        
        sum = (tempData % 10) + sum;
        tempData = tempData > 9?1:0;
        tempState = tempData > 0;
    }
    // console.log(sum);
    return sum;
}

// let a = 35532486379567141; // 35532486379567140
// let b = 18;
// let a = 3553248637956714; // 35532486379567140
// let b = 8553248637956713;

// console.log(bigNumAdd(a,b));
// let initDatas = readline().split(' ');
// let numX = parseInt(initDatas[0]);
// let numY = parseInt(initDatas[1]);
// let numN = parseInt(initDatas[2]);

// let bPs = [];
// let state = numN;
// while(state>0){
//     let tempData = readline().split(' ');
//     bPs.push([parseInt(tempData[0]), parseInt(tempData[1])]);
//     state--;
// }

// print(waysofSolution(numX,numY,bPs))