function processStr(numN,datas){
    let output = [];

    function proStr(str){
        let pdstr=""
        let store = [];
        state = false;
        let count = "";
        for (let j = 0; j < str.length; j++) {
            let temp = str[j];
            if(temp>='0'&& temp<='9'){
                count += temp;
                state= true;
                // console.log(count);
            }else if(temp === '('){
                count = "";
                pdstr += store.join('');
                store=[];
            }else if(temp === ')'){
                count="";
                state = true;
            }else{
                if(count !=='' && state){
                    // console.log(count);
                    let tstr = '';
                    let add = Number(count);
                    cstr = store.join('');
                    let k=0;
                    while(k<add){
                        tstr+=cstr;
                        k++;
                    }
                    pdstr+= tstr;
                    state= false;
                    store=[];
                    count="";
                    store.push(temp);
                }else{
                    store.push(temp);
                }
            }
        }

        if(store.length){
            pdstr += store.join('');
            store = [];
        }

        return pdstr;
    }

    for (let i = 0; i < datas.length; i++) {
        output.push(proStr(datas[i]));
    }
    return output;
}


let numN=4;
let datas = ["A11B", "(AA)2A", "((A2B)2)2G", "(YUANFUDAO)2JIAYOU", "A2BC4D2"];
console.log(processStr(numN,datas));
