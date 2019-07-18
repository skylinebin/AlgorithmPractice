/*
 * @Author: SkylineBin 
 * @Date: 2019-06-25 21:31:59 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-25 21:45:21
 */


/*****
 * 
 * 事件的监听和触发
 * 
 * 
 */

let btn = document.getElementById('buttom');
btn.onclick = function (){

}

let EventEmitter = {
    on(e){
        let btn = document.getElementById('buttom');
        btn.addEventListener(e,function(){
            console.log(this.id);
        },true);
    },
    trigger(e){
        let btn = document.getElementById('buttom');
        btn.dispatchEvent(e,function(){
            console.log(this.id);
        },true);
    }
}