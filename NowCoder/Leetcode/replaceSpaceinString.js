/****
 * 
 * 请实现一个函数， 将一个字符串中的每个空格替换成“ % 20”。 
 * 例如， 当字符串为We Are Happy.则经过替换之后的字符串为We % 20 Are % 20 Happy。
 *  
 */

 // first version

 function replaceSpace(str) {
     // write code here
     var regstr = new RegExp(' ', "g");
     var backstr = str.replace(regstr, '%20');
     return backstr;
 }
