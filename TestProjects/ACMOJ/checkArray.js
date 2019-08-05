/*
 * @Author: SkylineBin 
 * @Date: 2019-08-02 16:51:39 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-08-02 17:36:40
 */


function checkArray(arr){
    let state = false;
    let tempState = arr.slice(0);
    tempState.sort((a,b)=>a-b);
    let i=1,j=arr.length-1;
    function checkSort(array){
        let stat = true;
        for (let j = 1; j < array.length; j++) {
            if(array[j]<array[j-1]){
                stat = false;
                break;
            }
        }
        return stat;
    }
    while(i<=j){
        if(arr[i]<arr[j] && arr[i]>=arr[i-1] && arr[j-1]<arr[j]){
            i++;
            j--;
        }else if(arr[i]<arr[i-1] && arr[j-1]<arr[j]){
            j--;
        }else if(arr[i]>=arr[i-1] && arr[j-1]>arr[j]){
            i++;
        }else {
            let tempArr = arr.slice(i-1,j+1);
            countArr = [...arr.slice(0,i-1),...tempArr.reverse(),...arr.slice(j+1,arr.length)];
            if(checkSort(countArr)){
                state = true;
            }
            break;
        }
    }

    if(state){
        return 'yes';
    }else {
        return 'no';
    }
}

// let arr = [2,1,3,4];
let arr = [1,2,3,8,4,6,5,9];
console.log(checkArray(arr));


// var n = readInt();
// var arr = [];
// while (arr.length < n) {
//     arr.push(readInt());
// }


// let numN = readInt()
// let datas = read_line().split(' ');
// let arr = [];
// for(let i=0;i<datas.length;i++){
// 	arr.push(parseInt(datas[i]));
// }
// print(checkArray(arr));