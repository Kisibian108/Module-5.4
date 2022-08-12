function isFibonacci(num) {
    var a = 0;
    var b = 1;
    var c = a + b;
    var sum = c;
    function loop(start, end, callBack) {
        if (start < end) {
            callBack(start);
            return loop(start + 1, end, callBack);
        }
    }
    loop(0, num, function (index) {
        console.log(c);
        sum += c;
        a = b;
        b = c;
        c = a + b;
    });
    console.log("Sum: " + sum);
}
isFibonacci(15);


