/****
 * 
 * @author SkylineBin
 * @time 2018-10-14
 * 
 * @function Use ES6 Set to modify some function
 * 
 * 
 */

 let setA = new Set();
 setA.add(1);
 setA.add(2);
 setA.add(3);

  let setB = new Set();
  setB.add(2);
  setB.add(3);
  setB.add(4);

//   union two sets
let unionAb = new Set();
for (let x of setA) {
    unionAb.add(x);   
}
for (let y of setB) {
    unionAb.add(y);
}


// intersection of two sets
let intersection = function(seta,setb) {
    let intersectionSet = new Set();
    for(let x of seta){
        if (setb.has(x)) {
            intersectionSet.add(x);
        }
    }
    return intersectionSet;
}

let intersectionAB = intersection(setA, setB);

// let intersectionAb = new Set([x for (x of setA) if (setB.has(x))]);


let difference = function (seta, setb) {
    let differenceSet = new Set();
    for (let x of seta) {
        if (!setb.has(x)) {
            differenceSet.add(x);
        }
    }
    return differenceSet;
}

let differenceAB = difference(setA, setB);

// let differenceAb = new Set([x for (x of setA) if (!setB.has(x))]);