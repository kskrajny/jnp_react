export const shuffle = arr => {
    var i = arr.length;
    while(i) {
        var j = Math.floor(Math.random() * i);
        var t = arr[--i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}