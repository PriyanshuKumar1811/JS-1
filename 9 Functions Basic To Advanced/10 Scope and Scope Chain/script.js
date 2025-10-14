let a = 3;
function x() {
    let b = 5;
    console.log({a});
    function y() {
        let c = 7;
        console.log({b});
        function z() {
            console.log({c});
        }
        z();
    }
    y();
}
x();