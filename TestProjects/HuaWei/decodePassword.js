/******
 * 
 * 2019.04.24
 * 华为 实习生笔试题算法题第3题
 * 
 * 初始密码是一段升序的数字
 * 已有的加密算法会 将数字转换成英文拼接成字符串，并改变字符串的大小写以及顺序
 * 
 * ! 问题描述：现已知加密后的密码还原出原有的密码
 * 
 * 
 */

// 思路：应该就是转换小写后统计每个字母出现的次数，根据是个数字的英文进行匹配，最后调整成升序就好吧


// 分析每个英文字母的特征 进行统计整理

// 0 z
// 2 w
// 4 u
// 6 x
// 8 g
// 7 s - x
// 3 h - g
// 5 v - (s-x)
// 1 o - z - w - u
// 9 i - x - g - v + (s-x)



function DecodePassword(newPass){
    var dealedstr = newPass.toLowerCase();
    var numstrs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var num = [];


    for (let index = 0; index <= 9; index++) {
        num[index] =0;
    }

    for (let i = 0; i < dealedstr.length; i++) {
        switch (dealedstr[i]) {
            case 'z': num[0]++;break;
            case 'o': num[1]++;break;
            case 'w': num[2]++;break;
            case 'h': num[3]++;break;
            case 'u': num[4]++;break;
            case 'v': num[5]++;break;
            case 'x': num[6]++;break;
            case 's': num[7]++;break;
            case 'g': num[8]++;break;
            case 'i': num[9]++;break;
            default:
                break;
        }
    }
    num[7] = num[7] - num[6];
    num[3] = num[3] - num[8];
    num[5] = num[5] - num[7];
    num[1] = num[1] - num[0] - num[2] - num[4];
    num[9] = num[9] - num[6] - num[8] - num[5];

    var outstr = '';
    for (let j = 0; j <=9; j++) {
        while(num[j]){
            outstr+= j;
            num[j]--;
        }
    }
    return outstr;
}

// var encode = 'NeNohuiroNNiNeteefersix'; // 测试集1
var encode = 'oNEthrEEfoursixNiNENiEN'; // 测试集1

console.log(DecodePassword(encode));