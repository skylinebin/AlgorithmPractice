/******
 * 
 * 牛客网 OJ 平台自测代码使用
 * 
 * 
 */

// 从命令行读取数据完成数据输入
while (line = readline()) {
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    // 读取参数完成方法调用
    var m = dictionarySortList(a, b);
    print(m);
}


// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());
var ans = 0;
for (var i = 0; i < n; i++) {
    lines = readline().split(" ")
    for (var j = 0; j < lines.length; j++) {
        ans += parseInt(lines[j]);
    }
}
print(ans);



// Node.js 版本的读取命令行数据

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    var tokens = line.split(' ');
    console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});