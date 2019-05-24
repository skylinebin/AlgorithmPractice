/**********
 * 
 * 
 * 输入一个字符串, 按字典序打印出该字符串中字符的所有排列。 
 * 例如输入字符串abc, 则打印出由字符a, b, c所能排列出来的所有字符串abc, acb, bac, bca, cab和cba。
 * 
 * 输入一个字符串, 长度不超过9(可能有字符重复), 字符只包括大小写字母。
 * 
 */

// 记得数组去重，使用深度优先遍历的思想

function Permutation(str) {
    // write code here
    var output = [];
    if (str.length === 0) {
        return output;
    }
    var table = str.split('');
    var len = table.length;
    this.dfs = function (tempStr, tempTable, output) {
        if (tempStr.length === len) {
            if (!output.includes(tempStr)) {
                output.push(tempStr);
            }
            return;
        }
        for (let i = 0; i < tempTable.length; i++) {
            var otherTable = [];
            for (let k = 0; k < tempTable.length; k++) {
                if (k !== i) {
                    otherTable.push(tempTable[k]);
                }
            }
            this.dfs(tempStr+String(tempTable[i]), otherTable, output);
        }
    }

    for (let j = 0; j < table.length; j++) {
        var tempTable = [];
        for (let k = 0; k < table.length; k++) {
            if (k !== j) {
                tempTable.push(table[k]);
            }
        }
        this.dfs(String(table[j]), tempTable, output);
    }

    return output;
}

var str = 'aa';

console.log(Permutation(str));