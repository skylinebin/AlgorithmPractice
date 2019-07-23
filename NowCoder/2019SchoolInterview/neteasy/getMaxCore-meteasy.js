/*
 * @Author: SkylineBin 
 * @Date: 2019-07-23 10:29:30 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-23 10:58:42
 */

/****
 * 
 * 字母卡片
 * 
 * 给你n张卡片，卡片上仅包含大写英文字母，现你可从这n张卡片中选出k张，要求得到尽可能高的分数。
 * 关于分数的计算方式，在你所选择的k张卡片中，含有相同字母的卡片分数为卡片数乘以相同卡片个数。
 * 就样例而言，选择九张D和其他任意一张，得到的结果为9*9+1 。
 * 
 * 输入： 
 * 输入包含两行，第一行含两个整数n，k(0<k<=n<=1,000,000）
 * 第二行为每张卡片上的字母
 * 
 * 输出：
 * 输出仅包含一行，输出尽可能高的分数
 * 
 * 
 */

function getMaxCore(select, str){
    let maxCore = 0;
    str = str.split('').sort().join('');
    let store = new Map();
    // 使用Map统计字符情况
    for(let i=0;i<str.length;i++){
        if(!store.get(str[i])){
            store.set(str[i],1);
        }else {
            store.set(str[i],store.get(str[i])+1);
        }
    }
    // 只需要字符出现的数据情况，至于是什么字符就无关紧要
    let values = [...store.values()];
    values.sort((a,b)=>b-a); // 按照出现次数从大到小排序
    let count = select; // 分层次解决问题
    for (let i=0;i<values.length;i++) {
        if(values[i]>count && count>0){
            maxCore += count*count;
            count = 0;
        }else if(count>0) {
            count = count-values[i];
            maxCore += values[i]*values[i];
        }
    }
    return maxCore;
}

// let select = 10;
// let str = "DZFDFZDFDDDDDDF";
let select = 40;
let str = "JVLUPUORKENJXVWJXNKMPRXOVKBOTDPSAWZEQQULEEYCOZCRKV";

console.log(getMaxCore(select, str));


let tempdata;
// 针对不定的输入数据
while(tempdata=readline()){
    let datas = tempdata.split(' ');
    let totalNum = parseInt(datas[0]);
    let select = parseInt(datas[1]);

    let data = readline().split(' ');
    let str = String(data[0]);
    let core = getMaxCore(select, str);
    if(core){
        print(core)
    }
}