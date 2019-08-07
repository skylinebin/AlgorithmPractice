/*
 * @Author: SkylineBin 
 * @Date: 2019-08-07 16:48:28 
 * @Last Modified by:   SkylineBin 
 * @Last Modified time: 2019-08-07 16:48:28 
 */


function process(str){
    return parseInt(str);
}
let str;
while(str=readline()){
    if(str){
        print(process(str));
    }
}