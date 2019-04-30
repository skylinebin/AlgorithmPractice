/*****
 * 
 * 求1+2+3+...+n，
 * 要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）
 * 
 * 
 */

// 逻辑与的 短路求值原理 
// 即：&& 符号 前面如果为 false 后面就不计算 所以减到 0 之后就不会继续调用

function Sum_Solution(n) {
    let result = n;
    let state = result && (result += Sum_Solution(n-1));
    return result;
}

console.log(Sum_Solution(4));

// 使用 Math 运算 模拟 n*(n+1)/2

function Sum_Solution2(n) {
    let result = n;
    result = (Math.pow(n,2) + n) >> 1;
    return result;
}

console.log(Sum_Solution2(4));

// 使用 递归 和 位运算模拟 n*(n+1)/2

function Sum_Solution3(n) {
    let result = 0;
    
    // 用位运算模拟两个数的乘法
    this.multify = function(a, b){
        let res = 0;
        let state1 = ((a & 1) === 1) && (res += b) > 0;
        a = a >> 1;
        b = b << 1;
        let state2 = (a !== 0) && (res += this.multify(a, b)) > 0;
        return res;
    }

    result = this.multify(n,n+1);
    result >>= 1;
    return result;
}

console.log(Sum_Solution3(4));