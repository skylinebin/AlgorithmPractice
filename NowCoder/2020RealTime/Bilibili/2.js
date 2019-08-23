function findDataofSum(numN,nums,sumD){
    let output=[];
    let before=0;
    let after=numN-1;
    while(before<after){
        let tempSum = nums[before]+nums[after];
        if(tempSum<sumD){
            before++;
        }else if(tempSum>sumD){
            after--;
        }else{
            output.push(nums[before]);
            output.push(nums[after]);
            break;
        }
    }
    if(output.length===0){
        return "notfound";
    }else{
        return output.join(" ");
    }
}

// let numN = parseInt(readline());
// let nums=[];
// let count=0;
// let datas = readline().split(' ');
// while(count<numN){
//     nums.push(parseInt(datas[count]));
//     count++;
// }
// let sumD = parseInt(readline());
// print(findDataofSum(numN,nums,sumD));