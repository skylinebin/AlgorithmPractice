var M = parseInt(readline());
var labels = readline().split(" ");
var hasChild = readline().split(" ");
var pouds = readline().split(" ");
var N = parseInt(readline());
var values = readline().split(" ");
var P = parseInt(readline());
var key = readline().split(" ");
let i = 0;
while(i < P){
    let temp = key[i];
    let index = labels.indexOf(temp);
    if(index > -1){
        if(i == P-1){
        if(hasChild[index] == 0){
            let count = 0;
            for(let j = 0; j < index; j++){
                if(hasChild[j]==0){
                    count ++;
                }
            }
            print(+values[count]);
            }else{
                print(0);
            }
        }else{
            if(hasChild[index] == 1 ){
                i++;
            }else{
                print(0);
            }
        }
    }else{
        print(0);
    }
}