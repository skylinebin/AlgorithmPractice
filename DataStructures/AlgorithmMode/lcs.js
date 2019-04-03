/*****
 * 
 * 使用动态规划实现 最长公共子序列(LCS)
 * 
 * 
 */

/**
 * 两字符串的最长公共子序列，子序列不要求连续
 *
 * @param {*} wordX
 * @param {*} wordY
 */
function lcs(wordX, wordY) {
    var m = wordX.length;
    var n = wordY.length;
    var l = [];
    var i, j, a, b;
    var solution = [];

    for (i = 0; i <= m; ++i) {
        l[i] = [];
        solution[i]=[];
        for (j = 0; j <= n; ++j) {
            l[i][j] = 0;    
            solution[i][j] = '0';
        }
    }

    for (i = 0; i <= m; i++) {
        for (j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                l[i][j] = 0;
            } else if (wordX[i-1] == wordY[j-1]) {
                l[i][j] = l[i-1][j-1] + 1;
                solution[i][j] = 'diaginal';
            } else {
                a = l[i-1][j];
                b = l[i][j-1];
                l[i][j] = (a>b) ? a:b;
                solution[i][j] = (l[i][j] == l[i-1][j]) ? 'top':'left';
            }
        }
    }
    printSolution(solution, l, wordX, wordY, m, n);
    return l[m][n];
}

function printSolution(solution, l, wordX, wordY, m, n) {
    var a=m, b=n, i, j;
    var x = solution[a][b];
    var answer = '';

    while (x !== '0') {
        if (solution[a][b] === 'diaginal') {
            answer = wordX[a-1] + answer;
            a--;
            b--;
        } else if (solution[a][b] === 'left') {
            b--;
        } else if (solution[a][b] === 'top') {
            a--;
        }
        x = solution[a][b];
    }
    console.log('lcs: '+ answer);
}

var wordone = 'acbaede';
var wordtwo = 'abcadf';
console.log(lcs(wordone, wordtwo));