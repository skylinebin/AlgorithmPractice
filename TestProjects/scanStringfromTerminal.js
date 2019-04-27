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