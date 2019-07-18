/*
 * @Author: SkylineBin 
 * @Date: 2019-06-27 21:18:48 
 * @Last Modified by:   SkylineBin 
 * @Last Modified time: 2019-06-27 21:18:48 
 */


function speak(fn, obj) {
    return fn.call(obj);
}