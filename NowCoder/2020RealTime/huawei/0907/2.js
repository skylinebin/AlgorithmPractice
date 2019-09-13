function findtoPart(n,m){
    if(m>n){
        return 0;
    }
    let count=n;
    let store=[];
    function dfs(n,m,start,current,stores){
        if(current<m && start<n){
            if(stores.every((a)=>a!==start)){
                stores.push(start);
                let temp = current;
                for(let i=0;i<n;i++){
                    if(stores && stores.every((a)=>a!==i)){
                        dfs(n,m,i,temp+1,stores.slice());
                    }
                }
            }
            
        }else if(current===m){
            stores.sort((a,b)=>a-b);
            let datas= stores.join('');
            if(store && store.every((a)=>a!==datas)){
                store.push(stores.join(''));
                count++;
            }else if(!store){
                store.push(stores.join(''));
                count++;
            }
        }
    }
    for(let i=0;i<n;i++){
        dfs(n,m,i,0,[]);
    }
    return count;
}


let n=3;
let m=3;
console.log(findtoPart(n,m));