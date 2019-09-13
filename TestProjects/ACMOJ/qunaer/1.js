function checkIfIn(point, edgePoints) {
    var x = parseFloat(point[0]),
        y = parseFloat(point[1]);

    var state = false;
    var lens = edgePoints.length;
    for (var i = 0, j = lens - 1; i < lens; j = i++) {
        var xi = parseFloat(edgePoints[i][0]),
            yi = parseFloat(edgePoints[i][1]);
        var xj = parseFloat(edgePoints[j][0]),
            yj = parseFloat(edgePoints[j][1]);

        var condition = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (condition) {
            state = !state;
        }

    }
    return state;
}


var data;
while (data = read_line()) {
    var datas = data.split(" ");
    var len = datas.length;
    var point = datas[0].split(",");
    var count = 1;
    var edgePoints = [];
    while (count < len) {
        edgePoints.push(datas[count].split(","));
        count++;
    }
    print(checkIfIn(point, edgePoints));
}



// var point=[1,1.5];
// var edgePoints=[[0,0],[2,0],[1,2],[0,2]];
var point = [2, 1];
var edgePoints = [
    [0, 0],
    [2, 0],
    [1, 1],
    [1, 2],
    [0, 2]
];
console.log(checkIfIn(point, edgePoints));





function bigNumAdd(a, b) {
    let sum = '';
    let tempState = false,
        tempData = 0;
    a = String(a).split('');
    b = String(b).split('');
    while (a.length || b.length || tempState) {
        if (a.length && b.length) {
            tempData += ~~a.pop() + ~~b.pop();
        } else if (!a.length && b.length) {
            tempData += 0 + ~~b.pop();
        } else if (!b.length && a.length) {
            tempData += ~~a.pop() + 0;
        }

        sum = (tempData % 10) + sum;
        tempData = tempData > 9 ? 1 : 0;
        tempState = tempData > 0;
    }
    return sum;
}

var line;
while (line=readline()) {
    line = line.split(' ');
    var a = line[0];
    var b = line[1];
    print(bigNumAdd(a, b));
}