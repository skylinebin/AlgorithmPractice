/******
 * 
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 * 
 * 
 * 
 */

function PrintMinNumber(numbers) {
    // write code here
    if (numbers === null) {
        return null;
    }
    var count = '';
    numbers.sort(function(num1, num2){
        return String(num1) + String(num2) > String(num2) + String(num1);
    })
    numbers.forEach(element => {
        count += element;
    });

    return count;
}

var arr = [3, 32, 321];
console.log(PrintMinNumber(arr));