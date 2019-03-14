/***
 * 
 * 我们可以用2 * 1 的小矩形横着或者竖着去覆盖更大的矩形。 
 * 请问用 n个2 * 1 的小矩形无重叠地覆盖一个2 * n的大矩形， 
 * 总共有多少种方法？
 * 
 * 
*/

// ! 本质：斐波拉契数列  

function rectCover(number) {
    if (number <= 0) {
        return 0;
    } else if(number === 1 || number === 2) {
        return number;
    } else {
        return rectCover(number - 1) + rectCover(number - 2);
    }
}

// Test demo  
console.log(rectCover(0)); // 0 