/*******
 * 
 * 输入 N,M，对 1~N 按照特定规则排序，求排序后的第M个数
 * 
 * 
 * 
 */

    // sortArr[0] = '1';
    // for (let i = 2; i <=n; i++) {
    //     sortArr[i-1] = String(i);
    // }
    // sortArr.sort(function(a,b){
    //     return a>b;
    // })

    // console.log(sortArr);
    // return parseInt(sortArr[m-1]);



function dictionarySortList(n, m){
    if (n < m) {
        return null;
    }
    var sortArr = [];

    this.dfs = function(current, n, sortArr){
        if (current > n) {
            return;
        }
        sortArr.push(current);
        for (let i = 0; i <=9; i++) {
            if (10* current + i > n) {
                return;
            }
            this.dfs(10*current + i, n, sortArr);
        }
    }
    for (let j = 1; j <= 9; j++) {
        this.dfs(j, n, sortArr);
    }

    return sortArr[m-1];
}

console.log(dictionarySortList(200, 25));