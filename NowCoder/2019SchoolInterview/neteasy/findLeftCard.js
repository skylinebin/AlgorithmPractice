function findLeftCard(numN,datas){
    let backList = [];
    function multiply(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) return '';
        var len1 = String(num1).length,
            len2 = String(num2).length;
        var ans = [];
        for (var i = len1 - 1; i >= 0; i--) {
            for (var j = len2 - 1; j >= 0; j--) {
                var index1 = i + j;
                var index2 = i + j + 1;
                var mul = parseInt(String(num1)[i]) * parseInt(String(num2)[j]) + (ans[index2] || 0);
                ans[index1] = Math.floor(mul / 10) + (ans[index1] || 0);
                ans[index2] = mul % 10;
            }
        }
        var result = ans.join('');
        return +result === 0 ? '0' : result.replace(/^0+/,'');
    }
    function getState(matrix){
        let n = matrix[0];
        let m = matrix[1];
        if(n>m){
            [m,n] = [n,m];
        }
        if(n===1&&m==1){
            return 1;
        }else if(n===1&&m>1){
            return m-2;
        }else if(n>1 && n<=m){
            if(n>10000||m>10000){
                return multiply(n-2, m-2);
            }else{
                return (n-2)*(m-2);
            }
            
        }
    }
    
    for(let i=0;i<numN;i++){
        backList.push(getState(datas[i]));
    }
    return backList;
}


// let numN = parseInt(readline());
// let datas = [],tempData;
// for(let i=0;i<numN;i++){
//     tempData = readline().split(' ');
//     datas.push([parseInt(tempData[0]),parseInt(tempData[1])]);
// }

// let leftCard = findLeftCard(numN,datas);
// for(let j=0;j<leftCard.length;j++){
//     print(leftCard[j]);
// }

let numN = 1;
let datas = [[246821988,155498441]];
console.log(findLeftCard(numN,datas));


function multiply(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) return ''; //判断输入是不是数字
    var len1 = String(num1).length,
        len2 = String(num2).length;
    var ans = [];
    for (var i = len1 - 1; i >= 0; i--) {    //这里倒过来遍历很妙,不需要处理进位了
        for (var j = len2 - 1; j >= 0; j--) {
            var index1 = i + j;
            var index2 = i + j + 1;
            var mul = parseInt(String(num1)[i]) * parseInt(String(num2)[j]) + (ans[index2] || 0);
            ans[index1] = Math.floor(mul / 10) + (ans[index1] || 0);
            ans[index2] = mul % 10;
        }
    }
    // console.log(ans);
    var result = ans.join('');
      //这里结果有可能会是多个零的情况，需要转成数字判断
      //原来写的是return +result === 0 ? '0' : result，result字符串会出现有前置0的情况
    return +result === 0 ? '0' : result.replace(/^0+/,'');
}



function multiply(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) return '';
    var len1 = String(num1).length,
        len2 = String(num2).length;
    var ans = [];
    for (var i = len1 - 1; i >= 0; i--) {
        for (var j = len2 - 1; j >= 0; j--) {
            var index1 = i + j;
            var index2 = i + j + 1;
            var mul = parseInt(String(num1)[i]) * parseInt(String(num2)[j]) + (ans[index2] || 0);
            ans[index1] = Math.floor(mul / 10) + (ans[index1] || 0);
            ans[index2] = mul % 10;
        }
    }
    var result = ans.join('');
    return +result === 0 ? '0' : result.replace(/^0+/,'');
}