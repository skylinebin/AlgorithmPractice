/******
 * 
 * 
 * 输入一个整数数组， 判断该数组是不是某二叉搜索树的后序遍历的结果。 
 * 如果是则输出Yes, 否则输出No。 假设输入的数组的任意两个数字都互不相同。
 * 
 * 
 */

function VerifySquenceOfBST(sequence) {
    if (sequence.length === 0) {
        return false;
    }
    if (sequence.length === 1) {
        return true;
    }
    var len = sequence.length;
    var rootNode = sequence[len-1];
    var i;
    for (i = 0; i < len-1; i++) {
        if (sequence[i] > rootNode) {
            break;
        }
    }
    // i 为右子树的划分点
    for (var j = i; j < len-1; j++) {
        if (sequence[j] < rootNode) {
            return false;
        }
    }

    var checkLeft = (i > 0) ? VerifySquenceOfBST(sequence.slice(0,i)):true;
    var checkRight = (i < len-1)? VerifySquenceOfBST(sequence.slice(i, len-1)):true;
    return (checkLeft && checkRight);
}

var seq = [1,5,7,6,3,9,8]; // 二叉搜索树的后续遍历序列
console.log(VerifySquenceOfBST(seq));