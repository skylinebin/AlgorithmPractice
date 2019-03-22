/**
 * @author SkylineBin
 * @time 2018-8-22
 * @function Using Stack to solve this problem of balancing symbols 
 * 
 */

 // import the Stack stucture created by Array
const Stack = require('../CreateStack');

//  Check Symbols Balance
function checkSymbolBance(symbolString) {
    let stack = new Stack(),
        balanced = true,
        index =0,
        symbol, top,
        opens = "([{",
        closers = ")]}";

    while (index < symbolString.length && balanced) {
        symbol = symbolString.charAt(index);
        if (opens.indexOf(symbol) >= 0) {
            stack.push(symbol);
            console.log('open symbol - stacking :', symbol);
        } else {
            console.log('close symbol : ', symbol);
            if (stack.isEmpty()){
                balanced = false;
                console.log('Stack is empty, no more symbols to pop or compare');
            } else {
                top = stack.pop();
                if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                    balanced = false;
                    console.log('poping symbol ',top,' - is not a match compared to ',symbol);
                } else {
                    console.log('poping symbol ', top, ' - is a match compared to ', symbol);
                }
            }
        }
        index++;
    }
    if (balanced && stack.isEmpty()) {
        return true;
    }
    return false;
}

console.log('({[][]})' ,checkSymbolBance('({[][]})'));
console.log('--------------------------');
console.log('({[)(])]})', checkSymbolBance('({[)(])]})'));
console.log('--------------------------');
console.log('({[]()[]{}})', checkSymbolBance('({[]()[]{}})'));