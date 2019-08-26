function BSTree(){

    let Node = function(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

    let root = null;

    let insertNewNode = function(rootNode, node){
        if(node.val < rootNode.val){
            if(rootNode.left === null){
                rootNode.left = node;
            }else{
                insertNewNode(rootNode.left, node);
            }
        }else {
            if(rootNode.right === null){
                rootNode.right = node;
            }else{
                insertNewNode(rootNode.right, node);
            }
        }
    }

    this.insert = function(val){
        let newNode = new Node(val);
        if(root===null){
            root = newNode;
        }else{
            insertNewNode(root,newNode);
        }
    }
}

let TreeWalker = new BSTree();
TreeWalker.insert(1);