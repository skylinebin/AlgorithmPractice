/*******
 * 
 * 
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符。
 * 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
 * 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
 * 
 * 
 * 如果当前字符流没有存在出现一次的字符， 返回 # 字符。
 * 
 */

// 思想时 HashMap 的 思想

//Init module if you need
function Init() {
    // write code here

}
let arrayCounter = [];
let countStr = '';
//Insert one char from stringstream
function Insert(ch) {
    // write code here
    countStr += ch;
    if (arrayCounter.indexOf(ch) !== -1) {
        let tempTable = [];
        for (let k = 0; k < arrayCounter.length; k++) {
            if (arrayCounter[k] !== ch) {
                tempTable.push(arrayCounter[k]);
            }
        }
        arrayCounter = tempTable;
    } else {
        arrayCounter.push(ch);
    }
    console.log(arrayCounter);

    // if (arrayCounter[ch]) {
    //     arrayCounter[ch]++;
    // } else {
    //     arrayCounter[ch]  = 1;
    // }

}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    // let strLen = countStr.length;
        if (arrayCounter.length > 0) {
            return arrayCounter[0];
        }

    return '#';


}

// Insert('h');
// console.log(FirstAppearingOnce());
// Insert('e');
// console.log(FirstAppearingOnce());
// Insert('l');
// console.log(FirstAppearingOnce());
// Insert('l');
// console.log(FirstAppearingOnce());
// Insert('o');
// console.log(FirstAppearingOnce());
// Insert('w');
// console.log(FirstAppearingOnce());
// Insert('o');
// console.log(FirstAppearingOnce());
// Insert('r');
// console.log(FirstAppearingOnce());
// Insert('l');
// console.log(FirstAppearingOnce());
// Insert('d');
// console.log(FirstAppearingOnce());