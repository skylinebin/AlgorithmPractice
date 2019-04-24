/******
 * 
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。
 * 求按从小到大的顺序的第N个丑数。
 * 
 * 
 */

function GetUglyNumber_Solution(index)
{
    if (index < 7) {
        return index;
    }

    let result = [];
    result[0] = 1;
    let with2=0,with3=0,with5=0;
    for (let i = 1; i < index; i++) {
        result[i] = Math.min(result[with2]*2, Math.min(result[with3]*3, result[with5]*5));
        if (result[i] === result[with2]*2) {
            with2++;
        }
        if (result[i] === result[with3]*3) {
            with3++;
        }
        if (result[i] === result[with5]*5) {
            with5++;
        }
    }
    return result[index - 1];
}

let index = 10;

console.log(GetUglyNumber_Solution(index));