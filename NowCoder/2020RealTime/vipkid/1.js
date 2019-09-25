function outputSum1(num) {
    var res = [];

    var a=[];
    for (let i = 0; i < 10000; i++) {
        a[i]=0;
        
    }
    var y;
    var ss = 0;
    function dfs(n, cnt, pre) {
        if (n == 0) {
            ss++;
            var temp="";
            for (var i = 1; i < cnt; i++) {
                temp+=a[i]+"+";
            }
            temp+=a[cnt];
            if (ss % 4 == 0)
                res.push(temp);
            else {
                if (a[1] != y)
                    temp="";
            }
        }
        for (var i = pre; i <= n; i++) {
            a[++cnt] = i;
            dfs(n-i, cnt, i);
            cnt--;
        }
    }
    dfs(num,0,1);
    return res;
}


function outputSum(num) {
    var res = [];
    var back=[];
    var y=0,count=0,pos=-1;
    var n=num;
    function dfs(x) {
        if(y===n){
            count++;
            temp="";
            for (var i = 0; i < pos; i++) {
                temp+= res[i]+"+";
            }
            temp+=res[pos];
            
            if(back.indexOf(temp)===-1){
                back.push(temp);
            }
            
            return;
        }
        if(y>n){
            return;
        }
        for (let i =x; i < n+1; i++) {
            res[++pos]=i;
            y+=i;
            dfs(i);
            pos--;
            y-=i;
            
        }

    }
    dfs(1);
    return back;
}

// var num = readInt();
// var res = outputSum(num);
// for (var i = 0; i < res.length; i++) {
//     print(res[i]);
// }


var num=4;
var res = outputSum2(num);
for (var i = 0; i < res.length; i++) {
    console.log(res[i]);
}





