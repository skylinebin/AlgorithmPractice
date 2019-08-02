/**
 * 
 * 约德尔测试
 * 
*/


function percentStr(dataone,datatwo){
	let outside;
    let count= 0;
    for(let i=0;i<dataone.length;i++){
        if(/[0-9a-zA-Z]/.test(dataone[i])){
            if(datatwo[i]==='1'){
                count++;
            }
        }else {
            if(datatwo[i]==='0'){
                count++;
            }
        }
    }
    outside = (100*count/datatwo.length).toFixed(2)+"%";
    return outside;
}

let dataone = "@!%12dgsa";
let datatwo = "000111111";
console.log(percentStr(dataone,datatwo));


// temp = '0';
// if((dataone[i]>='a' && dataone[i]<='z') || (dataone[i]>='A' && dataone[i]<='Z') || (dataone[i]>='0' && dataone[i]<='9')){
//     temp = '1';
// }
// onestr+= temp;
// if(temp === datatwo[i]){
//     count++;
// }



let dataone = read_line();
let datatwo = read_line();

print(percentStr(dataone,datatwo))


// let dataone = read_line().trim();
// let datatwo = read_line().trim();