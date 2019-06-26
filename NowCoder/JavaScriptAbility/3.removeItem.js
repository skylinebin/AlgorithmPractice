function remove(arr, item) {
    if (!arr || arr.length === 0) {
        return [];
    }
    var back = [];
    for (var i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) !== JSON.stringify(item)) {
            back.push(arr[i]);
        }
    }
    return back;
}
