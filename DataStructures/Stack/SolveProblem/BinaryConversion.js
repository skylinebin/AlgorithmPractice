/**
 * @author SkylineBin
 * @time 2018-8-22
 * @function Using Stack to finish binary conversion
 * 
 */

// import the Stack stucture created by Array
var Stack = require('../CreateStack');

// ten to bin
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
    
        while (decNumber > 0) {
            rem = Math.floor(decNumber % 2);
            remStack.push(rem);
            decNumber = Math.floor(decNumber / 2);
        }

        while (!remStack.isEmpty()) {
            binaryString += remStack.pop().toString();
        }
        return binaryString;
}

console.log(10,divideBy2(10));
console.log(233,divideBy2(233));
console.log(1000,divideBy2(1000));

// 10 '1010'
// 233 '11101001'
// 1000 '1111101000'

console.log('-----------------------------------');

// ten to base
function baceConverter(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';
        // base less than 16

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

console.log(101567,'to',2,':',baceConverter(101567, 2));
console.log(101567,'to',8,':',baceConverter(101567, 8));
console.log(101567,'to',16,':',baceConverter(101567, 16));

// 101567 'to' 2 ':' '11000110010111111'
// 101567 'to' 8 ':' '306277'
// 101567 'to' 16 ':' '18CBF'