/*****
 * 
 * @function 创建二叉搜索树
 * @date 2019-3-23
 * 
 */

function BinarySearchTree() {
    
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    // 向树中插入一个新的键
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    // 将节点插入非根节点的其他位置(按照二叉搜索树的方式，左侧小于根节点，右侧大于等于根节点)
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    // 在树中查找一个键，存在为 true 不存在为 false
    this.search = function (key) {

    }

    // 通过中序遍历方式遍历所有节点
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    }
    // ! 中序遍历执行策略
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    // 通过先序遍历方式遍历所有节点
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    }
    // ! 先序遍历执行策略
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    
    // 通过后序遍历方式遍历所有节点
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    }
    // ! 后序遍历执行策略
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    // 返回树中最小的值(键)
    this.min = function () {
        return minNode(root);
    }

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null){
                node = node.left;
            }
            return node.key;
        }
    }

    // 返回树中最大的值(键)
    this.max = function () {

    }

    // 从树中移除某个键
    this.remove = function (key) {

    }
}

function printNode (value) {
    console.log(value);
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.inOrderTraverse(printNode);
console.log('------------------------------------');
console.log('------------------------------------');
tree.preOrderTraverse(printNode);
console.log('------------------------------------');
console.log('------------------------------------');
tree.postOrderTraverse(printNode);