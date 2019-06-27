/*
 * @Author: SkylineBin 
 * @Date: 2019-06-27 21:12:14 
 * @Last Modified by:   SkylineBin 
 * @Last Modified time: 2019-06-27 21:12:14 
 */


function fizzBuzz(num) {
    if(!num || typeof num !== 'number'){
        return false;
    }else {
        if(num%3 === 0 && num%5===0){
            return 'fizzbuzz';
        }else if(num%3 === 0){
            return 'fizz';
        }else if(num%5===0){
            return 'buzz';
        }else {
            return num;
        }
    }
}