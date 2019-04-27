function countChoose(locations, distance) {
    if (locations.length <= 2) {
        return 0;
    }
    var allFunction = [];
    var realDistance = distance;
    var glen = locations.length;
    if (glen == 3) {
        return 1;
    }

    this.countDistance = function (a, b) {
        if (Math.abs(a - b) <= realDistance) {
            return true;
        } else {
            return false;
        }
    }

    return glen * (glen - 1) * (glen - 2) / 6;

}

var initPre = readline().split(" ");
var countN = parseInt(initPre[0]);
var countD = parseInt(initPre[1]);

var datas = readline().split(" ");
var realdatas = [];

for (var i = 0; i < countN; i++) {
    realdatas.push(parseInt(datas[i]));
}
var result = countChoose(realdatas, countD);
print(result);