while (n = readInt()) {
    var count;
    var sun;
    for (var i = 0; i < n; i++) {
        count = 4;
        var tem = readInt();
        sum = 2;
        while (tem > 0) {
            if (sum >= tem) {
                break;
            }
            count++;

            if (count % 4 === 1) {
                sum = sum + 0.5 + parseInt(count / 4) - 1;
            } else if (count % 4 == 2 || count % 4 == 3) {
                sum = sum + 1.5 + parseInt(count / 4) - 1;
            } else {
                sum = sum + 2.5 + parseInt(count / 4) - 2;
            }
        }
        print(count);
    }
}