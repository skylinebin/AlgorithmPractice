let add = function(){
    let store = [];
    let _args = Array.prototype.slice.call(arguments);
    if(_args){
        store.push(..._args);
    }
    let addFunc = function(){
        store.push(...arguments);
        return addFunc;
    }
    addFunc.done = function(){
        let sum = store.reduce(function(a,b){
            return a+b;
        });
        return sum;
    }
    return addFunc;
}

let sum = add(1)(2)(3);

sum = sum(4)(5)(6).done();
console.log(sum);