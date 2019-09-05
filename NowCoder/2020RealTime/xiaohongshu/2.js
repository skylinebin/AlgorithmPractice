function maxCount(num,xArr,hArr){
    var store=[];
    for(var i=0;i<num;i++){
        store.push([xArr[i],hArr[i]]);
    }
    var copy1=store.slice();
    var copy2=store.slice();
    copy1.sort((a,b)=>{
        return (a[0]+a[1])-(b[0]+b[1]);
    });
    copy2.sort((a,b)=>(a[1]-b[1]));
    console.log(copy1);
    console.log(copy2);
    var count1=1;
    var tempS=copy1[0];
    for(var j=1;j<copy1.length;j++){
        if(copy1[j][0]>=tempS[0]&&copy1[j][1]>=tempS[1]){
            tempS=copy1[j];
            count1++;
        }
    }
    var count2=1;
    var tempS2=copy2[0];
    for(var j=1;j<copy2.length;j++){
        if(copy2[j][0]>=tempS2[0]&&copy2[j][1]>=tempS2[1]){
            tempS2=copy2[j];
            count2++;
        }
    }
    return Math.max(count1,count2)+1;
}


var num=4;
var xArr=[3,1,1,2];
var hArr=[2,1,3,2];
console.log(maxCount(num,xArr,hArr));


// var num;
// while(num=readInt()){
//     var count=0;
//     var xArr=[];
//     var hArr=[];
//     while(count<num){
//         xArr.push(readInt());
//         hArr.push(readInt());
//         count++;
//     }
//     print(maxCount(num,xArr,hArr));
// }