/*****
 * 
 * @function 使用 JavaScript 创建 图数据结构
 * @date 2019-3-25
 * 
 */

const Dictionary = require('../Dictionary/CreateDictionary');

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

