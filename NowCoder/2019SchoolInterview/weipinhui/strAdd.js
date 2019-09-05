/*
 * @Author: SkylineBin 
 * @Date: 2019-09-01 16:06:49 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-09-01 16:07:24
 */


/****
 * 
 * 二进制字符串相加
 * 
 * 
 */

function addTwoStringNums(str1,str2){
    let res='';
    let copyN1=str1.split('');
    let copyN2=str2.split('');
    let state=0;
    let output=[];
    while(copyN1.length>0&&copyN2.length>0){
        let t1=parseInt(copyN1.pop());
        let t2=parseInt(copyN2.pop());
        let temp=t1+t2+state;
        if(temp>=2){
            temp= temp%2;
            state=1;
        }else{
            state=0;
        }
        output.push(temp);
    }
    if(copyN1.length>0&&copyN2.length===0){
        if(state){
            while(copyN1.length>0){
                temp=parseInt(copyN1.pop())+state;
                if(temp>=2){
                    temp= temp%2;
                    state=1;
                }else{
                    state=0;
                }
                output.push(temp);
            }
        }else{
            while(copyN1.length>0){
                output.push(copyN1.pop());
            }
        }
    }
    if(copyN2.length>0&&copyN1.length===0){
        if(state){
            while(copyN2.length>0){
                temp=parseInt(copyN2.pop())+state;
                if(temp>=2){
                    temp= temp%2;
                    state=1;
                }else{
                    state=0;
                }
                output.push(temp);
            }
        }else{
            while(copyN2.length>0){
                output.push(copyN2.pop());
            }
        }
    }
    if(state){
        output.push(state);
    }
    res=output.reverse().join('');
    return res;
}




let datas=readline().split(' ');
let str1=datas[0];
let str2=datas[1];
print(addTwoStringNums(str1,str2))