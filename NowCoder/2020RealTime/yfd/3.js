function batchLoad(urls, concurrency){
    let res=[];
    let len = urls.length;
    let index=0;
    let current=[];
    return new Promise((resolve,reject)=>{

        function processData(){
            if(index===len){
                return Promise.resolve();
            }
            const url = urls[index++];
            let p = load(url); // load 的返回是一个Promise
            res.push(p);
            let e = p.then(()=>current.splice(current.indexOf(e),1));
            // 有一个promise执行完毕，就从当前数组中删除这个 
            current.push(e);
            let r = Promise.resolve();
            // 如果当前的并发数少于限定的大小时，使用 r 实例新的 promise 并执行
            if(current.length>=concurrency){
                r = Promise.race(current);
                // 如果超过并发的限制，需要等待有promise 完成后再开始新的连接
            }
            return r.then(()=> processData());
        }

        processData().then(()=> resolve(Promise.all(res)));
    })

}


function load(url){
    return new Promise((rs,rj)=>{
        setTimeout(()=>{
            // rs() or rj();
            rs(url);
        },100)
    })
}

batchLoad(['a','b','c'],2).then(data => {
    // data = [a,err,c];
    console.log(data);
})


        // for(let i=0;i<len;){
        //     if(count<concurrency){
        //         count++;
        //         load(urls[i]).then((res)=>{
        //             res[i]=res;
        //             count--;
        //             index++;
        //         }).catch((err)=>{
        //             res[i]=err;
        //             count--;
        //         });
                
        //     }
        //     if(index===len-1){
        //         state=false;
        //     }
        // }