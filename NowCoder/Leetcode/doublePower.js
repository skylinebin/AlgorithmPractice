/****
 * 
 * 给定一个double类型的浮点数base和int类型的整数exponent。 求base的exponent次方。
 * 
 * 
 */

// first version


function Power(base, exponent) {
    // write code here
    var beforebase = 1;
    if (base == 1.0) {
        return 1.0;
    } else if (base == 0) {
        return 'error';
    } else {

        if (exponent == 0) {
            return 1;
        } else if (exponrnt > 0) {
            for (var i = 0; i < exponent; i++) {
                beforebase = beforebase * base;
            }
            return beforebase;
        } else if (exponrnt < 0) {
            for (var i = 0; i < -exponent; i++) {
                beforebase = beforebase * base;
            }
            return 1 / beforebase;
        }
    }

}

//  failed

 /* 
  * 涉及理论： 递归、边界
  * 普通解法： 判断+遍历
  * 改进方向：
  *
  *
  */