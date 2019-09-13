function findLastTurn(num){
    var m =5;
    var n=num;
    var output;
    if (n===0 || m===0) {
        return -1;
    }
    let lucky = [];
    let currentList = [];
    let tempLen = 0;
    for (let i = 0; i < n; i++) {
        currentList.push(i);
    }
    adjustArr = function (arr, tempNo) {
        let tempTable = [];
        for (let k = 0; k < arr.length; k++) {
            if (k > tempNo) {
                tempTable.push(arr[k]);
            }
        }
        for (let j = 0; j < tempNo; j++) {
            tempTable.push(arr[j]);
        }
        return tempTable;
    }
    for (let i = 0; i < n; i++) {
        tempLen = currentList.length;
        let tempWho = 0;
        if (m >= tempLen) {
            tempWho = (m-1) % tempLen;
        } else {
            tempWho = m-1;
        }
        lucky.push(currentList[tempWho]);
        currentList = adjustArr(currentList, tempWho);
    }

    output = lucky.indexOf(num-1)+1;


    return output;
}


// var num;
// while(num = readInt()){
//     print(findLastTurn(num));
// }




// var num = readInt();
// print(findLastTurn(num));

// var num = 8;
// console.log(findLastTurn(num));







function findLastTurn2(num){
    var m = 5;
    var n=num;
    if (n===0) {
        return 0;
    }
    let lucky = [];
    let currentList = [];
    let tempLen = 0;
    for (let i = 0; i < n; i++) {
        currentList.push(i);
    }
    for (let i = 0; i < n; i++) {
        tempLen = currentList.length;
        let tempWho = 0;
        if (m >= tempLen) {
            tempWho = (m-1) % tempLen;
        } else {
            tempWho = m-1;
        }
        lucky.push(currentList[tempWho]);
        if(currentList[tempWho]===num-1){
            break;
        }
        currentList = [].concat(currentList.slice(tempWho+1,currentList.length),currentList.slice(0,tempWho));
    }
    return lucky.length;
}


// var num;
// while(num = readInt()){
//     print(findLastTurn(num));
// }


var num = 1000;
console.log(findLastTurn2(num));

// let count=0;
// for (let j = 0; j < num; j++) {
//     if(num%5==0)
    
// }