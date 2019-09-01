var minarr = [];
var arr = [];

function push(node) {
    arr.push(node);
    if (minarr.length === 0) {
        minarr.push(node);
    } else {
        if (node < minarr[0]) {
            minarr.unshift(node);
        } else {
            minarr.unshift(minarr[0]);
        }
    }
}

function pop() {
    arr.pop();
    minarr.shift();
}

function top() {
    return arr[0];
}

function min() {
    return minarr[0];
}


push(1);
push(2);
push(3);
console.log(min());
push(0);
console.log(min());