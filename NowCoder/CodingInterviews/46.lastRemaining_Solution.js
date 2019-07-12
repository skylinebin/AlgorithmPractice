/******
 * 
 * 圆圈中最后一个数
 * 
 * 每年六一儿童节, 牛客都会准备一些小礼物去看望孤儿院的小朋友, 今年亦是如此。 HF作为牛客的资深元老, 自然也准备了一些小游戏。 
 * 其中, 有个游戏是这样的: 
 * 首先, 让小朋友们围成一个大圈。 然后, 他随机指定一个数m, 让编号为0的小朋友开始报数。 
 * 每次喊到m - 1 的那个小朋友要出列唱首歌, 然后可以在礼品箱中任意的挑选礼物, 并且不再回到圈中, 
 * 从他的下一个小朋友开始, 继续0...m - 1 报数....这样下去....直到剩下最后一个小朋友, 
 * 最后一个小朋友可以不用表演, 并且拿到牛客名贵的“ 名侦探柯南” 典藏版(名额有限哦!! ^ _ ^ )。
 * 
 *  请你试着想下, 哪个小朋友会得到这份礼品呢？(注： 小朋友的编号是从0到n - 1)
 * 
 * 
 * 
 */

// 思路转换成找拿到礼物先后顺序的序列 (0 ~ n-1)

function LastRemaining_Solution(n, m) {
    if (n===0 || m===0) {
        return -1;
    }
    let giftList = [];
    let children = [];
    let tempLen = 0;
    for (let i = 0; i < n; i++) {
        children.push(i);
    }
    this.adjustArr = function (arr, tempNo) {
        let tempTable = [];
        for (let k = 0; k < arr.length; k++) {
            if (k > tempNo) {
                tempTable.push(arr[k]);
            }
        }
        for (let j = 0; j < tempNo; j++) {
            tempTable.push(arr[j]);
        }
        return tempTable;
    }
    for (let i = 0; i < n; i++) {
        tempLen = children.length;
        let tempWho = 0;
        if (m >= tempLen) {
            tempWho = (m-1) % tempLen;
        } else {
            tempWho = m-1;
        }
        giftList.push(children[tempWho]);
        children = this.adjustArr(children, tempWho);
        // console.log(children);
    }


    return giftList[giftList.length - 1];
    // return giftList;
}

let n = 5;
let m = 2;
console.log(LastRemaining_Solution(n, m));

// 约瑟夫环问题 解决方案

