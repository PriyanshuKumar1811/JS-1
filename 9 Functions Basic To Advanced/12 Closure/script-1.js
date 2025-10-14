/*
    --> A Closure is the combination of a function bundled together with references to its lexical environment.
    --> In other words, A Closure is a function that remembers its outer variables and can access them.
*/


function x() {
    let a = 3;
    function y() {
        let b = 5;
        console.log(a);
        function z() {
            console.log(b);
        }
        z();
    }
    y();
}
x();