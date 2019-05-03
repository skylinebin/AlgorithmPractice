/*******
 * 
 * LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
 * 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！
 * “红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....
 * LL不高兴了,他想了想,决定大\小王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。
 * 上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。
 * LL决定去买体育彩票啦。 
 * 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 
 * 如果牌能组成顺子就输出true，否则就输出false。为了方便起见,你可以认为大小王是0。
 * 
 * 
 * 
 */

function IsContinuous(numbers)
{
    if (numbers === null || numbers.length !== 5) {
        return false;
    }

    numbers.sort(function(a,b){
        return a-b;
    });
    let countArr = [];
    let zeroVar = 0;
    // 统计每个数值出现的次数
    for (let i = 0; i < numbers.length; i++) {
        if (countArr[numbers[i]]) {
            countArr[numbers[i]]+=1;
            // 如果除0以外的数出现次数大于1
            if (countArr[numbers[i]]>=2 && numbers[i]!==0) {
                return false;
            }
            // 如果 0 出现的次数大于4
            if (numbers[i]===0 && countArr[numbers[i]]>4) {
                return false;
            }
        } else {
            countArr[numbers[i]] = 1;
        }
    }
    if (countArr[0]) {
        zeroVar = countArr[0];
    }

    // 输入0个个数以及排序好的牌
    this.checkIfContinuous = function(sortArr, zeroNum){
        if (zeroNum === 4) {
            return true;
        }
        let leftArr = sortArr.slice(zeroNum); // 获取非零的牌
        let maxGap = 0;
        let countGap = 0;
        for (let i = 1; i <leftArr.length; i++) {
            let tempGap = leftArr[i]-leftArr[i-1];
            if (tempGap > 1) {
                if (tempGap > maxGap) {
                    maxGap = tempGap;
                }
                countGap++;
            }
        }
        if (maxGap-1 > zeroNum || countGap > zeroNum) {
            return false;
        }
        return true;
    }
    // console.log(numbers);
    return this.checkIfContinuous(numbers,zeroVar);
}

let numbers = [0,3,2,6,4];
console.log(IsContinuous(numbers));