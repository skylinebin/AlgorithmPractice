/******
 * 
 * 字节跳动 春招技术类实习生笔试第一题
 * 奶牛生小牛问题
 * 3-7 岁每年生一头母牛
 * 第11年死亡
 * 一只母牛第 n 年有多少牛
 * 
 * 
 */

function CowNum(n){
    if (n<=0) {
        return 0;
    }

    // 面向对象解题
    var Cow = function (age,state,birth){
        this.age = age;
        this.state = state;
        this.birth = birth;
    }
    var allCow = [];
    allCow.push(new Cow(1,true,false));
    // 用于每年更新所有奶牛的状态
    this.caculate = function (allCow){
        for (var every in allCow) {
            allCow[every].age++;
            if (allCow[every].age > 10) {
                allCow[every].state = false;
            }
            // 更新奶牛的可生育状态
            if (allCow[every].age >= 3 && allCow[every].age <=7) {
                allCow[every].birth = true;
            } else {
                allCow[every].birth = false;
            }
            // 如果该奶牛当前可生育
            if (allCow[every].birth) {
                allCow.push(new Cow(1, true, false));
            }
        }
    }
    // 计算活着的奶牛数量
    this.countNum = function (Cows){
        var tempcount = 0;
        for (var every in Cows){
            if (Cows[every].state) {
                tempcount++;
            }
        }
        return tempcount;
    }

    for (let i = 2; i <= n; i++) {
        this.caculate(allCow);
    }
    return this.countNum(allCow);

}

// 测试案例通过
// 1 1
// 2 1
// 3 2
// 4 3
// 5 5
// 12 123
var year = 4;
console.log(CowNum(year));
