// 大数相加
// big datas add function

function addTwoNums(num1,num2){
    let res='';
    let copyN1=String(num1).split('');
    let copyN2=String(num2).split('');
    let state=0;
    let output=[];
    while(copyN1.length>0&&copyN2.length>0){
        let t1=parseInt(copyN1.pop());
        let t2=parseInt(copyN2.pop());
        let temp=t1+t2+state;
        if(temp>=10){
            temp= temp%10;
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
                if(temp>=10){
                    temp= temp%10;
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
                if(temp>=10){
                    temp= temp%10;
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

// let num1='788927347946';
// let num2='80388927348946';
let num1='11';
let num2='19';

console.log(addTwoNums(num1,num2));