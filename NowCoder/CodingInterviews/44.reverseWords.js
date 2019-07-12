/***
 * 牛客最近来了一个新员工Fish， 每天早晨总是会拿着一本英文杂志， 写些句子在本子上。
 *  同事Cat对Fish写的内容颇感兴趣， 有一天他向Fish借来翻看， 但却读不懂它的意思。
 *  例如，“ student.a am I”。 后来才意识到， 这家伙原来把句子单词的顺序翻转了， 
 * 正确的句子应该是“ I am a student.”。
 * 
 * 
 */

function ReverseSentence(str) {
    // write code here
    if (str == null || str == '') {
        return "";
    } else {
        return str.split(" ").reverse().join(" ");
    }
}

console.log('------------------------------------');
console.log(ReverseSentence("student a am I"));
console.log('------------------------------------');

/* 
 * 涉及理论： 字符串处理
 * 普通解法： 使用 reverse 函数
 * 改进方向：
 *
 *
 */