function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    var temparr = {};
    for (let i = 0; i < numbers.length; i++) {
        if (temparr[numbers[i]]) {
            temparr[numbers[i]]++;
            // console.log(temparr);
            // if (temparr[numbers[i]] === 2) {
            //     duplication[0] = numbers[i];
            //     return true;
            // }
        } else {
            temparr[numbers[i]] = 1;
        }
    }
    console.log(temparr);
    return false;
}

let numbers='abdshkjfbasdghdg'.split('');
let s=[];
console.log(duplicate(numbers, s));