function minTimes(n,m,x,y,datas){
    let row=m;
    let col=n;
    let count =0;
    let withiw = 0;
    let withib =0;
    let state;
    for (let i = 0; i < row; i++) {
        let numb=0;
        let numw=0;
        for (let j = 0; j < col; j++) {
            if(datas[j][i]==="#"){
                numb++;
            }else if(datas[j][i]==="."){
                numw++;
            }
        }
        if(numb<numw){
            withiw++;
            withib=0;
            state = true;
        }else{
            withib++;
            withiw=0;
            state =false;
        }
        if(state){
            if((withiw>=x&&withiw<y)){
                count+=numb;
            }
        }else{
            if((withib>=x&&withib<y)){
                count+=numw;
            }
        }
        
        // count+=Math.min(numb,numw);
    }
    return count;
}