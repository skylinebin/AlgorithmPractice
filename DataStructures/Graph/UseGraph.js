/*****
 * 
 * @function 使用 JavaScript 创建 图数据结构
 * @date 2019-3-25
 * 
 */

const Dictionary = require('../Dictionary/CreateDictionary');
const Queue = require('../Queue/CreateQueue');
const Stack = require('../Stack/CreateStack');

function Graph() {
    var vertices = [];
    var adjList = new Dictionary();

    // 向图中添加一个新顶点
    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    }

    // 向图中添加一个边 邻接表的形式
    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function () {
        var s = '';
        for (let i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';                
            }
            s += '\n';
        }
        return s;
    };

    // 初始化 颜色标注矩阵
    var initializeColor = function () {
        var color = [];
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';            
        }
        return color;
    };

    // 广度优先遍历实现过程
    this.bfs = function (v, callback) {
        var color = initializeColor(),
        queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
            neighbors = adjList.get(u);
            color[u] = 'gray'; // 灰色也可用 grey
            for (let i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'gray';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    // 广度优先遍历改进版本 用于搜索某一顶点到其他节点之间的距离
    this.BFS = function(v) {
        var color = initializeColor(),
        queue = new Queue(),
        d = [],
        pred = [];
        queue.enqueue(v);

        // 初始化数组 d 与 pred
        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
            neighbors = adjList.get(u);
            color[u] = 'gray';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'gray';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        // 返回了距离数组 和 前溯点数组
        return {
            distance: d,
            predecessors: pred
        };
    }

    // 深度优先遍历搜索过程
    this.dfs = function (callback) {
        var color = initializeColor();
        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    }

    // 深度优先遍历访问过程
    this.dfsVisit = function (u, color, callback) {
        color[u] = 'gray';
        if (callback) {
            callback(u);
        }
        var neighbors = adjList.get(u);
        for (let i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            
        }
    }

}

function printNode (value) {
    console.log('Visited vertex: ' + value);
}


var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let index = 0; index < myVertices.length; index++) {
    graph.addVertex(myVertices[index]);    
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());
console.log('------------------------------------');
console.log('------------------------------------');

// 广度优先遍历
graph.bfs(myVertices[0], printNode);
console.log('------------------------------------');
console.log('------------------------------------');

// 输出图的顶点与其他各点之间的距离，以及各点的前溯点
var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);

console.log('------------------------------------');
console.log('------------------------------------');

// ! 根据前溯点数组，构建从顶点 A 到 其他顶点的路径
var fromVertex = myVertices[0];
for (let i = 1; i < myVertices.length; i++) {
    let toVertex = myVertices[i],
    path = new Stack();
    for (let v = toVertex; v !== fromVertex; v=shortestPathA.predecessors[v]) {
        path.push(v);
    }
    path.push(fromVertex);
    var s = path.pop();
    while (!path.isEmpty()) {
        s += ' - ' + path.pop();
    }
    console.log(s);
}
