
function findMininMax(numN,data){
    let output = [];

    function findMax(){

    }
    function findMin(){
        
    }

    function getMinofMaxNum(data,k){
        let tempArr = data.slice(0);
        let store = [];
        for(let j=0;j<=data.length-k;j++){
            let arr = data.slice(j,j+k);
            store.push(Math.max(...arr));
        }
        return Math.min(...store);
    }
    for(let i=1;i<=numN;i++){
        output.push(getMinofMaxNum(data,i))
    }
    return output;
}

let numN = 6;
let data = [1, 3, 2, 4, 6, 5];
console.log(findMininMax(numN,data));
