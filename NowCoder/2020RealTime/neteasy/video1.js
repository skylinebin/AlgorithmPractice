





// 实现事件的防抖



// 二叉树的广度优先遍历的非递归的写法


// 二叉树的广度优先遍历的递归的写法
function printBinTree(head,layer){
    layer = layer || 0;
    let store=[];
    if(head===null){
        return null;
    }
    if(!store[layer]){
        store[layer]=[head.val];
    }else{
        store[layer].push(head);
    }
    if(store.left!==null){
        printBinTree(store.left,layer+1);
    }
    if(store.right!==null){
        printBinTree(store.right,layer+1);
    }
}