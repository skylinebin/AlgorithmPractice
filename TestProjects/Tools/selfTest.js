function dictionarySortList(n, m) {
    if (n < m) {
        return null;
    }
    var sortArr = [];

    this.dfs = function (current, n, sortArr) {
        if (current > n) {
            return;
        }
        sortArr.push(current);
        for (let i = 0; i <= 9; i++) {
            if (10 * current + i > n) {
                return;
            }
            this.dfs(10 * current + i, n, sortArr);
        }
    }
    for (let j = 1; j <= 9; j++) {
        this.dfs(j, n, sortArr);
    }

    return sortArr[m - 1];
}


while (line = readline()) {
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    var m = dictionarySortList(a, b);
    print(m);
}