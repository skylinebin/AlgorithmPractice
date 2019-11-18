function rgb (r, g, b) {
    let ostr="#";
    function initNumber(num){
        if(num>=0&&num<=255){
            return num;
        }else if(num>255){
            return 255;
        }else{
            return 0;
        }
    }
    r = initNumber(r);
    g = initNumber(g);
    b = initNumber(b);
    function processStr(str){
        if(str.length==1){
            return "0"+str
        }else{
            return str;
        }
    }
    ostr+=processStr(r.toString(16).toUpperCase());
    ostr+=processStr(g.toString(16).toUpperCase());
    ostr+=processStr(b.toString(16).toUpperCase());
    return ostr;
}
let r=255;
// 23,123,55


console.log(rgb(0,0,0));