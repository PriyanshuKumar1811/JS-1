function x() {
    var a = 5;
    function y() {
        console.log(a);
        var a;
    }
    y();
}
x();