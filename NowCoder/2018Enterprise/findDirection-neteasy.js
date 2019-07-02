/*
 * @Author: SkylineBin 
 * @Date: 2019-07-02 19:20:33 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-02 19:27:10
 */


/****
 * 
 * 
 * 面朝北 N
 * 
 * 输入第一行 旋转几次 N
 * 输入第二行 旋转左右的字符串
 * 
 * 输出最终的旋转方向 
 * 
 * 北 N
 * 东 E
 * 南 S
 * 西 W
 * 
 * 
 */

function lastDirection(numN,str){
    if(!str || str.length === 0){
        return '';
    }
    let dirs = ['N','E','S','W'];
    let start = 0;
    // let outDir = dirs[0];
    for(let i=0;i<str.length;i++){
        if(str[i] === 'R'){
            start=start+1;
        }else if(str[i] === 'L'){
            start=start-1;
        }
        
        if(start === 4){
            start = 0
        }else if(start === -1){
            start = 3;
        }
    }
    return dirs[start];
}

let datas1 = readline().split(' ');
let numN = parseInt(datas1[0]);

let datas2 = readline().split(' ');
let str = String(datas2[0]);

print(lastDirection(numN,str))