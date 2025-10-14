function x() {
    let a = 5;
    function y() {
        console.log(a);
        let a;
    }
    y();
}
x();