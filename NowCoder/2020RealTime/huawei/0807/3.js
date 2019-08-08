

function process(str){
    let data = eval(str);
    if(data){
        return 1;
    }else{
        return 0;
    }
}

let str = readline();
print(process(str));
