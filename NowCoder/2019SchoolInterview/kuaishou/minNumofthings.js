/*
 * @Author: SkylineBin 
 * @Date: 2019-07-25 14:14:51 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-07-25 14:15:43
 */

/*****
 * 
 * 
 * 
 * 
 */


// 2/3 时间复杂度太高
function getAll(all){
    let count = Number.MAX_SAFE_INTEGER;
    let tempState = all;
    let ido = [7,5,3];
    
    this.dfs = function(current,times){
        if(current === 0){
            if(count > times){
                count = times;
            }
        }
        if(current>0){
            for(let j=0;j<ido.length;j++){
                this.dfs(current-ido[j],times+1)
            }
        }else{
            return;
        }
    }

    this.dfs(tempState,0);
    if(count === Number.MAX_SAFE_INTEGER){
        count = -1;
    }
    
    return count;
}





let data = readline().split(' ');
let all = parseInt(data[0]);
print(getAll(all));