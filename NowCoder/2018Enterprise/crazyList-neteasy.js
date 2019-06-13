/*
 * @Author: SkylineBin 
 * @Date: 2019-06-13 22:01:11 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-13 22:22:19
 */


function crazyList(n, listN){
    let maxNum = 0;
    if (n !== listN.length){
        return 0;
    }
    let sortArr = listN.sort((a,b) => {
        return a - b;
    });
    let i =0;
    let j = n - 1;
    let tempArr = [];
    while(j>i){
        tempArr.push(sortArr[i++]);
        tempArr.push(sortArr[j--]);
    }
    tempArr.pop();

    this.dsp = function(){
        
    }

    this.maxList = function(arr){
        let num = 0;
        for(let k=1;k<arr.length;k++){
            num += Math.abs(arr[k]-arr[k-1]);
        }
        return num;
    }

}

let n = 5;
let listN = [5,10,25,40,25];
console.log(crazyList(n, listN));
