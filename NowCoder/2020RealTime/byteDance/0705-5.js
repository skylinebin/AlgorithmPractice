/*
 * @Author: SkylineBin 
 * @Date: 2019-07-06 15:47:41 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-06 16:35:47
 */


/****
 * 
 * 网络节点之间的最大时延问题
 * 
 * 
 * 
 */


function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function findMaxTime(numN,arrA, nodeB){
    let tempArr = [];
    for (let i = 0; i < numN; i++) {
        tempArr[i]=[];
        for (let j = 0; j < numN; j++) {
            tempArr[i].push(0);
        }
    }
    let tempRoad;
    // 构建 n*n 的矩阵
    for (let i = 0; i < arrA.length; i++) {
        tempRoad = arrA[i];
        tempArr[parseInt(tempRoad[0]-1)][parseInt(tempRoad[1]-1)] = parseInt(tempRoad[2]);
        tempArr[parseInt(tempRoad[1]-1)][parseInt(tempRoad[0]-1)] = parseInt(tempRoad[2]);
    }
    // 将m,n位置填满
    function checkMandN(m,n,tempArr){
        for (let i = 0; i < tempArr.length; i++) {
            if(tempArr[i][m]!==0 && tempArr[i][n]!==0){
                if(!tempArr[m][n]){
                    tempArr[m][n] = tempArr[i][m] + tempArr[i][n];
                }else {
                    tempArr[m][n] = Math.min(tempArr[i][m] + tempArr[i][n],tempArr[m][n]);
                }
                tempArr[n][m] = tempArr[m][n];
            }
        }
    }
    for (let m = 0; m < tempArr.length; m++) {
        for (let n = 0; n < tempArr[0].length; n++) {
            // 针对那些空位置，填满
            if(m !==n && tempArr[m][n] ===  0 && tempArr[n][m]===0){
                checkMandN(m,n,tempArr);
            }
        }
    }
    // console.log(tempArr);
    let outside = [];
    let node;
    for (let j = 0; j < nodeB.length; j++) {
        node = tempArr[parseInt(nodeB[j]-1)];
        // 要求最大时延的，直接查表
        node = node.sort(function(a,b){return a-b});
        outside.push(node[node.length-1]);
    }
    return outside;
}

let numN = 4;
let arrA = [[1,2,10],[1,3,5],[4,1,3]];
let nodeB = [2,4];
console.log(findMaxTime(numN,arrA, nodeB));

// 部分案例可通过
// 且效率应该不高