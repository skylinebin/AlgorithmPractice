function findKeyValue(numM,labels,hasChild,pouds,values,keys){

    let store = [];
    let leafNodes = [];
    let leafValues = [];
    for (let i = 0; i < hasChild.length; i++) {
        if(hasChild[i]===0){
            leafNodes.push(i);
            leafValues.push(labels[i]);
        }
        
    }
    let lastLabel = keys[keys.length-1];
    if(leafValues.indexOf(lastLabel)===-1){
        return 0;
    }

    for (let k = 0; k < leafValues.length; k++) {
        if(leafValues[k]===lastLabel){
            return values[k];
        }
    }

}






// let numM = parseInt(readline());
// let labels = readline().split(' ');
// let hasChild = readline().split(' ');
// let pouds = readline().split(' ');
// let numV = parseInt(readline());
// let values = readline().split(' ');
// let numK = parseInt(readline());
// let keys = readline().split(' ');

let numM = 15;
let labels = [115,112,116,97,111,121,114,101,107,112,121,114,102,115,116];
let hasChild = [0,0,0,1,1,0,1,0,0,0,1,1,1,1];
let pouds = [1,1,0,1,0,1,1,1,0,0,0,1,1,0,0];
let numV = 8;
let values = [1,2,3,4,5,6,7,8];
let numK = 3;
let keys = [116,114,112];
// console.log(object);
console.log(findKeyValue(numM,labels,hasChild,pouds,values,keys))
