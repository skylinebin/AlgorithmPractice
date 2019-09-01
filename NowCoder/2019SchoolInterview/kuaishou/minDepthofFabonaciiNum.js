function minDepth(num){
    let before=0,after=1;
    while(before<=num&&after<=num){
        after+=before;
        before=after-before;
    }
    return Math.min(Math.abs(before-num),Math.abs(after-num));
}


let num = parseInt(readline());
print(minDepth(num));