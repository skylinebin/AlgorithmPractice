function binSearch(left,right,val,arr){

    let mid = left + parseInt((right-left)/2);
    if(val<arr[mid]){
        return binSearch(left,mid-1,val,arr);
    }else if(val>arr[mid]){
        return binSearch(mid+1,right,val,arr);
    }else{
        return mid;
    }
    return -1;
}